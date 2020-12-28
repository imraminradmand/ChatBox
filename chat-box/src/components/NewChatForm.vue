<template>
  <form>
      <textarea 
      placeholder="New message, hit enter to send"
      v-model="message"
      @keypress.enter.prevent="handleEnter"
      ></textarea>
      <div class="eror">
          {{ error }}
      </div>
  </form>
</template>

<script>
import { ref } from 'vue'
import getCurrentUser from '../reusables/getCurrentUser'
import { timestamp} from '../firebase/config'
import useCollection from '../reusables/useCollection'

export default {

    setup() {
        const { user } = getCurrentUser()
        const { error, addDocument } = useCollection('messages')
        const message = ref('')

        const handleEnter = async() => {
            const chat = {
                message: message.value,
                name: user.value.displayName,
                createdAt: timestamp()
            }

            await addDocument(chat)
            if(!error.value) {
                message.value = ''
            }
        }

        return { message, handleEnter, error}
    }
}
</script>


<style scoped>
  form {
    margin: 10px;
  }
  textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
  }
</style>