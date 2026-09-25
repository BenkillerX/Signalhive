import jwt from "jsonwebtoken"

export const authenticateToken = (req, res, next)=>{
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
        return res.status(401).json({
            message:"Unauthorized request"
        })
    }

    const token = authHeader.split(" ")[1]
    if (!token) {
        return res.status(401).json({
            message:"No token Provided"
        })
    }

    try {
        const verifiedData = jwt.verify(token, process.env.JWT_SECRET)
        
        req.user = verifiedData;
        next()
    } catch (error) {
        return res.status(403).json({
            message: "Invalid or expired token"
        });
    }
}

export const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        message: "Authentication required",
      });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        message: "You are not authorized to access this resource",
      });
    }

    next();
  };
};