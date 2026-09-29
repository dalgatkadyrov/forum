import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'
import './RepliesPage.css'
import PostReply from '../../components/PostReply/PostReply'
import BoardParameters from '../../components/BoardParameters/BoardParameters'
import ReplyToPost from '../../components/ReplySearchBar/ReplyToPost'
import PostReplyComments from '../../components/PostReplyComment/PostReplyComments'

function RepliesPage(props) {


  const location = useLocation()
  const post = location.state.item

  const [replies, setReplies] = useState([])

  useEffect(() => {
    props.setRepliesLength(replies.length)
  }, [replies])


  console.log('current post:', post)
  console.log('current post id', post._id)

  return (
    <div>
      <header className='header-replies'>
        <Nav />
      </header>
      <main className='main-replies'>
        <section className='postCombinator-replies'>
          <PostReply post={post} replies={replies} />
          <ReplyToPost post={post} setReplies={setReplies} replies={replies} />
          <PostReplyComments postId={post._id} replies={replies} />
        </section>
        <section className='rightBlock-replies'>
          <BoardParameters />
        </section>
      </main>
    </div>
  )
}

export default RepliesPage