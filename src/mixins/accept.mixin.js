export const acceptMixin = {
  emits: ['accept', 'notAccept'],
  methods: {
    accept() {
      this.$emit('accept')
    },
    notAccept() {
      this.$emit('notAccept')
    }
  }
}