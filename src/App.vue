<template>
  <main v-cloak>
    <div class="title-app">CV Constructor</div>
    <div class="container column">
      <Controls
        @addBlock="addBlock"
      />
      <Blocks
        :blocks="blocks"
        @deleteBlock="deleteBlock"
        @moveUpBlock="moveUpBlock"
        @moveDownBlock="moveDownBlock"
      />
    </div>
    <Comments />
  </main>
</template>

<script>
Array.prototype.move = function(from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
};
import Controls from "@/components/Controls";
import Blocks from "@/components/Blocks";
import Comments from "@/components/Comments"
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
    },
    deleteBlock(block) {
      this.blocks.splice(this.blocks.indexOf(block), 1)
    },
    editBlock(block) {
      console.log(block);
    },
    moveUpBlock(block) {
      const index = this.blocks.indexOf(block)
      console.log(index);
      this.blocks.move(index, index - 1)
    },
    moveDownBlock(block) {
      const index = this.blocks.indexOf(block)
      console.log(index);
      this.blocks.move(index, index + 1)
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
.title-app {
  font-size: 32px;
  margin-bottom: 40px;
  color: white;
  text-align: center;
}
</style>
