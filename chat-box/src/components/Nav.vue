<template>
  <nav v-if="user">
    <div>
        <p>Hey, {{ user.displayName }} :) </p>
        <p class="email">currently logged in with {{ user.email }}</p>
    </div>
    <button @click="handleClick">
        logout
    </button>
  </nav>
</template>

<script>

import useLogout from '../reusables/useLogout'
import getCurrentUser from '../reusables/getCurrentUser'

export default {

    setup() {
        const { logout, error} = useLogout()
        const { user } = getCurrentUser()

        const handleClick = async() => {
            await logout() 
            if (!error.value) {
                console.log('User logged out')
            }
        }

        return { handleClick, user }
    }
}
</script>

<style>
    nav {
        padding: 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    nav p {
        margin: 2px auto;
        font-size: 16px;
        color: #444;
    }
    nav p.email {
        font-size: 14px;
        color: #999;
    }
</style>