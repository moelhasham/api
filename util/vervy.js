const jwt = require("jsonwebtoken")


function ver(req,res,next){
    const token = req.headers.authorization;

    if(token){
        const authtoken = token.split(" ")[1]
        try {

            const de = jwt.verify(authtoken, "Hammady@24112000")
            req.user = de
            next()
            
        } catch (error) {
            res.json("invalid")
            console.log(error)
        }
    }else{
      return  res.json("no token")
    }
}

module.exports = {
    ver
}