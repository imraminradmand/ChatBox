<template>
    <div class="container">
        <Nav/>
        <ChatWindow />
        <NewChatForm/>
    </div>
</template>

<script>


import Nav from '../components/Nav.vue'
import getCurrentUser from '../reusables/getCurrentUser'
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import NewChatForm from '../components/NewChatForm.vue'
import ChatWindow from '../components/ChatWindow.vue'

export default {
    components: { Nav, NewChatForm, ChatWindow },

    setup() {
        const { user } = getCurrentUser()
        const router = useRouter()
        watch(user, () => {
            if(!user.value) {
                router.push('/')
            }
        })
    }
}
</script>

<style>

</style>