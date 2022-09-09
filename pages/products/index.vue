<template>
    <section>
        <button @click="loadProductPage(1)">Product 1</button>
        <button @click="loadProductPage(2)">Product2</button>
    </section>
</template>

<script>
    export default {
        methods: {
            loadProductPage(pid) {
                this.$router.push('/products/' + pid);
            }
        }
    }
</script>