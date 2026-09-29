import { connectDB } from './config/db.js'
import e from "express";
import 'dotenv/config'
import forumRoutes from './routes/forum.route.js'
import replyRoutes from './routes/reply.route.js'
import cors from "cors";

const PORT = process.env.PORT || 3500

const app = e()

app.use(cors())

app.use(e.json())

app.use('/api/posts/', forumRoutes)
app.use('/api/replies/', replyRoutes)

app.listen(PORT, () => {
    connectDB()
    console.log(`server runs on http://localhost:${PORT}`)
})