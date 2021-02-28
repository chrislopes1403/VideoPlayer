import axios from 'axios';
import KEYS from './../config/keys';

const KEY = KEYS.youtubeKEY;

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:
    {
        part: 'snippet',
        type: 'video',
        maxResults:30,
        key:KEY
    }
});


//be careful on how many request you make or youtube will block you! 