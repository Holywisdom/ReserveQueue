<template>
  <div class="container">
    <h1 class="title is-3" id="DetailHeader">Edit Table</h1>
    <section class="inputForm">
      <input class="input is-primary" type="text" placeholder="Table Name" v-model="TableName">
      <input class="input is-primary" type="text" placeholder="Table Seat Number" v-model="TableSeatNumber">
      <input class="input is-primary" type="text" placeholder="Table Description" v-model="TableDescription">
      <input class="input is-primary" type="text" placeholder="Image Link" v-model="ImagePath">
      <button class="button is-primary" type="primary" size="large" v-on:click="EditTable">Edit</button>
    </section>
  </div>
</template>

<script>

import { db } from '../service/firebase'

export default {
  name: 'EditTable',
  props: ['TableName', 'TableDescription', 'TableSeatNumber', 'ImagePath', 'id'],
  data () {
    return {
    }
  },
  firestore () {
    return {
      Table: db.collection('Table')
    }
  },
  methods: {
    EditTable: function () {
      this.$firestore.Table.doc(this.id).set({
        TableName: this.TableName,
        TableSeatNumber: this.TableSeatNumber,
        TableDescription: this.TableDescription,
        ImagePath: this.ImagePath
      }, { merge: true })
      this.ModalClose()
      console.log(this.TableName)
      console.log(this.TableSeatNumber)
      console.log(this.TableDescription)
      console.log(this.ImagePath)
      console.log(this.id)
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
}

</style>
