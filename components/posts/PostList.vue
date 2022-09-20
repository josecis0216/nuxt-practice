<template>
    <section class="posts-list">
        <PostPreview 
      id="1"
      is-admin="isAdmin"
      thumbnail="https://thehill.com/wp-content/uploads/sites/2/2022/04/eyescan_technology_cyber_istock_0412.jpg?w=1280"
      title="Tech in Today's World"
      previewText="dignissimos veniam cumque ea dolorum pariatur quibusdam nulla, doloremque quam soluta voluptates magni nostrum et! Ex, voluptatem!"
      />
      <PostPreview 
      id="2"
      is-admin="isAdmin"
      thumbnail="https://thehill.com/wp-content/uploads/sites/2/2022/04/eyescan_technology_cyber_istock_0412.jpg?w=1280"
      title="New Tech Today"
      previewText="dignissimos veniam cumque ea dolorum pariatur quibusdam nulla, doloremque quam soluta voluptates magni nostrum et! Ex, voluptatem!"
      />
      <PostPreview 
      id="3"
      is-admin="isAdmin"
      thumbnail="https://thehill.com/wp-content/uploads/sites/2/2022/04/eyescan_technology_cyber_istock_0412.jpg?w=1280"
      title="Tech in Tomorrow's World"
      previewText="dignissimos veniam cumque ea dolorum pariatur quibusdam nulla, doloremque quam soluta voluptates magni nostrum et! Ex, voluptatem!"
      />
    </section>
</template>

<script>
    import PostPreview from '~/components/posts/PostPreview.vue'
    
    export default {
      components: {
        PostPreview
      },
      props: {
        isAdmin: {
          type: Boolean,
          default: false
        }
      }
    }
    </script>

    <style scoped>
        .posts-list {
            display: flex;
            padding: 20px;
            box-sizing: border-box;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
        }
    </style>