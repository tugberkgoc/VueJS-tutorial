import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://vuejs-http-6944d.firebaseio.com'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance