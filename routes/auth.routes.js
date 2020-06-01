const express = require('express');
const router = express.Router();

const User = require('./../models/user');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');


// api/auth (уже есть) + /register
router.post(
    '/register',
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Min length 4 symbol').isLength({ min: 4 })
    ],
    async (req,res) => {
    try {

        console.log('Register ', req.body);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
                message: 'Некорректные данные при регистрации!'
            });
        }
        const { email, password } = req.body;
        const candidate = await User.findOne({email: email}); // проверяем если у нас уже такой емаил
        if (candidate) {
            return  res.status(400).json({message: 'Такой пользователь уже существует!'});
        };

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({email, password: hashedPassword})

        await user.save();
        res.status(201).json({message: 'Пользователь создан!'})

    } catch (e) {
        res.status(500).json({message: 'Введены некорректные данные. Проверте данные'})
    }
});



//api/auth (уже есть) + /login
router.post(
    '/login',
    [
        check('email',   'Incorrect email').isEmail(),
        check('password', 'Min length 4 symbol').exists()
    ],
    async (req,res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({
                    errors: errors.array(),
                    message: 'Ошибка регистраци'
                });
            };

            const { email, password } = req.body;
            const user = await User.findOne({email: email}); // сходили на бек за юзером

            if(!user) {
                return  res.status(400).json({message: 'Такого пользователя не существует'})
            }

            // password: введеный юзером при залогивании  // получиный с сервера
            const isMatch = await bcrypt.compare(password, user.password);

            if(!isMatch) {
                return  res.status(400).json({message: 'Введен неправильный пароль'})
            }

            // генерація JWT
            const token = jwt.sign(
                {userId: user.id},
                config.get('jwtSecret'),
                {expiresIn: '10h'}
                )

            res.json({ userId: user.id,  token: token }) // ответ удачно залогинились

        } catch (e) {
            res.status(500).json({message: 'Something wrong. Try again.'})
        }
});


module.exports = router;

