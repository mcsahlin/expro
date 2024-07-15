import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Adjust the URL as necessary

const authService = {
  async register(userData: { email: string; password: string; username: string }) {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data.user;
  },

  async login(email: string, password: string) {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    return response.data;
  },

  saveToken(token: string) {
    localStorage.setItem('token', token);
  },

  getToken() {
    return localStorage.getItem('token');
  },

  logout() {
    localStorage.removeItem('token');
  }
};

export default authService;
