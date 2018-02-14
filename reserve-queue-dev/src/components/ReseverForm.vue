<template>
  <div class="container">
    <h1 class="title is-1">Resever Queue</h1>
    <h1 class="title is-3">Pick Time</h1>
    <div class="field">
      <span> Hours : </span>
      <div class="control">
        <div class="select is-primary">
          <select>
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
            <option>05</option>
            <option>06</option>
            <option>07</option>
            <option>08</option>
            <option>09</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
          </select>
        </div>
        <span> Minutes : </span>
        <div class="control">
        <div class="select is-primary">
          <select>
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
            <option>05</option>
            <option>06</option>
            <option>07</option>
            <option>08</option>
            <option>09</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
            <option>32</option>
            <option>33</option>
            <option>34</option>
            <option>35</option>
            <option>36</option>
            <option>37</option>
            <option>38</option>
            <option>39</option>
            <option>40</option>
            <option>41</option>
            <option>42</option>
            <option>43</option>
            <option>44</option>
            <option>45</option>
            <option>46</option>
            <option>47</option>
            <option>48</option>
            <option>49</option>
            <option>50</option>
            <option>51</option>
            <option>52</option>
            <option>53</option>
            <option>54</option>
            <option>55</option>
            <option>56</option>
            <option>57</option>
            <option>58</option>
            <option>59</option>
            <option>60</option>
          </select>
        </div>
        </div>
      </div>
    </div>
    <h1 class="title is-3">Select Table</h1>
    <div class="columns is-multiline">
      <div class="column is-half">
        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                  <br>
                  Eiei
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class="column is-half">
        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                  <br>
                  Eiei
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class="column is-half">
        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                  <br>
                  Eiei
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class="column is-half">
        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                  <br>
                  Eiei
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
    <h1 class="title is-3">Your Deteil</h1>
    <section class="inputForm">
      <input class="input is-primary" type="text" placeholder="Name" v-model="CustomerName">
      <input class="input is-primary" type="text" placeholder="Phone Number" v-model="PhoneNumber">
      <input class="input is-primary" type="text" placeholder="Seat Number" v-model="SeatNumber">
      <input class="input is-primary" type="text" placeholder="Time Reserve" v-model="TimeReserve">
      <input class="input is-primary" type="textarea" placeholder="Note" v-model="Note">
      <button class="button is-primary" type="primary" size="large" v-on:click.native="reverseMessage">Payment</button>
    </section>
  </div>

</template>
<script>
export default {
  name: 'ReseverForm',
  data () {
    return {
      CustomerName: '',
      PhoneNumber: '',
      SeatNumber: '',
      TimeReserve: '',
      Note: ''
    }
  },
  methods: {
    reverseMessage: function () {
      // this.message = this.message.split('').reverse().join('')
      console.log(this.CustomerName)
      console.log(this.PhoneNumber)
      console.log(this.SeatNumber)
      console.log(this.TimeReserve)
      console.log(this.Note)
    }
  }
}
</script>
<style scoped>
.container {
  /* background-image: url("../assets/stanford-smith-369293.jpg") ; */
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.field {
  display: flex;
  flex-direction: row;
}

.control {
  display: flex;
  flex-direction: row;
}

.inputForm {
  width: 35%;
  text-align: center;
  align-self: center;
  margin-top: 2% ;
}

.input{
  width: 100% ;
  margin: 8px 0 8px 0;
}

.button {
  margin: 15px 0 0 0 ;
}

.magin {
  height: 100px;
}

/* h1 {
  margin: 50px 0 0 0 ;
  color: #ffffff;
  text-align: center;
  font-size: 50px;
} */

</style>
