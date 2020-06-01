const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
    if(req.method === 'OPTIONS') { return next()}
    console.log('middleware' , req.headers)
    try {
        const token = req.headers.authorization.split(' ')[1];
        if(!token) {
            return  res.status(401).json({message: 'Нет авторизации'})
        }
        let decoded = jwt.verify(token, config.get('jwtSecret'));

        req.user  = decoded;

        next();

    } catch (e) {
        res.status(401).json({message: 'Нет авторизации'})
    }
}
