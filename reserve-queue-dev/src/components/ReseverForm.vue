<template>
  <div class="bg">
    <h1>Resever Queue</h1>
    <section class="inputForm">
      <v-input class="inputFormList" size="large" placeholder="Name"> </v-input>
      <v-input class="inputFormList" size="large" placeholder="Phone Number"> </v-input>
      <v-input class="inputFormList" size="large" placeholder="Seat Number"> </v-input>
      <v-input class="inputFormList" size="large" placeholder="Time Reserve"> </v-input>
      <v-input class="inputFormList" type="textarea" :rows="4" size="large" placeholder="Note"> </v-input>
      <v-button class="button" type="primary" size="large">{{message}}</v-button>
    </section>
  </div>

</template>
<script>
export default {
  name: 'ReseverForm',
  data () {
    return {
      message: 'Payment'
    }
  }
}
</script>
<style scoped>
.bg {
  background-image: url("../assets/stanford-smith-369293.jpg") ;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 1024px;
  display: flex;
  flex-direction: column;
}

.inputForm {
  width: 35%;
  text-align: center;
  align-self: center;
  margin-top: 2% ;
}

.inputFormList{
  width: 100% ;
  margin: 15px 0 0 0;
}

.button {
  margin: 15px 0 0 0 ;
}

.magin {
  height: 100px;
}

h1 {
  margin: 50px 0 0 0 ;
  color: #ffffff;
  text-align: center;
  font-size: 50px;
}

</style>
