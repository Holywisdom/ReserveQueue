<template>
  <div class="container">
    <h1 class="title is-3" id="DetailHeader">Edit Queue</h1>
    <section class="inputForm">
      <input class="input is-primary" type="text" placeholder="Time" v-model="Time">
      <input class="input is-primary" type="text" placeholder="Seat Type" v-model="TableSeatNumber">
      <input class="input is-primary" type="text" placeholder="Table Name" v-model="TableName">
      <input class="input is-primary" type="text" placeholder="Name" v-model="Name">
      <input class="input is-primary" type="text" placeholder="Phone Number" v-model="PhoneNumber">
      <input class="input is-primary" type="text" placeholder="Note" v-model="Note">
      <button class="button" v-on:click="EditQueue">Edit</button>
    </section>
  </div>
</template>

<script>

import { db } from '../service/firebase'

export default {
  name: 'EditQueue',
  props: ['Time', 'TableSeatNumber', 'TableName', 'Name', 'PhoneNumber', 'Note', 'id'],
  data () {
    return {
    }
  },
  firestore () {
    return {
      Queue: db.collection('Queue')
    }
  },
  methods: {
    EditQueue: function () {
      this.$firestore.Queue.doc(this.id).set({
        Time: this.Time,
        TableName: this.TableName,
        TableSeatNumber: this.TableSeatNumber,
        Name: this.Name,
        PhoneNumber: this.PhoneNumber,
        Note: this.Note
      }, { merge: true })
      this.ModalClose()
      console.log(this.Time)
      console.log(this.TableName)
      console.log(this.TableSeatNumber)
      console.log(this.Name)
      console.log(this.PhoneNumber)
      console.log(this.Note)
    },
    ModalClose: function () {
      this.$emit('Modal')
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
  background-color: white;
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
}

.input{
  width: 100% ;
  margin: 8px 0 8px 0;
  border-color: #333c4a;
}

.button {
  background-color: #333c4a;
  color: white;
}

</style>
