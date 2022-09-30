<template>
    <div class="posts-page">
        <PostList :posts="loadedPosts" />
    </div>
</template>

<script>
    import PostList from '~/components/Posts/PostList.vue'
    
    export default {
      components: {
        PostList
      },
      asyncData(context, callback) {
        setTimeout(() => {
            callback(null, {
                loadedPosts: [
        {
          id: '1',
          title: 'First Post',
          author: 'Jose Cisneros',
          previewText: 'This is our first Post!',
          thumbnail: 'https://thehill.com/wp-content/uploads/sites/2/2022/04/eyescan_technology_cyber_istock_0412.jpg?w=1280'
        },
        {
          id: '2',
          title: 'Second Post',
          author: 'Jose Cisneros',
          previewText: 'This is our second Post!',
          thumbnail: 'https://thehill.com/wp-content/uploads/sites/2/2022/04/eyescan_technology_cyber_istock_0412.jpg?w=1280'
        }
      ]
            })
        }, 1500)
      },
      created() {
        this.$store.dispatch('setPosts', this.loadedPosts)
      }
    }
    </script>

<style scoped>
    .posts-page {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>