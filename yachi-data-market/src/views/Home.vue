<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
    <ul style="list-style: none;
">
      <li v-for="user in users" :key="user.id">
        <p>名前:{{ user.name }}、スコア:{{ user.score }}、ヨットができたか?:{{ user.yachi }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { db } from '@/main'
export default {
  name: 'Home',
  data() {
    return {
      users: []
    }
  },
  firestore() {
    return {
      users: db.collection('users')
    }
  },
  
  // components: {
  //   HelloWorld
  // }
}
</script>
