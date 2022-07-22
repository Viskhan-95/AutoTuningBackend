const Review = require("../models/Review.model")

module.exports.reviewController = {
    postReview : async (req, res) => {
        try {
            const data = await Review.create({
                user: req.user.id,
                text: req.body.text,
                rating: req.body.rating
            })
            res.json(data)
        } catch (error) {
            return res.status(401).json(`Ошибка: ${err.message}`);
        }
    },
    patchReview: async (req, res) =>{
        try {
            const data = await Review.findByIdAndUpdate(req.params.id, {
                reting: req.body.rating
            }, {new: true})
            res.json({user, rating: rating})
        } catch (error) {
            res.json(error)
        }
    },
    delReview: async (req, res) =>{
        try {
            const reveiw = await Review.findById(req.params.id)
            if (review.user.toString() === req.user.id || req.user.role === 'admin') {
                await reveiw.remove()
                return res.json(review)
            }
            return res.status(401).json({ error: "У вас нет доступа" })
        } catch (error) {
            return res.status(401).json(`Ошибка: ${err.message}`);
        }
    },
    getReview: async (req, res) =>{
        try {
            const data = await Review.find()
            return res.json(data)
        } catch (error) {
            res.json({ error: err.message });
        }
    }
}