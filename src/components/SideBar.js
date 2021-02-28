import React,{useState,useEffect} from 'react';
import {
  Menu,
  Sidebar
} from 'semantic-ui-react';

const SideBar = ({visible,handleVisible,likedVideos,historyVideos}) => {
  
  
    const [showModal, setShowModal] = useState(false);
    const [showLikes, setShowLikes] = useState(false);


  

    useEffect(()=>{

    },[likedVideos,historyVideos]);



  const renderLikes=likedVideos.reverse().map((video)=>{

        return (
            <div className="card" key={video.id.videoId}>
                <div className="content">
                    <div className="header" style={{size:'5px'}}>{video.snippet.title}</div>
                    <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url}/>   
                </div>
            </div>
            );
    });


    const renderHistory=historyVideos.reverse().map((video)=>{

        return (
            <div className="card" key={video.id.videoId}>
                <div className="content">
                    <div className="header" style={{size:'5px'}}>{video.snippet.title}</div>
                    <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url}/>   
                </div>
            </div>
            );
    });



  return (
    
        <div>
          <Sidebar
            as={Menu}
            animation='overlay'
            direction='left'
            icon='labeled'
            
            onHide={()=>{handleVisible(); setShowModal(false)}}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a' onClick={() => {setShowModal(true);setShowLikes(true)}}  ><i className="thumbs up icon"></i>Liked Videos</Menu.Item>
            <Menu.Item as='a' onClick={() => {setShowModal(true);setShowLikes(false)}} ><i className="clock icon"></i>History</Menu.Item>
          </Sidebar>

          <div className={`ui large modal ${showModal ? 'active': null}`} style={{top:'0px',left:'151px',maxHeight:'200px',maxWidth:'300px'}}>
            
            <div className="header">{showLikes ? 'Liked Videos':'History'}</div>
                
                <div className="scrolling content">

                    <div className="ui cards">
                        {showLikes ? renderLikes : renderHistory}
                    </div>

                </div>
            
            </div>

          </div>
        );
}


export default SideBar;