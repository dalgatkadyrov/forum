import React from 'react'
import { Link } from 'react-router-dom'
import './PostReply.css'

function PostReply({ post, replies }) {



    function getTimeAgo(date) {
        const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000)
        const minutes = Math.floor(seconds / 60)
        const hours = Math.floor(minutes / 60)
        const days = Math.floor(hours / 24)

        if (seconds < 60) {
            return '<1min ago'

        }

        if (minutes < 60) {
            return `${minutes} mins ago`

        }

        if (hours < 24) {
            return `${hours} hours ago`

        }

        return `${days} days ago`

    }

    return (
        <div>
            <div className='back-replies'><Link to='/' >[Return to Board]</Link>/<p>{'Thread #' + post.randomId}</p></div>
            <div className='post-replies'>
                <section className='postBody-replies'>
                    <div className='postTopPart-replies'>
                        <div>
                            <h3>{post.subject}</h3>
                            <p className='postTopStatus-replies'>Anonymouse</p>
                            <p>{new Date(post.date).toLocaleString()}</p>
                            <p className='postTopPostNum-replies'>No. {post.randomId}</p>
                        </div>
                        <div>
                            <p className='postTopReplies-replies'>{`Replies ${replies.length}`}</p>
                            <p className='postTopFiles-replies'>2 files</p>
                        </div>
                    </div>
                    <div className='postBottomPart-replies'>
                        <div className='postImgHolder-replies'>
                            {post.image && (
                                <img src={URL.createObjectURL(post.image)} alt="image" />
                            )}
                            {post.image && (
                                <div><p>{post.size}</p> <hr /> <p>{post.resolution}</p></div>
                            )}
                        </div>
                        <div className="postDescription-replies">
                            <p>{post.description}</p>
                            <p>Last active: {getTimeAgo(post.date)} </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default PostReply