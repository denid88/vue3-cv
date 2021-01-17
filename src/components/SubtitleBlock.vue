<template>
  <div class="card block">
    <h2>{{subtitle}}</h2>
  </div>
</template>
<script>
export default {
  name: "Subtitle",
  props: {
    subtitle: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>