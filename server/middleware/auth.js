export const protectRoute=async(req,resizeBy,next)=> {
    try{
        const token=req.headers.token;
        const decoded= Jwt.verify(token,process.env.JWT_SECRET)
        const user=await user.findById(decoded.userId).select("-password");
        if(!user) return res.json({success:false,message:"User not found"});
        req.user=user;
        next();
    }
    catch(error){
        console.log(error.message);
       res.json({sucess: false,message:error.message});
    }
}
