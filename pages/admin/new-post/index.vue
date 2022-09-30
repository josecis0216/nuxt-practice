<template>
    <div class="admin-new-post-page">
        <section class="new-post-form">
            <AdminPostForm />
        </section>
    </div>
</template>

<script>
    import axios from 'axios';
    import AdminPostForm from '@/components/Admin/AdminPostForm.vue';

    export default {
        layout: 'admin',
        components: {
            AdminPostForm
        },
        methods: {
            onSubmitted(postData) {
                axios.post('', postData)
                .then(result => console.log(result))
                .catch(e => console.log(e));
            }
        }
    };
</script>