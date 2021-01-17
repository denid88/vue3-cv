<template>
  <div class="card block">
    <p 
      :contenteditable="isContentEditable"
      :class='{contenteditable: isContentEditable}'
    >
      {{text}}
    </p>
    <AcceptableBlock
      class="accept"
      v-if="isContentEditable"
      @accept="initiateEditBlock"
      @notAccept="doNotContentEditable"
    /> 
    <BlockControls
      @deleteBlock="deleteBlock"
      @moveUpBlock="moveUpBlock"
      @moveDownBlock="moveDownBlock"
      @editBlock="editBlock"
    />
  </div>
</template>
<script>
import BlockControls from '@/components/BlockControls'
import AcceptableBlock from '@/components/AcceptableBlock'
import { controlMixin } from '../mixins/control.mixin'
export default {
  name: 'Text',
  data() {
    return {
      isContentEditable: false
    }
  },
  props: {
    text: {
      type: String,
      required: true,
      default: ''
    }
  },
  mixins: [controlMixin],
  components: {
    BlockControls,
    AcceptableBlock
  },
  methods: {
    initiateEditBlock() {
      this.$emit('editBlock', text)
      this.isContentEditable = false
    },
    doNotContentEditable() {
      this.isContentEditable = false
    },
    editBlock() {
      this.isContentEditable = true
    }
  }
}
</script>
<style lang="scss" scoped>
  .contenteditable,
  .contenteditable:focus {
    border: 2px solid #42b983;
    outline: none;
    border-radius: 8px;
  }
</style>