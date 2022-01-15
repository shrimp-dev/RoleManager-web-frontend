import axios from 'axios'


const api = axios.create({
    baseURL: 'https://api.drinkgame.shrimpdev.com',
   
  })
  
  export default api;
  