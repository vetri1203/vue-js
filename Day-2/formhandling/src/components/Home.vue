<template>
    <h1>Home page</h1>

    <div class="container">
        <span>
            <router-link class="signupLink" to="/signup">Signup</router-link> <br>

        </span>
        <span>
            <router-link class="loginLink" to="/login">Login</router-link>
        </span>


    </div>
</template>

<script>

// import Signup from './Signup.vue';
// import Login from './Login.vue';
export default {


    name: "Home",
    // component: {
    //     Login,
    //     Signup
    // }
}

</script>

<style>
.signupLink {
    text-decoration: none;
    font-size: 20px;
    color: red;
    background-color: rgb(230, 222, 222);
    padding: 8px;
    margin: 15px;
}

.loginLink {
    text-decoration: none;
    font-size: 20px;
    color: red;
    background-color: rgb(230, 222, 222);
    padding: 8px;
    margin-left: 25px;
}

.loginLink:hover {
    font-size: 25px;
    color: blue;
}

.signupLink:hover {
    font-size: 25px;
    color: blue;

}

.container{
    display: flex;
    flex-wrap: wrap;
align-items: center;
justify-content: center;


}
</style>