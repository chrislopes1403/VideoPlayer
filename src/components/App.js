
import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import CommentSection from './CommentSection';
import SideBar from './SideBar';

import useVideos  from './useVideos';
import useComments from './useComments';

const App =()=>{

    const [selectedVideo,setSelectedVideo]=useState(null);
    const [videos,Search]=useVideos('Web Developer');
    const [comments,getComments]=useComments('LTwFX-hitQo');
    const [visible,setVisible]=useState(false);
    const [likedVideos,setLikedVideos]=useState([]);
    const [historyVideos,setHistoryVideos]=useState([]);


    useEffect(()=>{
        setSelectedVideo(videos[0]);
    },[videos]);


    const onVideoSelect = (video) =>
    {
        setSelectedVideo(video);
        getComments(video.id.videoId);

        const found = historyVideos.find(videos=>videos.id.videoId === video.id.videoId);
        
        if(!found)
            setHistoryVideos([...historyVideos,video]);
    };


    const handleLikedVideo=(video)=>
    {
        const found = likedVideos.find(videos=>videos.id.videoId === video.id.videoId)
        
        if(!found)
            setLikedVideos([...likedVideos,video]);
    }

    return (
        <div>
            <div onClick={()=>setVisible(true)} className={`ui grey big launch right attached fixed button sticky ${visible ? 'transition hidden': ''}`} style={{top:'2.5em'}}>
                <i className="content icon"></i>
            </div>

            <div className="ui container">
                
                <div className="ui message">
                    <div className="header">
                        Welcome to VideoPlayer!
                    </div>
                    **THIS IS STRICTLY FOR DEMO PORTFOLIO PUEPOSES ONLY**
                </div>


                <SearchBar onFormSubmit={Search} handleVisible={()=>setVisible(!visible)}/>
                    
                <SideBar visible={visible} 
                        handleVisible={()=>setVisible(!visible)}
                        likedVideos={likedVideos}
                        historyVideos={historyVideos}
                />


                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video ={selectedVideo} handleLikedVideo={handleLikedVideo} likedVideos={likedVideos}/>
                            <CommentSection comments={comments}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={onVideoSelect} videos={videos}/>
                        </div>
                    </div>
                </div>

            </div>

        </div>);
};



// make a comment section




export default App;