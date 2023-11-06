import { defineStore } from "pinia";
import axios from "axios"
import {ref} from 'vue'


export const useGlobalStore = defineStore('global', () => {
    const state = ref({
        jobs: null
    })

    const jobs = ref([])
    const users = ref([])
    const companies = ref([])
    const states = ref([])
    const countries = ref([])
    const job_categories = ref([])
    const contract_types = ref([])
    // const companies = ref([])

    async function  getToken() {
        await axios.get("/sanctum/csrf-cookie")
    }
    async function getJobs() {
        await getToken()
        const res = await axios.get('api/jobs').then((res) => {
            jobs.value = res.data.data
        })
        
    }

    async function getJob(id) {
        await getToken()
        const res = await axios.get('api/jobs/'+id).then((res) => {
            return res.data.data
        })  
    }
    async function fetchCompanies(){
        await getToken()
        await axios.get('/api/companies').then((res) => {
            console.log(res.data.data)
            companies.value = res.data.data
        }).catch((error) => {
            console.log(error)
        })
    }
    async function fetchCountries(){
        await getToken()
        await axios.get('/api/countries').then((res) => {
            console.log(res.data.data)
            countries.value = res.data.data
        }).catch((error) => {
            console.log(error)
        })
    }
    async function fetchStates(){
        await getToken()
        await axios.get('/api/states').then((res) => {
            console.log(res.data.data)
            states.value = res.data.data
        }).catch((error) => {
            console.log(error)
        })
    }
    async function fetchJobCategories(){
        await getToken()
        await axios.get('/api/job-categories').then((res) => {
            console.log(res.data.data)
            job_categories.value = res.data.data
        }).catch((error) => {
            console.log(error)
        })
    }
    async function fetchContractTypes(){
        await getToken()
        await axios.get('/api/contract-types').then((res) => {
            console.log(res.data.data)
            contract_types.value = res.data.data
        }).catch((error) => {
            console.log(error)
        })
    }

    async function getJobCategory(id) {
        await getToken()
        const res = await axios.get('api/job-categories/'+id).then((res) => {
            return res.data.data
        })
    }

    async function getCountry(id) {
        await getToken()
        const res = await axios.get('api/countries/'+id)
        jobs.value = res.data.data
        
    }
    async function createJob(form_data) {
        await getToken()
        // console.log(form_data)
        await axios.post('/api/jobs',form_data).then((res) => {
            console.log(res.data)
            getJobs()
            // this.router.push({name: ''})
        }).catch((error) => {
            console.log(error.response.data)
        })

        
    }
  
    return { 
        state,
        jobs,
        companies,
        users,
        states,
        countries,
        job_categories,
        contract_types,
        getJobs, 
        getJobCategory, 
        getJob, 
        getCountry, 
        createJob,
    
        fetchCompanies,
        fetchStates,
        fetchContractTypes,
        fetchCountries,
        fetchJobCategories
    }
})