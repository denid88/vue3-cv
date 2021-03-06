<template>
  <main v-cloak>
    <header class="title-app">CV Constructor</header>
    <div class="container column">
      <Controls
        @addBlock="addBlock"
      />
      <Blocks
        :blocks="blocks"
        @deleteBlock="deleteBlock"
        @moveUpBlock="moveUpBlock"
        @moveDownBlock="moveDownBlock"
        @editBlock="editBlock"
        v-if="!isLoadingBlocks"
      />
      <Loader
        v-else-if="isLoadingBlocks"
      />
    </div>
    <Comments
      :comments="comments"
      :isLoaded="isLoadedComments"
      :isLoading="isLoadingComments"
      @loadComments="loadComments"
    />
    <Notification :notification='initNotification' />
  </main>
</template>

<script>
const commentsUrl = 'https://jsonplaceholder.typicode.com/comments?_limit=42'
const apiBaseUrl = process.env.VUE_APP_API_BASE_URL
import { move } from '@/utils/move'
import axios from 'axios'
import Controls from "@/components/Controls";
import Blocks from "@/components/Blocks";
import Comments from "@/components/Comments"
import Loader from '@/components/Loader'
export default {
  name: 'App',
  data() {
    return {
      blocks: [],
      comments: [],
      isLoadingBlocks: false,
      isLoadedComments: false,
      isLoadingComments: false,
    }
  },
  components: {
    Controls,
    Blocks,
    Comments,
    Loader
  },
  created() {
    this.loadBlocks()
  },
  methods: {
    loadBlocks() {
      this.isLoadingBlocks = true
      axios.get(`${apiBaseUrl}/blocks.json`)
        .then(result => {
          if (result.status === 200) {
            this.blocks = result.data != null ? Object.values(result.data) : []
            this.isLoadingBlocks = false
            this.showNotification({type: 'primary', text: 'The CV was loaded correctly'})
          }
        })
        .catch((e) => {
          this.isLoadingBlocks = false
          this.showNotification({type: 'danger', text: e.message})
        })
    },
    addBlock(block) {
       axios.post(`${apiBaseUrl}/blocks.json`, block)
        .then((result) => {
          if (result.status === 200) {
            this.showNotification({type: 'primary', text: 'The new block was added to CV'})
            this.loadBlocks()
          }
        })
        .catch((e) => {
          this.showNotification({type: 'danger', text: e.message})
        })

    },
    deleteBlock(block) {
      this.blocks.splice(this.blocks.indexOf(block), 1)
      axios.put(`${apiBaseUrl}/blocks.json`, this.blocks)
        .then((result) => {
          if (result.status === 200) {
            this.showNotification({type: 'primary', text: 'The block was deleted'})
          }
        })
        .catch((e) => {
          this.showNotification({type: 'danger', text: e.message})
        })
    },
    editBlock(block) {
      const index = this.blocks.indexOf(block)
      this.blocks[index].value = block.value
      axios.put(`${apiBaseUrl}/blocks.json`, this.blocks)
        .then((result) => {
          if (result.status === 200) {
            this.showNotification({type: 'primary', text: 'The block was updated'})
          }
        })
        .catch((e) => {
          this.showNotification({type: 'danger', text: e.message})
        })
    },
    moveUpBlock(block) {
      const index = this.blocks.indexOf(block)
      this.blocks = move(this.blocks, index, index - 1)

      axios.put(`${apiBaseUrl}/blocks.json`, this.blocks)
        .then()
        .catch((e) => {
          this.showNotification({type: 'danger', text: e.message})
        })
    },
    moveDownBlock(block) {
      const index = this.blocks.indexOf(block)
      this.blocks = move(this.blocks, index, index + 1)

       axios.put(`${apiBaseUrl}/blocks.json`, this.blocks)
        .then()
        .catch((e) => {
          this.showNotification({type: 'danger', text: e.message})
        })
    },
    loadComments() {
      if (this.isLoadedComments === true) {return this.isLoadedComments = false}
      this.isLoadingComments = true
      axios.get(commentsUrl)
        .then(result => {
          this.isLoadingComments = false
          this.isLoadedComments = true
          if (result.status === 200) {
            this.comments = result.data
            this.showNotification({type: 'primary', text: 'The comments loaded successfully'})
          }
        })
        .catch(e => {
          this.isLoadedComments = true
          this.isLoadingComments = false
          this.showNotification({type: 'danger', text: e.message})
        })
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
[v-cloak] {
  display: none;
}
.title-app {
  font-size: 32px;
  margin-bottom: 40px;
  color: white;
  text-align: center;
  text-transform: uppercase;
}
</style>
