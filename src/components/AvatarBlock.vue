<template>
  <div class="block">
    <div class="avatar card">
      <img :src="block.value">
    </div>
    <p
      v-if="isContentEditable"
      :contenteditable="isContentEditable"
      :class='{contenteditable: isContentEditable}'
      ref="editableText"
    >{{block.value}}</p>
    <AcceptableBlock
      class="accept"
      v-if="isContentEditable"
      @accept="editBlock"
      @notAccept="doNotContentEditable"
    /> 
    <BlockControls
      @deleteBlock="deleteBlock"
      @moveUpBlock="moveUpBlock"
      @moveDownBlock="moveDownBlock"
      @editBlock="editBlockActivated"
    />
  </div>
</template>
<script>
import BlockControls from '@/components/BlockControls'
import AcceptableBlock from '@/components/AcceptableBlock'
import { controlMixin } from '../mixins/control.mixin'
export default {
  name: 'AvatarBlock',  
  props: {
    block: {
      type: Object, 
      required: true,
      default: {}
    }
  },
  mixins: [controlMixin],
  components: {
    BlockControls,
    AcceptableBlock
  },
  methods: {
    editBlock() {;
      this.block.value = this.$refs.editableText.innerHTML
      this.$emit('editBlock', this.block)
      this.isContentEditable = false
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