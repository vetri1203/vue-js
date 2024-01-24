<template>
    <h2>Indian Players</h2>
    <span v-if="!players">
        <img class="loadingImg" src="https://i.gifer.com/origin/8a/8aa7313013e56502cae9a7c3705d9c2c_w200.webp" alt="loading">
    </span>
    <div class="playersDetails"   v-for="(details, i) in players" :class="i" :key="i">
        <h3>Name : {{ details.name }}</h3><br>
        <img :src="details.img" :alt="details.name"><br>
        <span>Age : {{ details.age }}</span> <br>
        <span>Country : {{ details.country }}</span> <br>
        <!-- <span>Matchs Played : {{ details.match-played }}</span> <br> -->
        <span>Role : {{ details.role }}</span> <br>
        <span>Runs : {{ details.runs }}</span>


        <hr>
    </div>
</template>

<script>
import axios from 'axios';



export default {
    name: 'HomePage',

    data() {
        return {
            players: '',
        }
    },

    mounted() {
        axios.get('https://cricket-api-ah6x.onrender.com/cricket/api')
            .then((data) => {
                this.players = data.data.players;
                console.log(data);
            });


    },
}

</script>

<style>
.loadingImg {
    margin-top: 15%;
    margin-left: 40%;
}

h2 {
    margin-left: 42%;

}


.playersDetails:hover{
    /* background-color: gray; */
    color: red;
    font-size: 20px;
}


</style>