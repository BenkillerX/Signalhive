import crypto from "crypto";

export const generateVerificationCode = () => {
    return crypto.randomInt(100000, 1000000).toString();
};
export const hashVerificationCode = (code) => {
    return crypto
        .createHash("sha256")
        .update(code)
        .digest("hex");
};