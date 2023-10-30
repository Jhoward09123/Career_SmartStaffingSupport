import { defineStore } from "pinia";
import axios from "axios"


export const useGlobalStore = defineStore( () => {
    const state = ref([
        jobs = getJobs()
    ])
    async function  getToken() {
        await axios.get("/sanctum/csrf-cookie")
    }
    // const name = ref('Eduardo')
    // const doubleCount = computed(() => count.value * 2)
    async function getJobs() {
        await getToken()
        const res = await axios.get('api/jobs')
        state.value.jobs = res.data.data
    }
  
    return { getJobs, state }
  })