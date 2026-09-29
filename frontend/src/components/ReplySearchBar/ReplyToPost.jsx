import React from 'react'
import './ReplyToPost.css'

function ReplyToPost(props) {
    const url = 'http://localhost:3500/api/replies/'

    function genId(posts) {
        let id

        do {
            id = Math.floor(100_000_000 + Math.random() * 900_000_000)
        } while (posts.some(post => post.randomId === id))

        return id
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const file = e.target.image.files[0]

        if (!props.post?._id) {
            console.error('Cannot submit reply: thread has no saved post ID.')
            return
        }

        const addPost = async (resolution = null) => {

            const newReply = {
                postId: props.post._id,
                subject: e.target.subject.value,
                description: e.target.description.value,
                // image: file || null,
                // size: file ? (file.size / 1024).toFixed(0) + 'KB' : 0,
                // resolution,
                date: new Date().toISOString(),
                randomId: genId(props.replies),

            }

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newReply)
                })
                if (!response.ok) {
                    const error = await response.json()
                    throw new Error(error.message || `Reply failed: ${response.status}`)
                }
                const result = await response.json()
                props.setReplies(prev => [...prev, result])

            } catch (error) {
                console.error(error)
            }
        }



        if (!file) {
            await addPost()
            return
        }

        const img = new Image()

        img.onload = () => {
            addPost(`${img.width}x${img.height}`)
            URL.revokeObjectURL(img.src)
        }

        img.src = URL.createObjectURL(file)
    }


    const fileSize = (e) => {
        const size = e.target.files[0] ? (e.target.files[0].size / 1024).toFixed(0) + 'KB' : 0

        document.querySelector('.size-threads').innerHTML = size



    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='postNew-newThread'>
                <div className='topPartCombiner-newThread'>
                    <div className='addButtonHolder-newThread'>
                        <button>+</button>
                        <h3>POST REPLY TO THREAD No. {props.post.randomId}</h3>
                    </div>
                    <div className='anonymouseHolder-newThread'>
                        <p>Anonymouse posting enabled. Keep it civil.</p>
                    </div>
                </div>


                <div className='middlePartCombiner-newThread'>
                    <div>
                        <label htmlFor="middleInput">Name:</label><input name='subject' defaultValue={'Anonymous'} type="text" id='middleInput' required />
                    </div>
                    <div><input name='image' type="file" accept='image/*' onChange={fileSize} /><p className='size-threads'></p></div>
                    <div><textarea required placeholder='Reply' name="description" id=""></textarea></div>
                </div>

                <div className='bottomPartCombiner-newThread'>
                    <button type='submit'>SUBMIT REPLY</button>
                </div>
            </form>
        </div>
    )
}

export default ReplyToPost
