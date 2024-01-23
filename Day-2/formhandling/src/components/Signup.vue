<template>
    <h1>Signup page</h1>

    <form @submit.prevent>
        <input 
            type="text" 
            id="name" 
            placeholder="name" 
            class="name" 
            autocomplete="on" 
            v-model="name">
        <br>
        <input 
            type="number" 
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

        <input 
            type="password" 
            id="password" 
            placeholder="password" 
            class="password" 
            autocomplete="on"
            v-model="password"> <br>

        <button @click="HandleSubmit">signup</button> <br>

        <router-link to="/">Login</router-link>
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