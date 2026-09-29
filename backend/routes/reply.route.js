import e from "express";
import Reply from "../models/reply.model.js";

const router = e.Router()

router.get('/:postId', async (req, res) => {
    try {
        const replies = await Reply.find({
            postId: req.params.postId
        })

        res.json(replies)
    } catch (error) {

        console.error('get replies err', error)

        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const reply = await Reply.create(req.body)

        res.status(201).json(reply)
    } catch (err) {

        console.error('post reply error', err)

        res.status(500).json({ message: err.message })
    }
})

export default router