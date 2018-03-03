<template>
  <div class="container">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            xxx Restaurant
          </h1>
          <h2 class="subtitle">
            Table List
          </h2>
        </div>
      </div>
    </section>
    <table class="table is-bordered is-fullwidth">
      <thead>
        <tr>
          <th>Seat Type</th>
          <th>Table Name</th>
          <th>Description</th>
          <th>Image Preview</th>
          <th>Action</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Seat Type</th>
          <th>Table Name</th>
          <th>Description</th>
          <th>Image Preview</th>
          <th>Action</th>
        </tr>
      </tfoot>
      <tbody v-for="(item, index) in Seat" :key="index">
        <tr>
          <th>{{item.TableSeatNumber}}</th>
          <td>{{item.TableName}}</td>
          <td>{{item.TableDescription}}</td>
          <td>
            <figure class="image is-64x64 is-16by9">
              <img v-bind:src='item.ImagePath' alt="Image">
            </figure>
          </td>
          <td>
            <input type="image" v-bind:src="require('../assets/if_brush-pencil_1055103.png')" alt="Submit" width="16" height="16" v-on:click="ModalOpen(item.TableSeatNumber, item.TableName, item.TableDescription, item.ImagePath,item.id)">
            <input type="image" v-bind:src="require('../assets/if_Close-64_32062.png')" alt="Submit" width="16" height="16" v-on:click="eiei">
          </td>
        </tr>
      </tbody>
    </table>
    <div class="modal" v-bind:class="{'is-active': ModalActive}">
      <div class="modal-background"></div>
      <div class="modal-content">
        <EditTable v-bind:TableName="TableName" v-bind:TableSeatNumber="TableSeatNumber" v-bind:TableDescription="TableDescription" v-bind:ImagePath="ImagePath" v-bind:id="id" v-on:Modal="ModalClose"></EditTable>
      </div>
      <button class="modal-close is-large" aria-label="close" v-on:click="ModalClose"></button>
    </div>
  </div>
</template>
<script>

import { db } from '../service/firebase'

import EditTable from './EditTable.vue'

export default {
  name: 'ListTable',
  created: function () {
    this.GetTable()
  },
  data () {
    return {
      Seat: [],
      ModalActive: false,
      TableName: '',
      TableDescription: '',
      TableSeatNumber: '',
      ImagePath: '',
      id: ''
    }
  },
  firestore () {
    return {
      Table: db.collection('Table')
    }
  },
  methods: {
    eiei: function () {
      console.log('eiei')
    },
    ModalOpen: function (TableSeatNumber, TableName, TableDescription, ImagePath, id) {
      this.ModalActive = true
      this.TableSeatNumber = TableSeatNumber
      this.TableName = TableName
      this.TableDescription = TableDescription
      this.ImagePath = ImagePath
      this.id = id
    },
    ModalClose: function () {
      this.ModalActive = false
    },
    GetTable: function () {
      this.$firestore.Table.orderBy('TableSeatNumber').orderBy('TableName').get().then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          // console.log(doc.id, ' => ', doc.data())
          this.Seat.push(Object.assign(doc.data(), {'id': doc.id}))
        })
      })
    }
  },
  components: {EditTable}
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
