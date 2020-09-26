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
export default {
  name: 'Form',
  data() {
    return {
      playerName: '',
      scoreSize: '',
      checkYachi: false,
    }
  },
  methods: {
    clickHandler: function() {
      console.log(this.playerName, Number(this.scoreSize), this.checkYachi);
    }
  }
}
</script>