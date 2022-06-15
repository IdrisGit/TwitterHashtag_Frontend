import React from "react";
import FeedCard from "./FeedCard";

const getPureText = (text) => {
    var Caption = text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
    return Caption;
}

const FeedCardList = ({tweets}) => {
    return(
        <div className="flex flex-wrap">
            {
                tweets.map((tweet, i) =>{
                    return(
                        <FeedCard
                        key = {i}
                        TweetId = {tweets[i].id_str}
                        Caption = {getPureText(tweets[i].text)}
                        Username = {tweets[i].user.screen_name}
                        image_url = {tweets[i].user.profile_image_url_https}
                        />
                    )
                })
            }
        </div>
    )
};

export default FeedCardList;