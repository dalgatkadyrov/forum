import React, { useEffect, useState } from 'react'
import './NewThread.css'
import API_URL from '../../api'


function NewThread(props) {

    const url = `${API_URL}/api/posts`

    const getData = async () => {

        try {
            const response = await fetch(url)

            if (!response.ok) { throw new Error('GET status', response.status) }

            const results = await response.json()

            props.setPost(results)


        } catch (error) {
            console.error(error.message)
        }
    }

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

        const addPost = async (resolution = null) => {

            const newPost = {
                subject: e.target.subject.value,
                description: e.target.description.value,
                // image: file || null,
                // size: file ? (file.size / 1024).toFixed(0) + 'KB' : 0,
                // resolution,
                date: new Date().toISOString(),
                randomId: genId(props.post),


            }

            //submit the new post
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newPost)
                })

                if (!response.ok) {
                    throw new Error(`Post failed: ${response.status}`)
                }

                const result = await response.json()

                // Use the saved document so the thread has its MongoDB _id.
                props.setPost(prev => [...prev, result])
                
            } catch (error) {
                console.error(error.message)
            }
        }

        if (!file) {
            addPost()
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


    useEffect(()=>{
        getData()
    },[])


    return (
        <div>
            <form onSubmit={handleSubmit} className='postNew-newThread'>
                <div className='topPartCombiner-newThread'>
                    <div className='addButtonHolder-newThread'>
                        <button>+</button>
                        <h3>POST NEW THREAD</h3>
                    </div>
                    <div className='anonymouseHolder-newThread'>
                        <p>Anonymouse posting enabled. Keep it civil.</p>
                    </div>
                </div>


                <div className='middlePartCombiner-newThread'>
                    <div>
                        <label htmlFor="middleInput">Subject:</label><input name='subject' type="text" id='middleInput' required />
                    </div>
                    <div><input name='image' type="file" accept='image/*' onChange={fileSize} /><p className='size-threads'></p></div>
                    <div><textarea placeholder='Desc.' name="description" id=""></textarea></div>
                </div>

                <div className='bottomPartCombiner-newThread'>
                    <a href="">View posting rules</a>
                    <button type='submit'>SUBMIT THREAD</button>
                </div>
            </form>
        </div>
    )
}

export default NewThread
