import React from 'react'
import './RightBlock.css'


function RightBlock({post}) {
    return (
        <div>
            <section className='combinator-rightBlock'>
                <div className='topPart-rightBlock'>
                    <h3>BOARD PARAMETERS</h3>
                    <hr />
                    <div className='splitter-rightBlock'>
                        <div>
                            <p>Active Users:</p>
                            <p>Posts:</p>
                            <p>Total Threads</p>
                        </div>
                        <div>
                            <p>324 online</p>
                            <p>34</p>
                            <p>{post.length}</p>
                        </div>
                    </div>
                </div>

                {/* <div className='bottomPart-rightBlock'>
                    <h3>RECENT FILE UPLOADS</h3>
                    <hr />
                    <div>
                        <img src={rightBlockEx} alt="" />
                        <img src={rightBlockEx} alt="" />
                    </div>
                </div> */}
            </section>
        </div>
    )
}

export default RightBlock