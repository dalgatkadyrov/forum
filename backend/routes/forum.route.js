import e from "express";
import Forum from '../models/forum.model.js';

const router = e.Router()

router.get('/', async (req, res) => {
    try {
        const posts = await Forum.find()
        res.json(posts)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.post('/', async (req, res) => {
    const tasks = new Forum({
        subject: req.body.subject,
        description: req.body.description
    })

    try {
        const newTask = await tasks.save()
        res.status(201).json(newTask)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.patch('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const post = await Forum.findByIdAndUpdate(id,
            {
                subject: req.body.name,
                description: req.body.description
            }
        )

        if (!post) return res.status(404).json({ error: 'No post found' })

        res.status(200).json(post)
    } catch (err) {
        res.status(300).json({ error: err.post })
    }
})

export default router