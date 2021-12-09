<template>

    <div>
        <h1>User Registration</h1>
        <p class="prompt">Please Enter Your User Name and Password</p>
         <InputFields />
        <UserRegistrationButton @click="postUser" />
        <modal class="popup" id="pop_not_registered" v-show="this.isVisible1">
            <p>User {{this.responseName}} has been registered successfully!</p>
        </modal>
        <modal class="popup" id="pop_registered" v-show="this.isVisible2">
            <p>User {{this.responseName}} is already registered!</p>
        </modal>

    </div>
    
</template>


<script>
import InputFields from "../components/userInputFields.vue"
import UserRegistrationButton from "../components/RegisterUserButton.vue"
import axios from 'axios';

export default {
    name: "User Registration",
    components: {
        InputFields,
        UserRegistrationButton,
    },

    data (){
        return {
            userName: String,
            password: String,
            responseName: String,
            isVisible1: false,
            isVisible2: false,
        }
    },

    methods: {
        
        postUser(){
            this.userName = document.getElementById('userName').value,
            this.password = document.getElementById('password').value
            // console.log(this.userName, this.password)

            axios.post('/data-base', {
                firstName: this.userName,
                lastName: this.password
            })
            .then((response) => {
                console.log(response.data.username);
                this.responseName = response.data.username
                if (response.data.isRegisterd == 0) {
                    console.log(response.data.isRegisterd);
                    this.isVisible1 = !this.isVisible2
                }else{
                    this.isVisible2 = !this.isVisible1

                }
            }, (error) => {
                console.log(error);
                });
            
            
        }
    }
}

</script>


<style>

.popup {
    position: absolute;
    right: 50%;
    top: 75%;
    height: 200px;
    width: 50%;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    position: absolute;
    margin-right: -50%;
    transform: translate(-50%, -50%) 
}
</style>