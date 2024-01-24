<template>
    <div class="container">

        <form action="" @submit.prevent class="signup-form" >
            <input id="email" type="email" autocomplete="off" placeholder="Email" v-model="email"> <br>

            <input id="password" :type="passtype" autocomplete="off" placeholder="password" v-model="password"> <br>

            <span>
                <input id="show" type="checkbox" v-model="isShowPassword" @click="handleTogglePassword()">
                <label for="show">show password</label> <br>
            </span>



            <button @click="HandleLogin">Login</button><br>
            <!-- <button @click="NavSignup">Signup</button> -->
            <router-link :to="{ name: 'Signup' }"  class="link-to-signup">Signup</router-link>

        </form>

        <div class="details" v-show="loginStatus">

            <span>Email : {{ email }}</span><br>
            <span>Password : {{ password }}</span>
        </div>
    </div>
    <router-view></router-view>
</template>


<script>

import Signup from './Signup.vue';

export default {
    name: "Login",
    components: {
        Signup
    },

    data() {
        return {
            email: '',
            password: '',
            isShowPassword: false,
            passtype: 'password',
            loginStatus: false
        }
    },

    methods: {
        HandleLogin() {
            if (this.email != "") {
                const check = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                if (this.email.match(check)) {
                    if (this.password != '') {
                        this.loginStatus = true;
                    }
                    else {
                        alert("Enter password");
                    }
                }
                else {
                    alert("enter correct email")
                }
            }
            else {
                alert("Enter email");
            }
        },

        handleTogglePassword() {
            if (!this.isShowPassword) {
                this.passtype = 'text';
            }
            else {
                this.passtype = 'password'
            }
        },


        // NavSignup() {
        //     this.$router.push('/signup');
        // }


    }

}
</script>

<style>
.signup-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    padding:10px auto;
    background-color: grey;
    
}

.link-to-signup{
    margin-bottom: 20px;
    text-decoration: none;
    font-size: 20px;
}
.link-to-signup:hover{
    color: rgb(255, 217, 0);
}

</style>