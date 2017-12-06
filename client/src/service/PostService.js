import axios from 'axios'

class PostService {
  sendData(data) {
    axios.post('/posts/add/post', {
      title: data.title,
      text: data.text
    })
    .then(res => console.log('send data =>', res))
    .catch(err => console.log(err))
  }
}

export default PostService
