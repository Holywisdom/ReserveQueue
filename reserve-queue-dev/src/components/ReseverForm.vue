<template>
  <div id="bg">
    <div id="inputForm">
      <v-input id="inputForm" placeholder="Name"> </v-input>
      <v-input id="inputForm" placeholder="Phone Number"> </v-input>
      <v-input id="inputForm" placeholder="Seat Number"> </v-input>
      <v-input id="inputForm" placeholder="Seat Number"> </v-input>
      <v-input id="inputForm" placeholder="Time Reserve"> </v-input>
      <v-input id="inputForm" placeholder="Note"> </v-input>
      <v-button id="button" type="primary" size="large">{{message}}</v-button>
    </div>
  </div>

</template>
<script>
export default {
  name: 'ReseverForm',
  data () {
    return {
      message: 'Hello Vue!'
    }
  }
}
</script>
<style scoped>
#bg {
  background-image: url("../assets/stanford-smith-369293.jpg") ;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 1024px;
  display: flex;
  flex-direction: column;
}

inputForm {
  width: 50%;
  text-align: center;
}
</style>
