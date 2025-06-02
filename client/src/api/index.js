import axios from 'axios';

// Utilise HTTP, pas HTTPS
const API = axios.create({ baseURL: 'https://social-media-appliacation-backend.vercel.app' });

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
