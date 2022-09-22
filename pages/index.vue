<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
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
    })
  },
  // data() {
  //   return {
      
  //   }
  //  }
}
</script>

<style>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  background-image: url('~assets/images/main-page-background.jpg');
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
