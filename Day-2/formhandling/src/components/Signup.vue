<template>
    <h1>Signup page</h1>
 
    <form @submit.prevent class="form-container">
        <input 
            type="text" 
            id="name" 
            placeholder="name" 
            class="name" 
            autocomplete="on" 
            v-model="name">
        <br>
        <input 
            type="tel"

            maxlength="12" 
            id="number" 
            placeholder="phone number" 
            class="number" 
            autocomplete="on" 
            v-model="number"> <br>

        <input 
            type="email" 
            id="email" 
            placeholder="email" 
            class="email" 
            autocomplete="on" 
            v-model="email"> <br>
 
        <input  @copy.prevent
            type="password" 
            id="password" 
            minlength="8"
            placeholder="password" 
            class="password" 
            autocomplete="on"
            v-model="password"> <br>

        <button @click="HandleSubmit">signup</button> <br>

        <router-link to="/login" class="link-to-login">Login</router-link>
        <router-view></router-view>

    </form>

    
    <div class="details" v-show="submited">

        <span>Name : {{ name }}</span> <br>
        <span>Number : {{ number }}</span> <br>
        <span>Email : {{ email }}</span><br>
        <span>Password : {{ password }}</span> <br>

    </div>
</template>

<script>
export default {
    name: 'Signup',
    components: {

    },

    data() {
        return {
            name: '',
            number: '',
            email: '',
            password: '',
            submited: false
        }
    },

    methods: {
        HandleSubmit() {
            this.submited = true;
        }
    }
}

</script>


<style>
.form-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    padding:10px auto;
    background-color: grey;
}
input[type='text']{
    margin-top: 20px;
}

.link-to-login{
    margin-bottom: 20px;
    text-decoration: none;
    font-size: 20px;
}
.link-to-login:hover{
    color: rgb(255, 217, 0);
}
</style>