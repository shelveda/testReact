import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID d3122693c0bf45893aaa6a06d9fd6cf999080ec494ca4020cfed58cd23c18959'
  }
});
