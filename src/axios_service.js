import axios from "axios"

axios.defaults.withCredentials=true
// axios.defaults.baseURL = import.meta.env.VUE_APP_BASE_API_URL
// axios.defaults.baseURL = "https://careees-api.smartstaffingsupport.com"
axios.defaults.baseURL = "http://localhost:8000"
// axios.defaults.headers.common['ACCEPT'] = 'application/json';