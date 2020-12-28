import { ref, watchEffect } from 'vue';
import { projectFirestore } from '../firebase/config';

const getCollection = (collection) => {
    const chats = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection).orderBy('createdAt')
    //realtime listener 
    const unsub = collectionRef.onSnapshot((snap) => {
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

    //unsub from old collection when component unmounts
    watchEffect((onInvalidate) => {
        onInvalidate(() => unsub())
    })

    return { chats, error}

}

export default getCollection