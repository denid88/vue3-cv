export const controlMixin = {
  data() {
    return {
      isContentEditable: false
    }
  },
  emits: ['moveUpBlock', 'moveDownBlock', 'deleteBlock', 'editBlock'],
  methods: {
    moveUpBlock(value) {
      value === null ? this.$emit('moveUpBlock') : this.$emit('moveUpBlock', value)
    },
    moveDownBlock(value) {
      value === null ? this.$emit('moveDownBlock') : this.$emit('moveDownBlock', value)
    },
    deleteBlock(value) {
      value === null ? this.$emit('deleteBlock') : this.$emit('deleteBlock', value)
    },
    editBlock(value) {
      value === null ? this.$emit('editBlock') : this.$emit('editBlock', value)
    },
    doNotContentEditable() {
      this.isContentEditable = false
    },
    editBlockActivated() {
      this.isContentEditable = true
    }
  }
}