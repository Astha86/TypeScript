// GET Requests
import axios from 'axios';

async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();

// POST Requests
interface Post {
  title: string;
  body: string;
  userId: number;
}

async function createPost(post: Post) {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
    console.log('Post created:', response.data);
  } catch (error) {
    console.error('Error creating post:', error);
  }
}

createPost({ title: 'My New Post', body: 'This is the content of the post.', userId: 1 });

// Handling Errors
async function fetchData2() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error message:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
}
fetchData2();

// Canceling Requests
const CancelToken = axios.CancelToken;
let cancel: any;

axios.get('https://jsonplaceholder.typicode.com/posts', {
  cancelToken: new CancelToken(function executor(c) {
    cancel = c;
  }),
}).catch((thrown) => {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled:', thrown.message);
  } else {
    console.error('Error fetching posts:', thrown);
  }
});

// Call cancel() to cancel the request
cancel('Request canceled by user.');

// Using Type Definitions with Axios
interface PostResponse {
  id: number;
  title: string;
  body: string;
  userId: number;
}

async function fetchPost(postId: number) {
  try {
    const response = await axios.get<PostResponse>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = response.data;
    console.log('Fetched Post:', post);
  } catch (error) {
    console.error('Error fetching post:', error);
  }
}

fetchPost(1);
// Using Generics for Strong Typing
async function fetchPosts(): Promise<PostResponse[]> {
  const response = await axios.get<PostResponse[]>('https://jsonplaceholder.typicode.com/posts');
  return response.data;
}


// Catching Errors with Axios
axios.get('https://api.example.com/invalid-endpoint')
  .then(response => {
    console.log('Data:', response.data);
  })
  .catch(error => {
    if (error.response) {
      // The server responded with a status outside the range of 2xx
      console.error('Error Status:', error.response.status);
      console.error('Error Data:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No Response Received:', error.request);
    } else {
      // Something went wrong in setting up the request
      console.error('Request Error:', error.message);
    }
  });