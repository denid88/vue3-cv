<template>
  <div class="card card-w70">
    <h3 v-if="blocks.length === 0">Добавьте первый блок, чтобы увидеть результат</h3>
    <div v-else
      v-for="block in blocks"
      :key="block.type"
    >
      <AvatarBlock
        v-if="block.type === 'avatar'"
        :avatar="block.value"
      />
      <TitleBlock 
        v-else-if="block.type === 'title'"
        :title="block.value"
      />
      <SubtitleBlock
        v-else-if="block.type === 'subtitle'"
        :subtitle="block.value"
      />
      <TextBlock 
        v-else-if="block.type === 'text'"
        :text="block.value"
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
  name: "Content",
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
</style>
