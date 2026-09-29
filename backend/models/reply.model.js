import mongoose from "mongoose";

const replySchema = new mongoose.Schema({
    postId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    subject:{
        type:String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    randomId:{
        type: Number,
        required: true
    }
})

const Reply = mongoose.model('Reply', replySchema)

export default Reply