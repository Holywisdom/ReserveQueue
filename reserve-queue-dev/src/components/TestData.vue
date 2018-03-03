<template>
  <div class="container">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            xxx Restaurant
          </h1>
          <h2 class="subtitle">
            Test Data
          </h2>
        </div>
      </div>
    </section>
    <section class="inputForm">
      <button class="button is-primary" type="primary" size="large" v-on:click="WriteTableData">WriteTableData</button>
      <button class="button is-primary" type="primary" size="large" v-on:click="WriteQueueData">WriteQueueData</button>
    </section>
  </div>
</template>

<script>

import { db } from '../service/firebase'

export default {
  name: 'TestData',
  data () {
    return {
    }
  },
  firestore () {
    return {
      Table: db.collection('Table'),
      Queue: db.collection('Queue')
    }
  },
  methods: {
    WriteTableData: function () {
      var data = [
        { TableName: 'Table 1', TableDescription: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: false, ImagePath: require('../assets/brooke-lark-93583.jpg'), TableSeatNumber: '2' },
        { TableName: 'Table 2', TableDescription: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/nils-stahl-188467.jpg'), TableSeatNumber: '2' },
        { TableName: 'Table 3', TableDescription: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/breather-163397.jpg'), TableSeatNumber: '2' },
        { TableName: 'Table 4', TableDescription: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/thibault-copleux-272762.jpg'), TableSeatNumber: '2' },
        { TableName: 'Table 1', TableDescription: "could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/breather-163397.jpg'), TableSeatNumber: '4' },
        { TableName: 'Table 2', TableDescription: "could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/thibault-copleux-272762.jpg'), TableSeatNumber: '4' },
        { TableName: 'Table 1', TableDescription: 'Miusov, as a man man of breeding and deilcacy', Available: false, ImagePath: require('../assets/thibault-copleux-272762.jpg'), TableSeatNumber: '6' },
        { TableName: 'Table 2', TableDescription: 'Miusov, as a man man of breeding and deilcacy', Available: false, ImagePath: require('../assets/thibault-copleux-272762.jpg'), TableSeatNumber: '6' },
        { TableName: 'Table 1', TableDescription: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: false, ImagePath: require('../assets/brooke-lark-93583.jpg'), TableSeatNumber: '8' },
        { TableName: 'Table 2', TableDescription: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/nils-stahl-188467.jpg'), TableSeatNumber: '8' },
        { TableName: 'Table 3', TableDescription: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/breather-163397.jpg'), TableSeatNumber: '8' },
        { TableName: 'Table 4', TableDescription: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/breather-163397.jpg'), TableSeatNumber: '8' },
        { TableName: 'Table 5', TableDescription: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/breather-163397.jpg'), TableSeatNumber: '8' },
        { TableName: 'Table 6', TableDescription: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/thibault-copleux-272762.jpg'), TableSeatNumber: '8' }
      ]
      data.map(obj => {
        this.$firestore.Table.add(
          {
            ...obj
          }
        )
      })
    },
    WriteQueueData: function () {
      var TimeList = [
        { Time: '01:00 - 01.15', TableName: 'Table 1', TableSeatNumber: 2, Name: 'Boing', PhoneNumber: '091-123-4567', Note: 'eiei' },
        { Time: '01:15 - 01.30', TableName: 'Table 1', TableSeatNumber: 2, Name: 'Boing', PhoneNumber: '091-123-4567', Note: 'eiei' },
        { Time: '01:30 - 01.45', TableName: 'Table 1', TableSeatNumber: 2, Name: 'Boing', PhoneNumber: '091-123-4567', Note: 'eiei' },
        { Time: '16:00 - 16.15', TableName: 'Table 2', TableSeatNumber: 2, Name: 'Top', PhoneNumber: '091-123-4567', Note: 'eiei' },
        { Time: '16:15 - 16.30', TableName: 'Table 2', TableSeatNumber: 2, Name: 'Top', PhoneNumber: '091-123-4567', Note: 'eiei' },
        { Time: '11:00 - 11.15', TableName: 'Table 3', TableSeatNumber: 2, Name: 'Fon', PhoneNumber: '091-123-4567', Note: 'eiei' },
        { Time: '21:45 - 22.00', TableName: 'Table 4', TableSeatNumber: 2, Name: 'Somkiat', PhoneNumber: '091-123-4567', Note: 'eiei' },
        { Time: '02:00 - 02.15', TableName: 'Table 1', TableSeatNumber: 4, Name: 'Sompo', PhoneNumber: '091-123-4567', Note: 'eiei' },
        { Time: '05:00 - 05.15', TableName: 'Table 2', TableSeatNumber: 4, Name: 'Saimai', PhoneNumber: '091-123-4567', Note: 'eiei' }
      ]
      TimeList.map(obj => {
        this.$firestore.Queue.add(
          {
            ...obj
          }
        )
      })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#DetailHeader {
  margin-top: 24px;
  align-self: center;
}

.inputForm {
  width: 85%;
  text-align: center;
  align-self: center;
  margin-bottom: 1.5em;
  margin-top: 1.5em;
}

.input{
  width: 100% ;
  margin: 8px 0 8px 0;
}

.hero {
  width: 100% !important ;
}

.button {
  margin-top: 4px;
}

</style>
