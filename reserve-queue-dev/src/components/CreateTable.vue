<template>
  <div class="container">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            xxx Restaurant
          </h1>
          <h2 class="subtitle">
            Create Table
          </h2>
        </div>
      </div>
    </section>
    <section class="inputForm">
      <input class="input is-primary" type="text" placeholder="Table Name" v-model="TableName">
      <input class="input is-primary" type="text" placeholder="Table Seat Number" v-model="TableSeatNumber">
      <input class="input is-primary" type="text" placeholder="Table Description" v-model="TableDescription">
      <input class="input is-primary" type="text" placeholder="Image Link" v-model="ImageLink">
      <button class="button is-primary" type="primary" size="large" v-on:click="CreateTable">Create</button>
      <button class="button is-primary" type="primary" size="large" v-on:click="GetTable">Get</button>
    </section>
  </div>
</template>

<script>

import { db } from '../service/firebase'

export default {
  name: 'CreateTable',
  data () {
    return {
      TableName: '',
      TableSeatNumber: '',
      TableDescription: '',
      ImageLink: ''
    }
  },
  firestore () {
    return {
      Table: db.collection('Table')
    }
  },
  methods: {
    CreateTable: function () {
      this.$firestore.Table.add(
        {
          TableName: this.TableName,
          TableDescription: this.TableDescription,
          TableSeatNumber: this.TableSeatNumber,
          ImageLink: this.ImageLink
        }
      )
      this.TableName = ''
      this.TableSeatNumber = ''
      this.TableDescription = ''
      this.ImageLink = ''
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
