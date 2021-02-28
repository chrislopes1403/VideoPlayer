import  {useEffect,useState} from 'react';
import youtube from './../apis/YouTube';

const useVideos=(defaultSearchTerm)=>{
    
    const [videos,setVideos]=useState([]);

    useEffect(()=>{
        Search(defaultSearchTerm);
    },[defaultSearchTerm]);


    const Search = async(term) =>
    {
      const response= await youtube.get('/search',{
            params:{
                q:term
            },
        });
        setVideos(response.data.items);

    };

    return[videos,Search];


};


export default useVideos;



