import React from "react";

const FeedCard = ({Caption, image_url, Username, TweetId}) => {
    return(
        <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <div className="tc">
                <a href={`https://twitter.com/${Username}`} target="_blank" rel="noopener noreferrer"><img src ={`${image_url}`} className="br-100 h3 w3 dib" alt="Profile"/></a>
                <a className="no-underline " href={`https://twitter.com/${Username}`} target="_blank" rel="noopener noreferrer"><h1 className="f4 black">{Username}</h1></a>
                <hr className="mw3 bb bw1 b--black-10"/>
            </div>
            <a className="lh-copy measure center f6 black-70 no-underline" href={`https://twitter.com/${Username}/status/${TweetId}`} target="_blank" rel="noopener noreferrer">
            <p>
                {Caption}
            </p>
            </a>
        </article>
    )
}





export default FeedCard;