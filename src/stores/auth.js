import { defineStore } from "pinia";
import axios from "axios"


export const useAuthStore = defineStore ("auth", {
    state: () => ({
        authUser: null
    }),
    getters: {
        user: (state) => state.authUser,
    },
    actions: {
        async getToken() {
            await axios.get("/sanctum/csrf-cookie")
        },
        async getUser() {
            await this.getToken()
            const res = await axios.get('api/user')
            this.authUser = res.data
            console.log('ttttt') 
            console.log(this.authUser.value)
        },
        async handleLogin(form) {
            await this.getToken()
            await axios.post('/login',{
                email: form.email,
                password: form.password
            })
            // this.authUser = await axios.get('api/user').data
            this.router.push("/")
        },

        
    }
    
    
})