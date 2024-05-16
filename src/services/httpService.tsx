import axios from 'axios';

class HttpService {
    private endpoint : string;
    private api : any;

    constructor(endpoint : string) {
        this.endpoint = endpoint;
        this.api = axios.create({
            baseURL: '/',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Accept': 'application/json'
            }
        });
    }

    async get(id = '') {
        const endpoint = (id != '') ? `${this.endpoint}/${id}` : this.endpoint

        try {
            const response = await this.api.get(endpoint);
            return response.data;
        } catch (error : any) {
            if (!error.response)
                throw error

            const { data, status } = error.response
            throw { data, status }
        }
    }

    async post(data : any) {
        try {
            const response = await this.api.post(this.endpoint, data);
            return response.data;
        } catch (error : any) {
            if (!error.response)
                throw error

            const { data, status } = error.response
            throw { data, status }
        }
    }

    async put(id: string, data: any) {
        try {
            const response = await this.api.put(`${this.endpoint}/${id}`, data);
            return response.data;
        } catch (error : any) {
            if (!error.response)
                throw error

            const { data, status } = error.response
            throw { data, status }
        }
    }

    async delete(id : any) {
        try {
            await this.api.delete(`${this.endpoint}/${id}`);
        } catch (error : any) {
            if (!error.response)
                throw error

            const { data, status } = error.response
            throw { data, status }
        }
    }
}

export default HttpService;
