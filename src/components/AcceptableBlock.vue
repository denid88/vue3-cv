<template>
  <div class="accept-control">
    <div 
      class="accept true"
      @click="accept"
    ><i class="fas fa-check"></i>Accept</div>
    <div 
      class="accept false"
      @click="notAccept"
    ><i class="fas fa-window-close"></i>Close</div>
  </div>  
</template>
<script>
import { acceptMixin } from '../mixins/accept.mixin'
export default {
  name: 'AcceptableBlock',
  mixins: [acceptMixin]
}
</script>
<style lang="scss">
@keyframes showAccept {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 100%;
  }
}
.accept-control {
  margin: 0;
  display: flex;
  height: 30px;
  animation: showAccept .5s ease;
}
.accept {
  margin-right: 20px;
  cursor: pointer;
  i {
    margin-right: 5px;
  }
  &.true {
    color: #42b983
  }
  &.false {
    color: red;
  }
}
</style>