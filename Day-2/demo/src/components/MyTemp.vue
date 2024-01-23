<template>
    <div>
        Hello hii

        <h1>{{ hello }}</h1>
        <h2>{{ data }}</h2>
    </div>
</template>


<script>
export default {
    name: "MyTemp",
    props: {
        data:{},
        hello: {
            type: String
        }
    }


}

</script>