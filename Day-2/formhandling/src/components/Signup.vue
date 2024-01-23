<template>

    <h1>Signup page</h1>

    <form>
        <input type="text" id="name"
        placeholder="name" class="name" autocomplete="on"
        v-model="name"
        >

        <span>{{ name }}</span>
    </form>
</template>

<script>
export default {
    name: 'Signup',
    components: {
        
    },

    data() {
        return {
            name:''
        }
    }
}

</script>