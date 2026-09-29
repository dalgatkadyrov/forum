import React, { useState } from 'react'
import './SearchBar.css'
import magnifire from '../../assets/icons/magnifire.png'

function SearchBar(props) {



    const itemsFilt = (e) => {
        props.setSearch(e.target.value)
        
        props.setFiltedItems(props.post.filter((item) =>
            item.subject.toLowerCase().includes(e.target.value.toLowerCase())
        ))

    }


    return (
        <div className='combinator-search'>
            <div>
                <img src={magnifire} alt="" />
                <input type="text" placeholder='Search' onChange={itemsFilt} />
            </div>
            <div className='navigation-search'>
                <label htmlFor="sort">Sort:</label>
                <select name="sort" id="searchBar-sort" value={props.sort} onChange={(e) => props.setSort(e.target.value)}>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="popular">Popular</option>
                </select>
                <hr />
                <div>
                    <h4>List View</h4>
                    <p>Grid Gallery</p>
                </div>
            </div>
        </div>
    )
}

export default SearchBar