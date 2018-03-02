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
      <tbody v-for="(items, index) in Seat" :key="index">
        <tr v-for="(item, index_item) in items" :key="index_item">
          <th>{{item.SeatType}}</th>
          <td>{{item.TableName}}</td>
          <td>{{item.Description}}</td>
          <td>
            <figure class="image is-64x64 is-16by9">
              <img v-bind:src='item.ImagePath' alt="Image">
            </figure>
          </td>
          <td>
            <input type="image" v-bind:src="require('../assets/if_brush-pencil_1055103.png')" alt="Submit" width="16" height="16" v-on:click="ModalOpen(item.SeatType, item.TableName, item.Description, item.ImagePath)">
            <input type="image" v-bind:src="require('../assets/if_Close-64_32062.png')" alt="Submit" width="16" height="16" v-on:click="eiei">
          </td>
        </tr>
      </tbody>
    </table>
    <div class="modal" v-bind:class="{'is-active': ModalActive}">
      <div class="modal-background"></div>
      <div class="modal-content">
        <EditTable v-bind:TableName="TableName" v-bind:SeatType="SeatType" v-bind:Description="Description" v-bind:ImagePath="ImagePath"  v-on:Modal="ModalClose"></EditTable>
      </div>
      <button class="modal-close is-large" aria-label="close" v-on:click="ModalClose"></button>
    </div>
  </div>
</template>
<script>

import CreateTable from './CreateTable.vue'
import EditTable from './EditTable.vue'

export default {
  name: 'ListQueue',
  data () {
    return {
      Seat: {
        Seats_2: [
          { TableName: 'Table 1', Description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: false, ImagePath: require('../assets/brooke-lark-93583.jpg'), SeatType: 2 },
          { TableName: 'Table 2', Description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/nils-stahl-188467.jpg'), SeatType: 2 },
          { TableName: 'Table 3', Description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/breather-163397.jpg'), SeatType: 2 },
          { TableName: 'Table 4', Description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/thibault-copleux-272762.jpg'), SeatType: 2 }
        ],
        Seats_4: [
          { TableName: 'Table 1', Description: "could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/breather-163397.jpg'), SeatType: 4 },
          { TableName: 'Table 2', Description: "could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/thibault-copleux-272762.jpg'), SeatType: 4 }
        ],
        Seats_6: [
          { TableName: 'Table 1', Description: 'Miusov, as a man man of breeding and deilcacy', Available: false, ImagePath: require('../assets/thibault-copleux-272762.jpg'), SeatType: 6 },
          { TableName: 'Table 2', Description: 'Miusov, as a man man of breeding and deilcacy', Available: false, ImagePath: require('../assets/thibault-copleux-272762.jpg'), SeatType: 6 }
        ],
        Seats_8: [
          { TableName: 'Table 1', Description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: false, ImagePath: require('../assets/brooke-lark-93583.jpg'), SeatType: 8 },
          { TableName: 'Table 2', Description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/nils-stahl-188467.jpg'), SeatType: 8 },
          { TableName: 'Table 3', Description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/breather-163397.jpg'), SeatType: 8 },
          { TableName: 'Table 4', Description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/breather-163397.jpg'), SeatType: 8 },
          { TableName: 'Table 5', Description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/breather-163397.jpg'), SeatType: 8 },
          { TableName: 'Table 6', Description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/thibault-copleux-272762.jpg'), SeatType: 8 }
        ]
      },
      ModalActive: false,
      TableName: '',
      Description: '',
      SeatType: '',
      ImagePath: ''
    }
  },
  methods: {
    eiei: function () {
      console.log('eiei')
    },
    ModalOpen: function (SeatType, TableName, Description, ImagePath) {
      this.ModalActive = true
      this.SeatType = SeatType
      this.TableName = TableName
      this.Description = Description
      this.ImagePath = ImagePath
    },
    ModalClose: function () {
      this.ModalActive = false
    }
  },
  components: {EditTable, CreateTable}
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
