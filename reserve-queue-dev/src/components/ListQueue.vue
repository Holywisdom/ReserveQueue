<template>
  <div class="container">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            xxx Restaurant
          </h1>
          <h2 class="subtitle">
            Queue List
          </h2>
        </div>
      </div>
    </section>
    <table class="table is-bordered is-fullwidth">
      <thead>
        <tr>
          <th>Time</th>
          <th>Seat Type</th>
          <th>Table Name</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Note</th>
          <th>Action</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Time</th>
          <th>Seat Type</th>
          <th>Table Name</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Note</th>
          <th>Action</th>
        </tr>
      </tfoot>
      <tbody v-for="(item, index) in TimeList" :key="index">
        <tr>
          <th>{{item.Time}}</th>
          <td>{{item.SeatType}}</td>
          <td>{{item.TableName}}</td>
          <td>{{item.Name}}</td>
          <td>{{item.PhoneNumber}}</td>
          <td>{{item.Note}}</td>
          <td>
            <input type="image" v-bind:src="require('../assets/if_brush-pencil_1055103.png')" alt="Submit" width="16" height="16" v-on:click="ModalOpen(item.Time, item.SeatType, item.TableName, item.Name, item.PhoneNumber, item.Note)">
            <input type="image" v-bind:src="require('../assets/if_Close-64_32062.png')" alt="Submit" width="16" height="16" v-on:click="eiei">
          </td>
        </tr>
      </tbody>
    </table>
    <div class="modal" v-bind:class="{'is-active': ModalActive}">
      <div class="modal-background"></div>
      <div class="modal-content">
        <EditQueue v-bind:Time="Time" v-bind:SeatType="SeatType" v-bind:TableName="TableName" v-bind:Name="Name" v-bind:PhoneNumber="PhoneNumber" v-bind:Note="Note" v-on:Modal="ModalClose"></EditQueue>
      </div>
      <button class="modal-close is-large" aria-label="close" v-on:click="ModalClose"></button>
    </div>
  </div>
</template>
<script>

import EditQueue from './EditQueue.vue'

export default {
  name: 'ListQueue',
  data () {
    return {
      TimeList: {
        '1': { Time: '01:00 - 01.15', TableName: 'Table 1', SeatType: 2, Name: 'Boing', PhoneNumber: '091-123-4567', Note: 'eiei' },
        '2': { Time: '01:00 - 01.15', TableName: 'Table 2', SeatType: 2, Name: 'Top', PhoneNumber: '091-123-4567', Note: 'eiei' },
        '3': { Time: '01:00 - 01.15', TableName: 'Table 3', SeatType: 2, Name: 'Fon', PhoneNumber: '091-123-4567', Note: 'eiei' },
        '4': { Time: '01:00 - 01.15', TableName: 'Table 4', SeatType: 2, Name: 'Somkiat', PhoneNumber: '091-123-4567', Note: 'eiei' },
        '5': { Time: '01:00 - 01.15', TableName: 'Table 5', SeatType: 2, Name: 'Sompo', PhoneNumber: '091-123-4567', Note: 'eiei' },
        '6': { Time: '01:00 - 01.15', TableName: 'Table 6', SeatType: 2, Name: 'Saimai', PhoneNumber: '091-123-4567', Note: 'eiei' }
      },
      ModalActive: false,
      Time: '',
      SeatType: '',
      TableName: '',
      Name: '',
      PhoneNumber: '',
      Note: ''
    }
  },
  methods: {
    eiei: function () {
      console.log('eiei')
    },
    ModalOpen: function (Time, SeatType, TableName, Name, PhoneNumber, Note) {
      this.ModalActive = true
      this.Time = Time
      this.SeatType = SeatType
      this.TableName = TableName
      this.Name = Name
      this.PhoneNumber = PhoneNumber
      this.Note = Note
    },
    ModalClose: function () {
      this.ModalActive = false
    }
  },
  components: {EditQueue}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#DetailHeader {
  margin-top: 24px;
  align-self: center;
}

#CreateHeader {
  align-self: center;
}

.hero {
  width: 100% !important ;
}

</style>
