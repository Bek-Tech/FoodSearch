// first  install  axios   with terminal  " npm install axios"

import axios from 'axios';

export default axios.create ({
  //   do not put ( / ) end of  the   url
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    // important  !!!!  Authorization    must be   with    capital A
    // Authorization:  "Bearer  API key"
    Authorization: 'Bearer i1_mHrNigHSvXJm2xAs8dK-bWomBKC5hLy2cPyYdIeCtfMZJHpEbmUE1D2AIXH1ds_HxHbBnTpdQwnc7EnDYnyuH2cBmpA0Mu0rKGLb1LPFZNGCCprZZKIOWrFnhXXYx ',
  },
});

//    write this function  on  parent screen
// const searchApi = async () => {
//     const response = await yelp.get('/search', {
//         params: {
//             limit: 50,   //  limit of results
//             term: State ,     //   value of search input  , in my case State
//             location: '',    //   name of  city
//         },
//     });

//     setResult(response.data.businesses);
// };
