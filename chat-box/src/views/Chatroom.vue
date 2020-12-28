<template>
    <div class="container">
        <Nav/>
        <NewChatForm/>
    </div>
</template>

<script>


import Nav from '../components/Nav.vue'
import getCurrentUser from '../reusables/getCurrentUser'
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import NewChatForm from '../components/NewChatForm.vue'

export default {
    components: { Nav, NewChatForm },

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