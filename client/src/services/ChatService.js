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

  async register(data) {
    const res = await axios.post('/register', data)

    return res
  }

  async getCurrentUser() {
    const res = await axios.get('/login')

    return res
  }

  async logout() {
    const res = await axios.post('/login/logout')

    return res
  }

  async patchUserData(newData, currentData) {

    let data = {
        name: newData.name,
        surname: newData.surname,
        avatar: newData.avatar,
        id: currentData._id
      }

    if (newData.name.length === 0) {
        data.name = currentData.name
    }

    if (newData.surname.length === 0) {
        data.surname = currentData.surname
    }

    const res = await axios.patch('/home/profile', data)

    return res
  }

  async getAllUsers() {
    const res = await axios.get('/home/aside');
    
    return res
  }
}
