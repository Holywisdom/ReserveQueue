<template>
  <div class="container">
    <h1 class="title is-3">Table List</h1>
    <tr>
      <td>
        eiei
      </td>
    </tr>
  </div>
</template>
<script>
export default {
  name: 'ListTable',
  data () {
    return {
      Seat: {
        Seats_2: [
          { TableName: 'Table 1', Description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: false, ImagePath: require('../assets/brooke-lark-93583.jpg') },
          { TableName: 'Table 2', Description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/nils-stahl-188467.jpg') },
          { TableName: 'Table 3', Description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/breather-163397.jpg') },
          { TableName: 'Table 4', Description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/thibault-copleux-272762.jpg') }
        ],
        Seats_4: [
          { TableName: 'Table 1', Description: "could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/breather-163397.jpg') },
          { TableName: 'Table 2', Description: "could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/thibault-copleux-272762.jpg') }
        ],
        Seats_6: [
          { TableName: 'Table 1', Description: 'Miusov, as a man man of breeding and deilcacy', Available: false, ImagePath: require('../assets/thibault-copleux-272762.jpg') },
          { TableName: 'Table 2', Description: 'Miusov, as a man man of breeding and deilcacy', Available: false, ImagePath: require('../assets/thibault-copleux-272762.jpg') }
        ],
        Seats_8: [
          { TableName: 'Table 1', Description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: false, ImagePath: require('../assets/brooke-lark-93583.jpg') },
          { TableName: 'Table 2', Description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/nils-stahl-188467.jpg') },
          { TableName: 'Table 3', Description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/breather-163397.jpg') },
          { TableName: 'Table 4', Description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/breather-163397.jpg') },
          { TableName: 'Table 5', Description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/breather-163397.jpg') },
          { TableName: 'Table 6', Description: "Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have", Available: true, ImagePath: require('../assets/thibault-copleux-272762.jpg') }
        ]
      },
    }
  },
  methods: {
    CreateTable: function () {
      console.log(this.TableName)
      console.log(this.TableSeatNumber)
      console.log(this.TableDescription)
      console.log(this.ImageLink)
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

</style>
