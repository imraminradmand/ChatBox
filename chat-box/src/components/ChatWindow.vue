<template>
  <div class="chat-window">
      <div v-if="error">
          {{ error }}
      </div>
      <div class="messages" v-if="chats">
          <div v-for="chat in chats" :key="chat.id" class="msg">
              <span class="time">{{ chat.createdAt.toDate() }}</span>
              <span class="name">{{ chat.name }}</span>
              <span class="message"> {{ chat.message }}</span>
          </div>
      </div>
  </div>
</template>

<script>

import getCollection from '../reusables/getCollection'
export default {
    setup() {
        const { error, chats } = getCollection('messages')

        return { error, chats }
    }
}
</script>

<style scoped>
  .chat-window {
    background: #fafafa;
    padding: 30px 20px;
  }
  .msg {
    margin: 18px 0;
  }
  .time {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
  }
</style>
