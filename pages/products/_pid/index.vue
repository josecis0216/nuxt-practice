<template>
    <section>
        <h1>product you've chosen {{ $route.params.pid }}</h1>
        <nuxt-link to="/" class="button--grey" >Home</nuxt-link>
    </section>
</template>

<script>
    export default {
        validate (data) {
            console.log(data);
            return true 
        }
    }
</script>