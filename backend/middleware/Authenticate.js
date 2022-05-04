const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
const Worker=require("../model/workerSchema")

const Authenticate = async (req, res, next) => {
  try {
    //console.log(req.cookies);
    const token = req.cookies.jwtoken;
    //console.log(token);
    const verifyToken = jwt.verify(
      token,
      process.env.SECRET_KEY
    );
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      const rootWorker = await Worker.findOne({
        _id: verifyToken._id,
        "tokens.token": token,
      });
      if(!rootWorker)
      throw new Error("user not found");
      req.token = token;
    req.rootUser = rootWorker;
    req.userID = rootWorker._id;
    next();
    }
    else{
      req.token = token;
      req.rootUser = rootUser;
      req.userID = rootUser._id;
      next();
    }
    
  } catch (err) {
    res.status(401).send("no token authorized");
    console.log(err);
  }
};

module.exports = Authenticate;
