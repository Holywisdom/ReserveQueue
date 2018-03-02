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
      <ul v-for="(item, index) in SeatList" :key="index">
        <li v-if="SeatSelect[index] === true" v-on:click="ActiveSeatSelect(index,item)" class="is-active"><a>{{item + " Seat"}}</a></li>
        <li v-else v-on:click="ActiveSeatSelect(index,item)" ><a>{{item + " Seat"}}</a></li>
        <!-- <li><a>4 Seats</a></li>
        <li><a>6 Seats</a></li>
        <li><a>8 Seats</a></li> -->
      </ul>
    </div>
    <div class="columns is-multiline">
      <div class="column is-half" v-for="(item, index) in Seat" :key="index">
        <TableCard  v-bind:TableName=item.TableName v-bind:TableDescription=item.TableDescription  v-bind:Available=item.Available v-bind:ImagePath=item.ImagePath></TableCard>
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
  </div>

</template>
<script>

import { db } from '../service/firebase'

import HelloWorld from './HelloWorld.vue'
import TableCard from './TableCard.vue'

export default {
  name: 'ReseverForm',
  data () {
    return {
      SeatList: [2, 4, 6, 8],
      SeatSelect: [true, false, false, false],
      SeatPick: 2,
      // Seat: {
      //   Seats_2: [
      //     { TableName: 'Table 1', Description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: false, ImagePath: require('../assets/brooke-lark-93583.jpg') },
      //     { TableName: 'Table 2', Description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/nils-stahl-188467.jpg') },
      //     { TableName: 'Table 3', Description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/breather-163397.jpg') },
      //     { TableName: 'Table 4', Description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/thibault-copleux-272762.jpg') }
      //   ],
      //   Seats_4: [
      //     { TableName: 'Table 1', Description: "could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/breather-163397.jpg') },
      //     { TableName: 'Table 2', Description: "could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/thibault-copleux-272762.jpg') }
      //   ],
      //   Seats_6: [
      //     { TableName: 'Table 1', Description: 'Miusov, as a man man of breeding and deilcacy', Available: false, ImagePath: require('../assets/thibault-copleux-272762.jpg') },
      //     { TableName: 'Table 2', Description: 'Miusov, as a man man of breeding and deilcacy', Available: false, ImagePath: require('../assets/thibault-copleux-272762.jpg') }
      //   ],
      //   Seats_8: [
      //     { TableName: 'Table 1', Description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: false, ImagePath: require('../assets/brooke-lark-93583.jpg') },
      //     { TableName: 'Table 2', Description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/nils-stahl-188467.jpg') },
      //     { TableName: 'Table 3', Description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/breather-163397.jpg') },
      //     { TableName: 'Table 4', Description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/breather-163397.jpg') },
      //     { TableName: 'Table 5', Description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/breather-163397.jpg') },
      //     { TableName: 'Table 6', Description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/thibault-copleux-272762.jpg') }
      //   ]
      // },
      Seat: [],
      CustomerName: '',
      PhoneNumber: '',
      SeatNumber: '',
      TimeReserve: '',
      Note: ''
    }
  },
  firestore () {
    return {
      Table: db.collection('Table')
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
    },
    ActiveSeatSelect: function (index, item) {
      this.SeatSelect = [false, false, false, false]
      this.SeatSelect[index] = true
      this.SeatPick = item
      this.GetTable(item)
    },
    GetTable: function (item) {
      this.$firestore.Table.where('TableSeatNumber', '==', item + '').get().then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, ' => ', doc.data())
          this.Seat.push(doc.data())
        })
      })
    }
  },
  components: {HelloWorld, TableCard}
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
