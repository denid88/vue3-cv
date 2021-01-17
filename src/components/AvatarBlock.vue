<template>
  <div class="avatar card block">
    <img :src="avatar">
  </div>
</template>
<script>
export default {
  name: 'AvatarBlock',
  props: {
    avatar: {
      type: String, 
      required: true,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.avatar img {
  width: 150px;
  height: auto;
  border-radius: 50%;
  max-width: 150px;
  height: 150px;
  object-fit: cover;
  object-position: center;
}
</style>