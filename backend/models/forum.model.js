import mongoose from "mongoose";

const forumSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },

}, { timestamps: true })

const Forum = mongoose.model('Post', forumSchema)

export default Forum