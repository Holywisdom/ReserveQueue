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
          <th>Name</th>
          <th>Phone Number</th>
          <th>Seat Type</th>
          <th>Table Name</th>
          <th>Note</th>
          <th>Action</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Time</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Seat Type</th>
          <th>Table Name</th>
          <th>Note</th>
          <th>Action</th>
        </tr>
      </tfoot>
      <tbody v-for="(item, index) in TimeList" :key="index">
        <tr>
          <th>{{item.Time}}</th>
          <td>{{item.Name}}</td>
          <td>{{item.PhoneNumber}}</td>
          <td>{{item.TableSeatNumber}}</td>
          <td>{{item.TableName}}</td>
          <td>{{item.Note}}</td>
          <td>
            <input type="image" v-bind:src="require('../assets/if_brush-pencil_1055103.png')" alt="Submit" width="16" height="16" v-on:click="ModalOpen(item.Time, item.TableSeatNumber, item.TableName, item.Name, item.PhoneNumber, item.Note)">
            <input type="image" v-bind:src="require('../assets/if_Close-64_32062.png')" alt="Submit" width="16" height="16" v-on:click="eiei">
          </td>
        </tr>
      </tbody>
    </table>
    <div class="modal" v-bind:class="{'is-active': ModalActive}">
      <div class="modal-background"></div>
      <div class="modal-content">
        <EditQueue v-bind:Time="Time" v-bind:TableSeatNumber="TableSeatNumber" v-bind:TableName="TableName" v-bind:Name="Name" v-bind:PhoneNumber="PhoneNumber" v-bind:Note="Note" v-on:Modal="ModalClose"></EditQueue>
      </div>
      <button class="modal-close is-large" aria-label="close" v-on:click="ModalClose"></button>
    </div>
  </div>
</template>
<script>

import { db } from '../service/firebase'

import EditQueue from './EditQueue.vue'

export default {
  name: 'ListQueue',
  created: function () {
    this.GetQueue()
  },
  data () {
    return {
      TimeList: [],
      ModalActive: false,
      Time: '',
      TableSeatNumber: '',
      TableName: '',
      Name: '',
      PhoneNumber: '',
      Note: ''
    }
  },
  firestore () {
    return {
      Queue: db.collection('Queue')
    }
  },
  methods: {
    eiei: function () {
      console.log('eiei')
    },
    ModalOpen: function (Time, TableSeatNumber, TableName, Name, PhoneNumber, Note) {
      this.ModalActive = true
      this.Time = Time
      this.TableSeatNumber = TableSeatNumber
      this.TableName = TableName
      this.Name = Name
      this.PhoneNumber = PhoneNumber
      this.Note = Note
    },
    ModalClose: function () {
      this.ModalActive = false
    },
    GetQueue: function () {
      this.TimeList = []
      this.$firestore.Queue.orderBy('PhoneNumber').orderBy('Time').get().then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, ' => ', doc.data())
          this.TimeList.push(doc.data())
        })
      })
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
