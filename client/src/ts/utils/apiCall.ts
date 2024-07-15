import axios from "axios";

const baseUrl = 'http://localhost:3000/api';

const apiCall = async (endpoint: string, method: string, body?: object) => {
    try {
        const response = await axios(`${baseUrl}${endpoint}`, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            data: body
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export default apiCall;