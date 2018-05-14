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
            <a class="button is-danger" v-if="value === 'reserved'">{{time[key]}}</a>
            <a class="button is-warning" v-if="value === 'wating'">{{time[key]}}</a>
            <a class="button is-light" v-if="value === 'empty'" v-on:click="Select(key)">{{time[key]}}</a>
            <a class="button " v-bind:style="{ color: 'white' , 'background-color': '#333c4a' }" v-if="value === 'selected'" v-on:click="UnSelect(key)">{{time[key]}}</a>
          </div>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#DetailHeader" class="card-footer-item" v-on:click="Done">Done</a>
      <a class="card-footer-item" v-on:click="ModalClose">Cancel</a>
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
      slot: {},
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
      select: {},
      selectTmp: {}
    }
  },
  firestore () {
    return {
      Slot: db.collection('Slot'),
      WaitingSlot: db.collection('WaitingSlot')
    }
  },
  methods: {
    ModalClose: function () {
      Object.keys(this.selectTmp).map(key => {
        this.selectTmp[key] = 'empty'
      })
      this.$firestore.Slot.doc(this.id).set({
        ...this.selectTmp
      }, { merge: true }).then(() => {
        this.$emit('Modal')
      })
    },
    Done: function () {
      this.$emit('Selected', this.select)
    },
    Select: function (key) {
      this.slot[key] = 'selected'
      this.select[key] = 'wating'
      this.selectTmp[key] = 'selected'
      this.SetWatingSlot(key)
    },
    UnSelect: function (key) {
      this.slot[key] = 'empty'
      this.select[key] = 'empty'
      this.selectTmp[key] = 'empty'
      this.UnSetWatingSlot(key)
    },
    GetSlotData: function () {
      this.$firestore.Slot.doc(this.id).onSnapshot(querySnapshot => {
        this.slot = querySnapshot.data()
        Object.keys(this.selectTmp).map(key => {
          this.slot[key] = this.selectTmp[key]
        })
      })
    },
    SetWatingSlot: function (key) {
      this.$firestore.Slot.doc(this.id).set({
        ...this.select
      }, { merge: true }).then(() => {
        var payload = {}
        payload[key] = new Date()
        this.$firestore.WaitingSlot.doc(this.id).set({
          ...payload
        }, { merge: true })
      })
    },
    UnSetWatingSlot: function (key) {
      this.$firestore.Slot.doc(this.id).set({
        ...this.select
      }, { merge: true }).then(() => {
        this.$firestore.WaitingSlot.doc(this.id).get().then(querySnapshot => {
          var payload = querySnapshot.data()
          delete payload[key]
          this.$firestore.WaitingSlot.doc(this.id).set({
            ...payload
          })
        })
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
