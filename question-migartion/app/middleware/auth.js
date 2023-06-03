const jwt = require('jsonwebtoken');

exports.authFun = (req, res, next) => {
    try{
        //console.log(res);
        const token= req.headers.token;
        var decode= jwt.verify(token,'AMIT@2021');
       // console.log(decode);
        req.userData=decode;
        next();
    }catch(err){
        res.status(400).send({
            message : "Failed"
        })

    }
}
