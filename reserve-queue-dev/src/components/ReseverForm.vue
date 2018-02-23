<template>
  <div class="container">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Welcome to xxx Restaurant
          </h1>
          <h2 class="subtitle">
            Resever Queue System
          </h2>
        </div>
      </div>
    </section>
    <!-- <h1 class="title is-1" id="TitleHeader">Resever Queue</h1> -->
    <h1 class="title is-3" id="SelectHeader">Select Seat and Table</h1>
    <div class="tabs is-medium">
      <ul>
        <li class="is-active"><a>2 Seats</a></li>
        <li><a>4 Seats</a></li>
        <li><a>6 Seats</a></li>
        <li><a>8 Seats</a></li>
      </ul>
    </div>
    <div class="columns is-multiline">
      <div class="column is-half">
        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-128x128 is-16by9">
                <img src="../assets/brooke-lark-93583.jpg" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong class="TableName">Table 1</strong>
                  <br>
                  <span class="tag is-success">Available</span>
                  <br>
                  <small>Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed</small>
                  <br>
                </p>
              </div>
              <label class="checkbox">
                <span class=ReserveText> Reserve </span>
                <input type="checkbox" class="InputCheckbox">
              </label>
            </div>
          </article>
        </div>
      </div>
      <div class="column is-half">
        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-128x128 is-16by9">
                <img src="../assets/nils-stahl-188467.jpg" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong class="TableName">Table 2</strong>
                  <br>
                  <span class="tag tag is-danger">Busy</span>
                  <br>
                  <small>Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed</small>
                  <br>
                </p>
              </div>
              <label class="checkbox">
                <span class=ReserveText> Reserve </span>
                <input type="checkbox" class="InputCheckbox">
              </label>
            </div>
          </article>
        </div>
      </div>
      <div class="column is-half">
        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-128x128 is-16by9">
                <img src="../assets/breather-163397.jpg" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong class="TableName">Table 3</strong>
                  <br>
                  <span class="tag is-success">Available</span>
                  <br>
                  <small>Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have</small>
                  <br>
                </p>
              </div>
              <label class="checkbox">
                <span class=ReserveText> Reserve </span>
                <input type="checkbox" class="InputCheckbox">
              </label>
            </div>
          </article>
        </div>
      </div>
      <div class="column is-half">
        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-128x128 is-16by9">
                <img src="../assets/thibault-copleux-272762.jpg" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong class="TableName">Table 4</strong>
                  <br>
                  <span class="tag is-success">Available</span>
                  <br>
                  <small>Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have</small>
                  <br>
                </p>
              </div>
              <label class="checkbox">
                <span class=ReserveText> Reserve </span>
                <input type="checkbox" class="InputCheckbox">
              </label>
            </div>
          </article>
        </div>
      </div>
    </div>
    <h1 class="title is-3" id="DetailHeader">Your Detail</h1>
    <section class="inputForm">
      <input class="input is-primary" type="text" placeholder="Name" v-model="CustomerName">
      <input class="input is-primary" type="text" placeholder="Phone Number" v-model="PhoneNumber">
      <input class="input is-primary" type="text" placeholder="Seat Number" v-model="SeatNumber">
      <input class="input is-primary" type="text" placeholder="Time Reserve" v-model="TimeReserve">
      <input class="input is-primary" type="textarea" placeholder="Note" v-model="Note">
      <button class="button is-primary" type="primary" size="large" v-on:click="reverseMessage">Payment</button>
    </section>
  <HelloWorld></HelloWorld>
  <div class="modal" v-bind:class="{'is-active': ModalActive}">
  <div class="modal-background"></div>
  <div class="modal-content">
    <SlotCard></SlotCard>
  </div>
  <button class="modal-close is-large" aria-label="close" v-on:click="ModalClose"></button>
</div>
  </div>

</template>
<script>
// https://www.google.co.th/search?client=safari&rls=en&q=vue-bulma-expanding&ie=UTF-8&oe=UTF-8&gws_rd=cr&dcr=0&ei=yESHWoGHCYfcvgTbs57ACA
// import Vue from 'vue'
import HelloWorld from './HelloWorld.vue'
import SlotCard from './SlotCard.vue'
// Vue.component('HelloWorld', HelloWorld)

export default {
  name: 'ReseverForm',
  data () {
    return {
      CustomerName: '',
      PhoneNumber: '',
      SeatNumber: '',
      TimeReserve: '',
      Note: '',
      ModalActive: false
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
      this.ModalActive = true
    },
    ModalClose: function () {
      this.ModalActive = false
    }
  },
  components: {HelloWorld, SlotCard}
}
</script>
<style scoped>
.container {
  /* background-image: url("../assets/stanford-smith-369293.jpg") ; */
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero {
  width: 100%;
}

.field {
  display: flex;
  flex-direction: row;
}

.control {
  display: flex;
  flex-direction: row;
}

.inputForm {
  width: 85%;
  text-align: center;
  align-self: center;
  margin-bottom: 1.5em;
}

.input{
  width: 100% ;
  margin: 8px 0 8px 0;
}

.button {
  margin: 15px 0 0 0 ;
}

.magin {
  height: 100px;
}

.TableName {
  font-size: 24px;
}

.checkbox {
  display: flex ;
  flex-direction: row-reverse ;
  align-content: center;
}

.ReserveText{
  margin-left: 8px;
  font-size: 12px;
}
.tag {
  margin-bottom: 4px;
}

#SelectHeader {
  margin-top: 24px;
  align-self: center;
}

#DetailHeader {
  align-self: center;
}

</style>
