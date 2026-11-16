import express from "express";

const userRouter=express.Router();
userRouter.post("/signup",signup);
userRouter.post("/login",login);
userRouter.post("/update-profile",protectedRoute,updateProfile);
userRouter.post("/check",protectedRoute,checkAuth);
  export default userRouter