import React, { useState, useEffect } from 'react'
import './Posts.css'
import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLocalStorage } from '@uidotdev/usehooks'




function Posts({ post, setPost, sort, filtedItems, search, setDate, repliesLength }) {

    
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

    const sortedPosts = [...post].sort((a, b) => {
        if (sort === 'newest') {
            return new Date(b.date) - new Date(a.date)
        }

        if (sort === 'oldest') {
            return new Date(a.date) - new Date(b.date)
        }

        return 0
    })

    const postToDisplay = search ? filtedItems : sortedPosts


    return (
        <div className='combinator-post'>
            {postToDisplay.map((item, index) => (
                <section className='postBody-posts' key={index}>
                    <div className='postTopPart-posts'>
                        <div>
                            <h3>{item.subject}</h3>
                            <p className='postTopStatus-posts'>Anonymouse</p>
                            <p>{new Date(item.date).toLocaleString()}</p>
                            <p className='postTopPostNum-posts'>No. {item.randomId}</p>
                        </div>
                        <div>
                            <p className='postTopReplies-posts'>{repliesLength} replies</p>
                            <p className='postTopFiles-posts'>2 files</p>
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
                            <Link to={'/replies'} state={{ item }}>[Open Thread]</Link>
                            <p>Last active: {getTimeAgo(item.date)} </p>
                        </div>
                    </div>
                </section>



            ))}
        </div>
    )
}

export default Posts;
