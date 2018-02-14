<template>
  <div class="bg">
    <h1 class="title is-1">Resever Queue</h1>
    <h1 class="title is-1">Title 1</h1>
    <section class="inputForm">
      <input class="inputFormList" size="large" placeholder="Name" v-model="CustomerName">
      <input class="inputFormList" size="large" placeholder="Phone Number" v-model="PhoneNumber">
      <input class="inputFormList" size="large" placeholder="Seat Number" v-model="SeatNumber">
      <input class="inputFormList" size="large" placeholder="Time Reserve" v-model="TimeReserve">
      <input class="inputFormList" type="textarea" :rows="4" size="large" placeholder="Note" v-model="Note">
      <button class="button" type="primary" size="large" v-on:click.native="reverseMessage">Payment</button>
    </section>
  </div>

</template>
<script>
export default {
  name: 'ReseverForm',
  data () {
    return {
      CustomerName: '',
      PhoneNumber: '',
      SeatNumber: '',
      TimeReserve: '',
      Note: ''
    }
  },
  methods: {
    reverseMessage: function () {
      // this.message = this.message.split('').reverse().join('')
      console.log(this.CustomerName)
      console.log(this.PhoneNumber)
      console.log(this.SeatNumber)
      console.log(this.TimeReserve)
      console.log(this.Note)
    }
  }
}
</script>
<style scoped>
.bg {
  /* background-image: url("../assets/stanford-smith-369293.jpg") ; */
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

/* h1 {
  margin: 50px 0 0 0 ;
  color: #ffffff;
  text-align: center;
  font-size: 50px;
} */

</style>
