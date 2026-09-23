import User from "../../models/User.js";
import bcrypt from "bcrypt";
import {hashVerificationCode,generateVerificationCode,} from "../../utils/emailVerification.js";
import { generateToken } from "../../utils/Token.js";
import { sendVerificationEmail } from "../../services/emailService.js";

export async function register(req, res) {
    try {
        const { firstname, lastname, password } = req.body;
        const email = req.body.email.toLowerCase().trim();

        if (!firstname || !lastname || !email || !password) {
            return res.status(400).json({
                message: "All fields are required.",
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                message: "An account with this email already exists.",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        // Generate verification code
        const verificationCode = generateVerificationCode();
        const hashedVerificationCode =hashVerificationCode(verificationCode);

        // Code expires in 10 minutes
        const verificationExpires = new Date(
            Date.now() + 10 * 60 * 1000
        );

        const user = await User.create({
            firstname,
            lastname,
            email,
            password: hashedPassword,
            role: "user",
            isEmailVerified: false,
            emailVerificationCode: hashedVerificationCode,
            emailVerificationExpires: verificationExpires,
            onboardingCompleted: false,
        });

        // Send verification email
        await sendVerificationEmail(email, verificationCode);

        return res.status(201).json({
            message: "Account created. Please verify your email.",
            email: user.email,
        });
    } catch (error) {
        console.error(
            "Registration error:",
            error instanceof Error ? error.message : error
        );

        return res.status(500).json({
            message: "An error occurred while creating your account.",
        });
    }
}

export async function Login(req, res) {
    try {
        const { password } = req.body;
        const email = req.body.email.toLowerCase().trim();

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required.",
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password.",
            });
        }

        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordMatch) {
            return res.status(401).json({
                message: "Invalid email or password.",
            });
        }

        // Don't allow unverified users to log in
        if (!user.isEmailVerified) {
            return res.status(403).json({
                message: "Please verify your email before logging in.",
                email: user.email,
                isEmailVerified: false,
            });
        }

        return res.status(200).json({
            message: "Login successful.",
            token: generateToken(user),
            user: {
                id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                role: user.role,
                isEmailVerified: user.isEmailVerified,
                onboardingCompleted: user.onboardingCompleted,
            },
        });
    } catch (error) {
        console.error(
            "Login error:",
            error instanceof Error ? error.message : error
        );

        return res.status(500).json({
            message: "An error occurred while logging in.",
        });
    }
}

export const emailValidation = async (req, res) => {
    try {
        const { email, code } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found.",
            });
        }

        if (user.isEmailVerified) {
            return res.status(400).json({
                message: "Email is already verified.",
            });
        }

        if (!user.emailVerificationExpires ||user.emailVerificationExpires < new Date()) {
            return res.status(400).json({
                message: "Verification code has expired.",
            });
        }

        const hashedCode = hashVerificationCode(code);

        if (hashedCode !== user.emailVerificationCode) {
            return res.status(400).json({
                message: "Invalid verification code.",
            });
        }

        user.isEmailVerified = true;
        user.emailVerificationCode = undefined;
        user.emailVerificationExpires = undefined;

        await user.save();

        return res.status(200).json({
            message: "Email verified successfully.",
            token: generateToken(user),
            user: {
                id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                role: user.role,
                isEmailVerified: user.isEmailVerified,
                onboardingCompleted: user.onboardingCompleted,
            },
        });
    } catch (error) {
        console.error(
            "Verification email error:",
            error instanceof Error ? error.message : error
        );

        return res.status(500).json({
            message: "An error occurred while verifying your email.",
        });
    }
};
export async function getCurrentUser(req, res) {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json({
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
}