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
            <a class="button" v-bind:class="[value ? 'is-black' : 'is-light']" v-on:click="Select(key)" >{{time[key]}}</a>
          </div>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#DetailHeader" class="card-footer-item" v-on:click="ModalClose">Done</a>
      <a href="" class="card-footer-item" v-on:click="ModalClose">Cancel</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'SlotCard',
  props: ['TableName'],
  data () {
    return {
      slot: {
        'slot1': true,
        'slot2': true,
        'slot3': true,
        'slot4': true,
        'slot5': true,
        'slot6': true,
        'slot7': true,
        'slot8': true,
        'slot9': true,
        'slot10': true,
        'slot11': true,
        'slot12': true,
        'slot13': true,
        'slot14': true,
        'slot15': true,
        'slot16': true,
        'slot17': true,
        'slot18': true,
        'slot19': true,
        'slot20': true,
        'slot21': true,
        'slot22': true,
        'slot23': true,
        'slot24': true,
        'slot25': true,
        'slot26': true,
        'slot27': true,
        'slot28': true,
        'slot29': true,
        'slot30': true,
        'slot31': true,
        'slot32': true,
        'slot33': true,
        'slot34': true,
        'slot35': true,
        'slot36': true,
        'slot37': true,
        'slot38': true,
        'slot39': true,
        'slot40': true,
        'slot41': true,
        'slot42': true,
        'slot43': true,
        'slot44': true,
        'slot45': true,
        'slot46': true,
        'slot47': true,
        'slot48': true,
        'slot49': true,
        'slot50': true,
        'slot51': true,
        'slot52': true,
        'slot53': true,
        'slot54': true,
        'slot55': true,
        'slot56': true,
        'slot57': true,
        'slot58': true,
        'slot59': true,
        'slot60': true,
        'slot61': true,
        'slot62': true,
        'slot63': true,
        'slot64': true,
        'slot65': true,
        'slot66': true,
        'slot67': true,
        'slot68': true,
        'slot69': true,
        'slot70': true,
        'slot71': true,
        'slot72': true,
        'slot73': true,
        'slot74': true,
        'slot75': true,
        'slot76': true,
        'slot77': true,
        'slot78': true,
        'slot79': true,
        'slot80': true,
        'slot81': true,
        'slot82': true,
        'slot83': true,
        'slot84': true,
        'slot85': true,
        'slot86': true,
        'slot87': true,
        'slot88': true,
        'slot89': true,
        'slot90': true,
        'slot91': true,
        'slot92': false,
        'slot93': false,
        'slot94': false,
        'slot95': false,
        'slot96': false
      },
      time: {
        'slot1': '00:00-00:15',
        'slot2': '00:15-00:30',
        'slot3': '00:30-00:45',
        'slot4': '00:45-01:00',
        'slot5': '01:00-01:15',
        'slot6': '01:15-01:30',
        'slot7': '01:30-01:45',
        'slot8': '01:45-02:00',
        'slot9': '02:00-02:15',
        'slot10': '02:15-02:30',
        'slot11': '02:30-02:45',
        'slot12': '02:45-03:00',
        'slot13': '03:00-03:15',
        'slot14': '03:15-03:30',
        'slot15': '03:30-03:45',
        'slot16': '03:45-04:00',
        'slot17': '04:00-04:15',
        'slot18': '04:15-04:30',
        'slot19': '04:30-04:45',
        'slot20': '04:45-05:00',
        'slot21': '05:00-05:15',
        'slot22': '05:15-05:30',
        'slot23': '05:30-05:45',
        'slot24': '05:45-06:00',
        'slot25': '06:00-06:15',
        'slot26': '06:15-06:30',
        'slot27': '06:30-06:45',
        'slot28': '06:45-07:00',
        'slot29': '07:00-07:15',
        'slot30': '07:15-07:30',
        'slot31': '07:30-07:45',
        'slot32': '07:45-08:00',
        'slot33': '08:00-08:15',
        'slot34': '08:15-08:30',
        'slot35': '08:30-08:45',
        'slot36': '08:45-09:00',
        'slot37': '09:00-09:15',
        'slot38': '09:15-09:30',
        'slot39': '09:30-09:45',
        'slot40': '09:45-10:00',
        'slot41': '10:00-10:15',
        'slot42': '10:15-10:30',
        'slot43': '10:30-10:45',
        'slot44': '10:45-11:00',
        'slot45': '11:00-11:15',
        'slot46': '11:15-11:30',
        'slot47': '11:30-11:45',
        'slot48': '11:45-12:00',
        'slot49': '12:00-12:15',
        'slot50': '12:15-12:30',
        'slot51': '12:30-12:45',
        'slot52': '12:45-13:00',
        'slot53': '13:00-13:15',
        'slot54': '13:15-13:30',
        'slot55': '13:30-13:45',
        'slot56': '13:45-14:00',
        'slot57': '14:00-14:15',
        'slot58': '14:15-14:30',
        'slot59': '14:30-14:45',
        'slot60': '14:45-15:00',
        'slot61': '15:00-15:15',
        'slot62': '15:15-15:30',
        'slot63': '15:30-15:45',
        'slot64': '15:45-16:00',
        'slot65': '16:00-16:15',
        'slot66': '16:15-16:30',
        'slot67': '16:30-16:45',
        'slot68': '16:45-17:00',
        'slot69': '17:00-17:15',
        'slot70': '17:15-17:30',
        'slot71': '17:30-17:45',
        'slot72': '17:45-18:00',
        'slot73': '18:00-18:15',
        'slot74': '18:15-18:30',
        'slot75': '18:30-18:45',
        'slot76': '18:45-19:00',
        'slot77': '19:00-19:15',
        'slot78': '19:15-19:30',
        'slot79': '19:30-19:45',
        'slot80': '19:45-20:00',
        'slot81': '20:00-20:15',
        'slot82': '20:15-20:30',
        'slot83': '20:30-20:45',
        'slot84': '20:45-21:00',
        'slot85': '21:00-21:15',
        'slot86': '21:15-21:30',
        'slot87': '21:30-21:45',
        'slot88': '21:45-22:00',
        'slot89': '22:00-22:15',
        'slot90': '22:15-22:30',
        'slot91': '22:30-22:45',
        'slot92': '22:45-23:00',
        'slot93': '23:00-23:15',
        'slot94': '23:15-23:30',
        'slot95': '23:30-23:45',
        'slot96': '23:45-00:00'
      }
    }
  },
  methods: {
    ModalClose: function () {
      this.$emit('Modal')
    },
    Select: function (key) {
      console.log(key)
    }
  }
}
</script>

<style scoped>

.content{
  overflow-x: auto;
}

</style>
