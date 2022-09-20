<template>
    <div class="admin-post-page">
        <section class="update-form">
        <AdminPostForm :post="loadedPost" />
    </section>
    </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm.vue';

    export default {
        components: {
            AdminPostForm
        },
        data() {
            return {
                loadedPost: {
                    author: 'Jose Cisneros',
                    title: 'Awesome Post',
                    thumbnailLink: 'https://thehill.com/wp-content/uploads/sites/2/2022/04/eyescan_technology_cyber_istock_0412.jpg?w=1280',
                    content: 'This is great, thanks!'
                }
            }
        }
    }
</script>