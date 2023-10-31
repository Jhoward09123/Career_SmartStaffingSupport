import { defineStore } from "pinia";
import axios from "axios"
import {ref} from 'vue'


export const useGlobalStore = defineStore('global', () => {
    const state = ref({
        jobs: null
    })
    const jobs = ref([])
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
  
    return { getJobs, state,jobs,getJobCategory, getJob, getCountry }
})