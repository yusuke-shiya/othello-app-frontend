import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL + '/api/v1/battle_rooms',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  create() {
    return apiClient.post('/')
  }
}
