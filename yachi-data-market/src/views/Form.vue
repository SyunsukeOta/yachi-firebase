<template>
  <div class="form">
    <table>
      <tr>
        <th>名前</th>
        <td><input type="text" id="name" v-model="playerName"></td>
      </tr>
      <tr>
        <th>スコア</th>
        <td><input type="number" id="score" v-model="scoreSize"></td>
      </tr>
      <tr>
        <th>ヨットを出したか?</th>
        <td><input type="checkbox" id="yachi" v-model="checkYachi" ></td>
      </tr>
    </table>
    <button v-on:click="clickHandler()">決定</button>
  </div>
</template>

<script>
import { db } from '@/main'
export default {
  name: 'Form',
  data() {
    return {
      playerName: '',
      scoreSize: '',
      checkYachi: false,
      id: 3
    }
  },
  methods: {
    clickHandler: function() {
      console.log(this.playerName, Number(this.scoreSize), this.checkYachi);
      this.id++;
      (async () => {
        try {
          const userRef = db.collection('users').doc()
          await userRef.set({
            id: this.id,
            name: this.playerName,
            score: this.scoreSize,
            yachi: this.checkYachi,
          })
        } catch (err) {
          console.log(`Error: ${JSON.stringify(err)}`)
        }
      })()
    }

  },
  created: function() {
    console.log(db.collection('users'));
    
  }
}
</script>