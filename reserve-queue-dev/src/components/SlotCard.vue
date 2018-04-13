<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{TableName}}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <div class="columns is-multiline is-mobile">
          <div class="column is-half" v-for="(value, key) in slot" v-bind:key=key>
            <a class="button is-danger" v-if="value === true">{{time[key]}}</a>
            <a class="button is-light" v-if="value === false" v-on:click="Select(key)">{{time[key]}}</a>
            <a class="button " v-bind:style="{ color: 'white' , 'background-color': '#333c4a' }" v-if="value === 'selected'" v-on:click="UnSelect(key)">{{time[key]}}</a>
          </div>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#DetailHeader" class="card-footer-item" v-on:click="Done">Done</a>
      <a href="" class="card-footer-item" v-on:click="ModalClose">Cancel</a>
    </footer>
  </div>
</template>

<script>

import { db } from '../service/firebase'

export default {
  name: 'SlotCard',
  props: ['TableName', 'id'],
  created: function () {
    this.GetSlotData()
  },
  data () {
    return {
      slot: [],
      time: {
        'slot01': '08:00-09:30',
        'slot02': '09:30-11:00',
        'slot03': '11:00-12:30',
        'slot04': '12:30-14:00',
        'slot05': '14:00-15:30',
        'slot06': '15:30-17:00',
        'slot07': '17:00-18:30',
        'slot08': '18:30-20:00',
        'slot09': '20:00-21:30'
      },
      select: {}
    }
  },
  firestore () {
    return {
      Slot: db.collection('Slot')
    }
  },
  methods: {
    ModalClose: function () {
      this.$emit('Modal')
    },
    Done: function () {
      this.$emit('Selected', this.select)
    },
    Select: function (key) {
      this.slot[key] = 'selected'
      this.select[key] = true
    },
    UnSelect: function (key) {
      this.slot[key] = false
      delete this.select[key]
    },
    GetSlotData: function () {
      this.$firestore.Slot.doc(this.id).get().then(querySnapshot => {
        this.slot = querySnapshot.data()
      })
    },
    WriteSelectSlot: function () {
      this.$firestore.Slot.doc(this.id).set({
        ...this.select
      }, { merge: true }).then(_ => {
        this.ModalClose()
      })
    }
  }
}
</script>

<style scoped>

.card-header-title {
  font-size: 22px;
}

.card-footer-item {
  font-size: 14px;
}

</style>
