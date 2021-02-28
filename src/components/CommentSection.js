import React, {useEffect} from 'react';


const CommentSection = ({comments}) =>
{
    useEffect(()=>{
        
    },[]);


    const commentList = comments;

    return(<div className="ui comments">
                <h3 className="ui dividing header">Comments</h3>
            
                {
                    commentList.map((item,i)=>{


                        let comment = item.snippet.topLevelComment.snippet;

                        return(
                            <div key={i} className="comment">
                                <a   href="/" className="avatar">
                                    <img alt="UserProfileImage" src={comment.authorProfileImageUrl}/>
                                </a>
                                <div className="content">
                                    <a  href="/" className="author">{comment.authorDisplayName}</a>
                                    <div className="metadata">
                                        <span className="date">{comment.publishedAt}</span>
                                    </div>
                                    <div className="text">
                                        {comment.textDisplay}
                                    </div>
                                    <div className="actions">
                                        <a href="/" className="reply">Reply</a>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
          
            
            </div>);


}


export default CommentSection;