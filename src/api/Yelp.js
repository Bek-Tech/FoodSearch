import axios from 'axios';

export default axios.create ({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer i1_mHrNigHSvXJm2xAs8dK-bWomBKC5hLy2cPyYdIeCtfMZJHpEbmUE1D2AIXH1ds_HxHbBnTpdQwnc7EnDYnyuH2cBmpA0Mu0rKGLb1LPFZNGCCprZZKIOWrFnhXXYx ',
  },
});
