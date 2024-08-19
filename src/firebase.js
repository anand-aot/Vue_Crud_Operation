import { ref, onUnmounted } from 'vue'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDoc, updateDoc, deleteDoc, onSnapshot } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: process.env.VUE_APP_API,
    authDomain: process.env.VUE_APP_AUTH,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID,
    measurementId: process.env.VUE_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const userCollection = collection(db, 'users');

export const createUser = async (user) => {
  return await addDoc(userCollection, user);
}

export const getUser = async (id) => {
    const docRef = doc(userCollection, id)
    const docSnap = await getDoc(docRef)
    return docSnap.exists() ? docSnap.data() : null
}
  
export const updateUser = async (id, data) => {
    try {
      const docRef = doc(userCollection, id);
      return await updateDoc(docRef, data);
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
};

export const deleteUser = async (id) => {
  const docRef = doc(userCollection, id);
  return await deleteDoc(docRef);
};

export const useLoadUsers = () => {
    const users = ref([]);
    const unsubscribe = onSnapshot(userCollection, (snapshot) => {
      const fetchedUsers = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log('Fetched users:', fetchedUsers);
      users.value = fetchedUsers;
    });
    onUnmounted(unsubscribe);
    return users;
  };