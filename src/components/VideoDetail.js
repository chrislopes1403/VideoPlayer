import React,{useState,useEffect} from "react";

const VideoDetail = ({video,handleLikedVideo,likedVideos}) =>
{

    const [liked,setLiked]=useState(false);
    const [selectedLike,setSelectedLike]=useState(false);

    useEffect(()=>{

        const found = likedVideos.find(videos=>videos.id.videoId === video.id.videoId)
        
        if(found !==undefined)
            setSelectedLike(true);
        else
            setSelectedLike(false);


    },[likedVideos,video]);



    if(!video)
    {
        return(<div>Loading...</div>);

    }

    const videoSrc= `https://www.youtube.com/embed/${video.id.videoId}`;

    return(
        <div>
            <div className="ui embed">
                <iframe title="video player" src={videoSrc}/>
            </div>
            <div className="ui segment">
                
                <div className="ui grid">
                    
                    <h4 className="ui header  eight wide column">{video.snippet.title}</h4>

                    <div className="custom-likes right floated two wide column">
                            <i className={`thumbs up large icon ${liked || selectedLike ? 'blue' : 'grey'}`}
                            onMouseEnter={()=>setLiked(true)}
                            onMouseLeave={()=>setLiked(false)}
                            onClick={()=>{handleLikedVideo(video);setLiked(true); }}
                            ></i>
                    </div>

                </div>

                <p>{video.snippet.description}</p>
            </div>    
        </div>);

}


export default VideoDetail;