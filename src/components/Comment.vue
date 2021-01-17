<template>
  <li class="list-item">
    <div>
      <p><strong>{{email}}</strong></p>
      <small>{{body}}</small>
    </div>
  </li>
</template>
<script>
export default {
  name: 'Comment',
  props: {
    email: {
      type: String,
      required: true,
      default: ''
    },
    body: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.list-item {
  text-align: left;
  strong {
    color: #42b983;
  }
  &.hover {
    background-color: #eee;
  }
}
</style>