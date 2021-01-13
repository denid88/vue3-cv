<template>
  <main v-cloak>
    <div class="container column">
      <Controls
        @addBlock="addBlock"
      />
      <Blocks />
    </div>
    <Comments />
  </main>
</template>

<script>
import Controls from "./components/Controls";
import Blocks from "./components/Blocks";
import Comments from "./components/Comments"
export default {
  name: 'App',
  data() {
    return {
      blocks: []
    }
  },
  components: {
    Controls,
    Blocks,
    Comments
  },
  methods: {
    addBlock(block) {
      this.blocks.push(block)
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
[v-cloak] {
  display: none;
}
</style>
