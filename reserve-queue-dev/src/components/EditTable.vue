<template>
  <div class="container">
    <h1 class="title is-3" id="DetailHeader">Edit Table</h1>
    <section class="inputForm">
      <input class="input is-primary" type="text" placeholder="Table Name" v-model="TableName">
      <input class="input is-primary" type="text" placeholder="Table Seat Number" v-model="SeatType">
      <input class="input is-primary" type="text" placeholder="Table Description" v-model="Description">
      <input class="input is-primary" type="text" placeholder="Image Link" v-model="ImageLink">
      <button class="button is-primary" type="primary" size="large" v-on:click="CreateTable">Edit</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'EditTable',
  props: ['TableName', 'Description', 'SeatType', 'ImagePath'],
  data () {
    return {
    }
  },
  methods: {
    CreateTable: function () {
      console.log(this.TableName)
      console.log(this.TableSeatNumber)
      console.log(this.TableDescription)
      console.log(this.ImageLink)
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
