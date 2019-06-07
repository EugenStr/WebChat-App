import axios from 'axios';

axios.defaults.withCredentials = true;

export default class ChatService {
  async homeRedirect() {
    const res = await axios.get('/login/homeRedirect')
    return res.status
  }

  async loginPost(data) {
    const res = await axios.post('/login', data)

    return res
  }
}
