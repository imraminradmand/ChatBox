<template>
  <div class="chat-window">
      <div v-if="error">
          {{ error }}
      </div>
      <div class="messages" v-if="chats" ref='msg'>
          <div v-for="chat in formattedTime" :key="chat.id" class="msg">
              <span class="time">{{ chat.createdAt}}</span>
              <span class="name">{{ chat.name }}</span>
              <span class="message"> {{ chat.message }}</span>
          </div>
      </div>
  </div>
</template>

<script>

import getCollection from '../reusables/getCollection'
import { formatDistanceToNow } from 'date-fns'
import { computed, onUpdated, ref } from 'vue'

export default {
    setup() {
        const { error, chats } = getCollection('messages')

        const formattedTime = computed(() => {
            if(chats.value) {
                return chats.value.map(chat => {
                    let time = formatDistanceToNow(chat.createdAt.toDate())
                    return { ...chat, createdAt: time}
                })
            }
        })

        //auto scroll chat window
        const msg = ref(null)

        onUpdated(() => {
            msg.value.scrollTop = msg.value.scrollHeight
        })

        return { error, chats, formattedTime, msg }
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
