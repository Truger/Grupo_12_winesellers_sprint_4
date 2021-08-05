const {User} = require('../database/models')

async function userLoggertMiddleware(req, res, next){
    res.locals.isLogged = false;

        let emailInCookie = req.cookies.userEmail;
      
    if(emailInCookie){
        console.log('el email del user es : '+emailInCookie)
        userFromCookie =await User.findOne({where:{email:emailInCookie}});

        if(userFromCookie){
          delete userFromCookie.password;
          req.session.userLogueado = userFromCookie;
         }
    }

    if(req.session && req.session.userLogueado){
        res.locals.isLogged = true;
        res.locals.userLogueado = req.session.userLogueado
    }   

    next();
}
module.exports = userLoggertMiddleware;