import axios from 'axios';

import KEYS from './../config/keys';

const KEY = KEYS.youtubeKEY;

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:
    {
        textFormat: 'plainText',
        maxResults:100,
        key:KEY,
        part: 'snippet'
       // pageToken:'nextPageToken'
    }
});
