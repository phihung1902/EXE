import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    console.log("Cookies:", req.cookies);
    console.log("Authorization Header:", req.headers.authorization);
    
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    console.log("Extracted Token:", token);
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }
    const decode = await jwt.verify(token, process.env.SECRET_KEY);
    if (!decode) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }
    req.id = decode.userId;
    next();
  } catch (error) {
    console.log("JWT Verification Error:", error);
    return res.status(401).json({
      success: false,
      message: "Authentication failed",
    });
  }
};
export default isAuthenticated;
