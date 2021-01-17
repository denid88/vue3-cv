<template>
  <div class="container">
    <div class="comments-control">
      <button 
        class="btn primary"
        @click='loadComments'
      >{{ !isLoaded ? 'Загрузить комментарии' : 'Скрыть комментарии'}}</button>
    </div>
    <div class="card"
      v-if="isLoaded"
    >
      <h2>Комментарии</h2>
      <ul v-if="comments.length !== 0" class="list">
        <Comment 
          v-for="comment in comments"
          :key="comment.id"
          :email="comment.email"
          :body="comment.body"
        />
      </ul>
      <div v-else-if="comments.length === 0">
        <p>Не найдено ни одного комментария</p>
      </div>
    </div>
    <div
      v-if="isLoading" 
      class="loader"
    ></div>
  </div>
</template>
<script>
import Comment from '@/components/Comment'
export default {
  name: 'Comments',
  props: {
    isLoaded: {
      type: Boolean,
      required: true,
      default: false
    },
    isLoading: {
      type: Boolean,
      required: true,
      default: false
    },
    comments: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  emits: ['loadComments'],
  components: {
    Comment,
  },
  methods: {
    loadComments() {
      this.$emit('loadComments')
    }
  }
}
</script>
<style scoped>
.comments-control {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
}
.error{
  color: red;
}
</style>
