import axios from 'axios'

export default axios.create({
    baseURL: 'https://mashape-community-urban-dictionary.p.rapidapi.com/',
    headers: {
        "x-rapidapi-key":"69b89c19bemsh963a9694d22691ap15055djsn35ea0e4ba774",
        "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com"
    }
})