import axios, { AxiosResponse } from 'axios';

const API_URL = 'http://localhost:8000/api'; // Adjust the URL as necessary

const authService = {
  async register(userData: { email: string; password: string; username: string }) {
    const response: AxiosResponse = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data.user;
  },

  async login(userData: { email: string; password: string }) {
    try {
      const res: AxiosResponse = await axios.post(`${API_URL}/auth/login`, {
        email: userData.email,
        password: userData.password,
      });

      if (res.status !== 200) {
        console.error(res.statusText);
        return Promise.reject(new Error(res.statusText));
      }

      this.saveToken(res.data.token);
      return res.data;
    } catch (err) {
      console.error(err);
      return Promise.reject(err);
    }
  },

  saveToken(token: string) {
    localStorage.setItem('token', token);
  },

  checkToken() {
    return localStorage.getItem('token');
  },

  logout() {
    localStorage.removeItem('token');
  }
};

export default authService;
