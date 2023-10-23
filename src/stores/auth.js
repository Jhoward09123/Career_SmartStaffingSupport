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
        },
        async handleLogin(form) {
            await this.getToken()
            await axios.post('/login',{
                email: form.email,
                password: form.password
            })
            this.router.push("/")
        },
        async handleSignup(form_data) {
            await this.getToken()
            await axios.post('/register',{
                first_name: form_data.first_name,
                fname: form_data.fname,
                mname: form_data.mname,
                lname: form_data.lname,
                phone: form_data.phone,
                alt_phone: form_data.alt_phone,
                email: form_data.email,
                alt_email: form_data.alt_email,
                address: form_data.address,
                city: form_data.city,
                state_id: form_data.state_id,
                zip_code: form_data.zip_code,
                country_id: form_data.country_id,
                // photo_url: form_data.photo_url,
                photo_url: "https://photo.com",
                job_category_id: form_data.job_category_id,
                profession_id: form_data.profession_id,
                contract_type_id: form_data.contract_type_id,
                dob: form_data.dob,
                password: form_data.password,
                password_confirmation: form_data.password_confirmation
            })
            this.router.push({name: 'home'})
        },

        
    }
    
    
})