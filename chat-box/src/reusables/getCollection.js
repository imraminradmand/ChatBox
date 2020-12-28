import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

const getCollection = (collection) => {
    const chats = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection).orderBy('createdAt')
    //realtime listener 
    collectionRef.onSnapshot((snap) => {
        let res = []
        snap.docs.forEach( doc => {
            doc.data().createdAt && res.push({...doc.data(), id: doc.id})
        })
        chats.value = res
        error.value = null
    }, (err) => {
        console.log(err.message)
        chats.value = null
        error.value = 'could not fetch chat data'
    }) 

    return { chats, error}

}

export default getCollection