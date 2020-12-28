import { ref } from 'vue';
import { chatAuth } from '../firebase/config';

const user = ref(chatAuth.currentUser)

// function will fire everytime there is change is auth status
chatAuth.onAuthStateChanged((cUser) => {
    console.log('current user is ', cUser)
    user.value = cUser
})

const getCurrentUser = () => {
    return { user }
}

export default getCurrentUser