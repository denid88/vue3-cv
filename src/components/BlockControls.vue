<template>
  <div class="controls" @mouseenter="showActiveBlocks" @mouseleave="hideActiveBlocks">
    <div 
      v-if="activeBlocks"
      class="action up"
      @click="moveUpBlock"
    ><i class="fas fa-arrow-circle-up"></i></div>
    <div 
      v-if="activeBlocks"
      class="action down"
      @click="moveDownBlock"
    ><i class="fas fa-arrow-circle-down"></i></div>
    <div 
      v-if="activeBlocks"
      class="action delete"
      @click="deleteBlock"
    ><i class="fas fa-trash-alt"></i></div>
    <div 
      class="action edit"
      @click="editBlock"
    ><i class="fas fa-edit"></i></div> 
  </div>
</template>
<script>
import { controlMixin } from '../mixins/control.mixin'
export default {
  name: 'BlockControls',
  data() {
    return {
      activeBlocks: false
    }
  },
  mixins: [controlMixin],
  methods: {
    showActiveBlocks() {
      this.activeBlocks = true
    },
    hideActiveBlocks() {
      this.activeBlocks = false
    }
  }
}
</script>
<style lang="scss">
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: rotate(180deg);
    }
    100% {
      opacity: 1;
      transform:rotate(0deg);
    }
  }
  .controls {
    position: absolute;
    top: 15px;
    right: 15px;
    display: flex;
    background-color: rgba(255,255,255,.1);
    padding: 2px 4px;
    border: 8px;
    z-index: 2;
  }
  .action {
    margin: 0 10px;
    animation: fadeIn .7s ease;
    cursor: pointer;
  }
  .edit {
    color: #42b983;
    cursor: pointer;
  }
  .delete {
    color: red;
    cursor: pointer;
  }
  .up, .down {
    color: #043ab7;
    cursor: pointer;
  }
</style>