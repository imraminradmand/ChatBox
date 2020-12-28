import { ref } from 'vue';
import { chatAuth } from '../firebase/config';

const error = ref(null);

const logout = async () => {
    error.value = null

    try {
        await chatAuth.signOut()
    } catch(err) {
        console.log(err.message)
        error.value = null
    }
}

const useLogout = () => {
     return { error, logout}
}

export default useLogout