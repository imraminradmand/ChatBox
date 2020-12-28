<template>
    <div class="container">
        <Nav/>
    </div>
</template>

<script>


import Nav from '../components/Nav.vue'
import getCurrentUser from '../reusables/getCurrentUser'
import { watch } from 'vue'
import { useRouter } from 'vue-router'

export default {
    components: { Nav },

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