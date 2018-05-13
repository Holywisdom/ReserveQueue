<template>
  <div class="container">
    <!-- <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Welcome to the Barn Restaurant
          </h1>
          <h2 class="subtitle">
            Resever Queue System
          </h2>
        </div>
      </div>
    </section> -->
    <div class="banner">
    </div>
    <h1 class="title is-3" id="SelectHeader">Select Seat and Table</h1>
    <div class="tabs is-medium">
      <ul v-for="(item, index) in SeatList" :key="index">
        <li v-if="SeatSelect[index] === true" v-on:click="ActiveSeatSelect(index,item)" class="is-active"><a>{{item + " Seat"}}</a></li>
        <li v-else v-on:click="ActiveSeatSelect(index,item)" ><a>{{item + " Seat"}}</a></li>
      </ul>
    </div>
    <div class="columns is-multiline">
      <div class="column is-half" v-for="(item, index) in Seat" :key="index">
        <TableCard  v-bind:TableName=item.TableName v-bind:TableDescription=item.TableDescription  v-bind:Available=item.Available v-bind:ImagePath=item.ImagePath v-bind:id=item.id v-bind:TableSeatNumber=item.TableSeatNumber v-on:SelectedSlot="SetSelectedSlotData"></TableCard>
      </div>
    </div>
    <h1 class="title is-3" id="DetailHeader">Your Detail</h1>
    <h4 class="title is-4" v-if="this.TableName">คุณได้ทำการจองโต๊ะ {{this.TableName}} จำนวน {{this.SelectedTable}} ที่นั่ง {{`วันที่ ${this.DateTime.getDate()}/${this.DateTime.getMonth()+1}/${this.DateTime.getFullYear()+543}`}} ณ เวลา {{this.ConcludeSlot}}</h4>
    <section class="inputForm">
      <input class="input" type="text" placeholder="Name" v-model="CustomerName">
      <input class="input" type="text" placeholder="Phone Number" v-model="PhoneNumber">
      <input class="input" type="textarea" placeholder="Note" v-model="Note">
      <h6 class="title is-6">ลูกค้าที่ทำการจองต้องจ่ายเงินมัดจำ 100 .- (สามารถนำมาเป็นส่วนลดค่าอาหารได้)</h6>
      <button class="button" v-on:click="WritePayment()">Resever</button>
    </section>

  </div>

</template>
<script>

import { db } from '../service/firebase'

import HelloWorld from './HelloWorld.vue'
import TableCard from './TableCard.vue'

export default {
  name: 'ReseverForm',
  created: function () {
    this.GetTable()
  },
  data () {
    return {
      SeatList: [2, 4, 6, 8],
      SeatSelect: [true, false, false, false],
      SeatPick: 2,
      Seat: [],
      CustomerName: '',
      PhoneNumber: '',
      Note: '',
      SelectedSlot: {},
      SelectedTable: '',
      ConcludeSlot: '',
      TableKey: '',
      TableName: '',
      DateTime: new Date()
    }
  },
  firestore () {
    return {
      Table: db.collection('Table'),
      Payment: db.collection('Payment')
    }
  },
  methods: {
    WritePayment: function () {
      this.$firestore.Payment.add({
        Name: this.CustomerName,
        PhoneNumber: this.PhoneNumber,
        TableSeatNumber: this.SeatPick + '',
        SelectedSlot: this.SelectedSlot,
        Note: this.Note,
        TableKey: this.TableKey,
        TableName: this.TableName,
        PaymentTimestamp: new Date()
      }).then(res => {
        var Price = '5'
        var Description = 'Seat ' + this.SeatPick + '_' + this.TableName
        var ReferenceId = this.TableKey
        var SoftDescriptor = this.PhoneNumber
        var PaymentKey = res.id
        window.location.href = `https://reservequeue.firebaseapp.com/pay?price=${Price}&payment=${PaymentKey}&description=${Description}&reference=${ReferenceId}&soft=${SoftDescriptor}`
      })
    },
    ActiveSeatSelect: function (index, item) {
      this.SeatSelect = [false, false, false, false]
      this.SeatSelect[index] = true
      this.SeatPick = item
      this.GetTable()
    },
    GetTable: function () {
      this.Seat = []
      this.$firestore.Table.where('TableSeatNumber', '==', this.SeatPick + '').orderBy('TableName').get().then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, ' => ', doc.data())
          this.Seat.push(Object.assign(doc.data(), {'id': doc.id}))
        })
      })
    },
    SetSelectedSlotData: function (SelectedSlot, id, TableName, TableSeatNumber) {
      this.SelectedSlot = SelectedSlot
      this.TableKey = id
      this.TableName = TableName
      this.SelectedTable = TableSeatNumber

      this.ShothandSlot(this.SelectedSlot).forEach(time => {
        this.ConcludeSlot = this.ConcludeSlot + ' ' + time
      })
      console.log(this.SelectedTable)
    },
    ShothandSlot: function (SelectedSlot) {
      const time = {
        'slot01': '08:00-09:30',
        'slot02': '09:30-11:00',
        'slot03': '11:00-12:30',
        'slot04': '12:30-14:00',
        'slot05': '14:00-15:30',
        'slot06': '15:30-17:00',
        'slot07': '17:00-18:30',
        'slot08': '18:30-20:00',
        'slot09': '20:00-21:30'
      }

      var key = Object.keys(SelectedSlot)
      key.sort()
      const list = key.map(x => parseInt(x.slice(-2)))

      function minus (x, y) {
        if (y - x === 1) {
          return true
        } else {
          return false
        }
      }

      function sliceString (first, last) {
        return time[first].slice(0, 6) + time[last].slice(-5)
      }

      var state = false

      var startNum = ''
      var endNum = []

      for (var i = 0; i < list.length; i++) {
        if (minus(list[i], list[i + 1]) === true) {
          if (state === false) {
            startNum = list[i]
            state = true
          }
        } else {
          if (startNum === '') {
            endNum.push(list[i])
          } else {
            endNum.push([startNum, list[i]])
          }
          state = false
          startNum = ''
        }
      }

      var SlotTime = []

      endNum.forEach(slot => {
        if (slot.length > 1) {
          var textFirst = `slot0${slot[0]}`
          var textLast = `slot0${slot[1]}`
          SlotTime.push(sliceString(textFirst, textLast))
        } else {
          var text = `slot0${slot}`
          SlotTime.push(time[text])
        }
      })
      return SlotTime
    }
  },
  components: {HelloWorld, TableCard}
}
</script>
<style scoped>
.container {
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
  border-color: #333c4a;
}

.button {
  margin: 15px 0 0 0 ;
  background-color: #333c4a;
  color: white;
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

.banner {
  background-position: center center;
  background-repeat: no-repeat;
  width: 414px;
  height: 151px;
  background-image: url('../assets/Banner.jpg')
}

</style>
