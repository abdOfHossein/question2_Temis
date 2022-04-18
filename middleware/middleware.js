const general = {};
general.addNewParam = (req, res, next) => {

    if (req.method == "GET" || req.method=="DELETE") {
        req.query.isLogin = false;
    }
    else {
        req.body.isLogin = true;
    }

    next();
}




module.exports = general;