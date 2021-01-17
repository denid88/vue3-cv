<template>
  <div class="card block">
    <h2
      :contenteditable="isContentEditable"
      :class='{contenteditable: isContentEditable}'
      ref="editableText"
    >{{block.value}}</h2>
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
  name: 'Subtitle',
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