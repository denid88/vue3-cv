<template>
  <form class="card card-w30" @submit.prevent="addBlock">
    <div class="form-control">
      <label for="type">Тип блока</label>
      <select id="type" v-model="type">
        <option
          v-for="(control, index) in controls"
          :selected="index === 0"
          :key="control.value"
          :value="control.value"
        >{{ control.title }}</option>
      </select>
    </div>

    <div class="form-control">
      <label for="value">Значение</label>
      <textarea id="value" v-model="value" rows="3"></textarea>
    </div>

    <button :disabled="isAvailable" class="btn primary">Добавить</button>
  </form>
</template>
<script>
import controls from '../assets/settings/controls.json'
import Block from "../models/Block";
export default {
  name: "Control",
  data() {
    return {
      type: controls[0].value,
      value: '',
      controls: controls
    }
  },
  emits: ['addBlock'],
  computed: {
    isAvailable() {
      return this.value.length === 0
    }
  },
  methods: {
    addBlock() {
      const block = new Block(this.type, this.value)
      this.$emit('addBlock', block)
      this.type = controls[0].value
      this.value = ''
    }
  }
}
</script>
