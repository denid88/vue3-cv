<template>
  <div class="card card-w70">
    <h3 v-if="blocks.length === 0">Добавьте первый блок, чтобы увидеть результат</h3>
    <div v-else
      v-for="block in blocks"
      :key="block.value"
    >
      <AvatarBlock
        v-if="block.type === 'avatar'"
        :block="block"
        @moveUpBlock="moveUpBlock(block)"
        @moveDownBlock="moveDownBlock(block)"
        @deleteBlock="deleteBlock(block)"
        @editBlock="editBlock(block)"
      />
      <TitleBlock 
        v-else-if="block.type === 'title'"
        :block="block"
        @moveUpBlock="moveUpBlock(block)"
        @moveDownBlock="moveDownBlock(block)"
        @deleteBlock="deleteBlock(block)"
        @editBlock="editBlock(block)"
      />
      <SubtitleBlock
        v-else-if="block.type === 'subtitle'"
        :block="block"
        @moveUpBlock="moveUpBlock(block)"
        @moveDownBlock="moveDownBlock(block)"
        @deleteBlock="deleteBlock(block)"
        @editBlock="editBlock(block)"
      />
      <TextBlock 
        v-else-if="block.type === 'text'"
        :block="block"
        @moveUpBlock="moveUpBlock(block)"
        @moveDownBlock="moveDownBlock(block)"
        @deleteBlock="deleteBlock(block)"
        @editBlock="editBlock(block)"
      />
    </div>
  </div>
</template>
<script>
import AvatarBlock from '@/components/AvatarBlock' 
import TitleBlock from '@/components/TitleBlock' 
import SubtitleBlock from '@/components/SubtitleBlock' 
import TextBlock from '@/components/TextBlock' 
import { controlMixin } from '../mixins/control.mixin'
export default {
  name: 'Content',
  props: {
    blocks: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  mixins: [controlMixin],
  components: {
    AvatarBlock,
    TitleBlock,
    SubtitleBlock,
    TextBlock
  }
}
</script>
<style lang="scss">
.block {
  position: relative;
}
.contenteditable,
.contenteditable:focus {
  border: 2px solid #42b983;
  outline: none;
  border-radius: 8px;
}
</style>
