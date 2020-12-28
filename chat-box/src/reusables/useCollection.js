import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

// passing in collection to make this component reusable for other potential collections
const useCollection = (collection) => {
    // need error for each resource, for the sake of having separate errors
    const error = ref(null)
    
    const addDocument = async (doc) => {
        error.value = null

        try{
            await projectFirestore.collection(collection).add(doc)
        }catch(err) {
            console.log(err.message)
            error.value= 'could not send your message'
        }
    }

    return { error, addDocument }
}

export default useCollection