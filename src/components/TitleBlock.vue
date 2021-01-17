<template>
  <div class="card block">
    <h1>{{title}}</h1>
  </div>
</template>
<script>
export default {
  name: 'TitleBlock',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>