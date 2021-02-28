import  {useEffect,useState} from 'react';
import comment from '../apis/Comments';

const useComments=(defaultComments)=>{

    const [comments,setComments]=useState([]);

    useEffect(()=>{
       getComments(defaultComments);
    },[defaultComments]);


    const getComments = async(videoId) =>
    {
      const response= await comment.get('/commentThreads',{
            params:{
                videoId:videoId
            },
        });
        setComments(response.data.items);

    };

    return[comments,getComments];


};


export default useComments;
