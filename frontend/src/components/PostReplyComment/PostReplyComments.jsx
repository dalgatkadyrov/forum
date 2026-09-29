import React, { useEffect, useState } from 'react'
import './PostReplyComments.css'

function PostReplyComments({ postId, replies }) {

    const url = `http://localhost:3500/api/replies/${postId}`

    const getData = async () => {
        try {
            const response = await fetch(url)

            const results = await response.json()

            if (!response.ok) {
                throw new Error(`Get status: ${response.status}`)
            }

            setReplies(results)

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getData()
    }, [postId])
    console.log('POST ID FOR REPLIES:', postId)
    console.log('URL:', url)


    return (
        <div style={{ overflow: 'auto' }}>
            {replies.map((item) => (
                <section className='postBody-posts' key={item._id}>
                    <div className='postTopPart-posts'>
                        <div>
                            <h3>{item.subject}</h3>
                            <p className='postTopStatus-posts'>Anonymouse</p>
                            <p>{new Date(item.date).toLocaleString()}</p>
                            <p className='postTopPostNum-posts'>No. {item.randomId}</p>
                        </div>
                    </div>
                    <div className='postBottomPart-posts'>
                        <div className='postImgHolder-posts'>
                            {item.image && (
                                <img src={URL.createObjectURL(item.image)} alt="image" />
                            )}
                            {item.image && (
                                <div><p>{item.size}</p> <hr /> <p>{item.resolution}</p></div>
                            )}
                        </div>
                        <div className="postDescription-posts">
                            <p>{item.description}</p>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    )
}

export default PostReplyComments