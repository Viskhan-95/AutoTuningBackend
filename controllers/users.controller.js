const User = require('../models/User.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mailer = require('../mailer');
require('dotenv').config();

module.exports.userController = {
    postUser: async (req, res) => {
        try {
            const { email, login, password, role } = req.body
            const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS))
            const user = await User.create({ email, login, password: hash, role })
            res.json({ user, role })
        } catch (error) {
            return res.status(401).json({ error: 'Такой пользователь уже существует' })
        }
    },

    login: async (req, res) => {
        const { login, password } = req.body;

        const candidate = await User.findOne({ login })

        if (!candidate) {
            return res.status(401).json({ error: 'Неверный логин' })
        }

        const valid = await bcrypt.compare(password, candidate.password)

        if (!valid) {

            return res.status(401).json({ error: 'Неверный пароль' })
        }
        const payload = {
            id: candidate._id,
            login: candidate.login,
            role: candidate.role
        }

        const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
            expiresIn: '24h'
        })

        res.json({ token, role: payload.role, user: payload.login, userId: candidate._id })
    },

    getKey: async (req, res) => {
        const keyRegistration = 100000 + Math.floor(Math.random() * 900000);

        try {
            const { email } = req.body;

            const message = {
                from: process.env.EMAIL,
                to: email,
                subject: "Подтверждение почты",
                text: `Ваш код для подтверждения: ${keyRegistration}`
            }

            mailer(message);

            res.json(keyRegistration);

        } catch (err) {
            res.json("Ошибка подтверждения " + err.toString());
        }
    },

    getUser: async (req, res) => {
        try {
            const users = await User.find()
            res.json(users)
        } catch (error) {
            res.json(error)
        }
    },

    deleteUser: async (req, res) => {
        const { id } = req.params
        try {
            const user = await User.findById(id)
            await user.json('Удалено')
        } catch (error) {
            return res.status(401).json(error.toString())
        }
    },

    patchUser: async (req, res) => {
        const { role } = req.body
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                role
            }, { new: true })
            res.json({ user, role: role })
        } catch (error) {
            res.json(error)
        }
    }
}