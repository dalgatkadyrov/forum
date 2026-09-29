import React, { useState } from 'react'
import Nav from '../../components/Nav/Nav'
import './MainPage.css'
import NewThread from '../../components/NewThread/NewThread'
import RightBlock from '../../components/RighBlock/RightBlock'
import SearchBar from '../../components/SearchBar/SearchBar'
import Posts from '../../components/Posts/Posts'
import { useLocation } from 'react-router-dom'


function MainPage(props) {

    const [post, setPost] = useState([])
    const [sort, setSort] = useState('newest')
    const [filtedItems, setFiltedItems] = useState([])
    const [search, setSearch] = useState()



    return (
        <div>
            <header className='header-mainPage'>
                <Nav />
            </header>
            <main className='main-mainPage'>
                <section className='postCombinator-mainPage'>
                    <NewThread setPost={setPost} post={post} />
                    <SearchBar sort={sort} setSort={setSort} setPost={setPost} post={post} setSearch={setSearch} search={search} setFiltedItems={setFiltedItems} />
                    <div className="scrolable-mainPage">
                        <Posts post={post} setPost={setPost} sort={sort} filtedItems={filtedItems} search={search} setDate={props.setDate} repliesLength={props.repliesLength} />
                    </div>
                </section>
                <section className='rightBlock-mainPage'>
                    <RightBlock post={post} />
                </section>
            </main>
        </div>
    )
}

export default MainPage