<template>
  <div class="content">
    <div class="container">
      <div class="Search__container">
        <input
          type="search"
          name="search"
          class="Search__input"
          placeholder="npm package name"
          v-model="package"
          @keyup.enter="requestData">
        <button class="Search__button" @click="requestData">Поиск</button>
        <span class="Search__icon" @click="toggleSettings()">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54" enable-background="new 0 0 54 54"><path d="M51.22 21h-5.052c-.812 0-1.481-.447-1.792-1.197s-.153-1.54.42-2.114l3.572-3.571c.525-.525.814-1.224.814-1.966 0-.743-.289-1.441-.814-1.967l-4.553-4.553c-1.05-1.05-2.881-1.052-3.933 0l-3.571 3.571c-.574.573-1.366.733-2.114.421-.75-.311-1.197-.98-1.197-1.792v-5.052c0-1.533-1.247-2.78-2.78-2.78h-6.44c-1.533 0-2.78 1.247-2.78 2.78v5.052c0 .812-.447 1.481-1.197 1.792-.748.313-1.54.152-2.114-.421l-3.571-3.571c-1.052-1.052-2.883-1.05-3.933 0l-4.553 4.553c-.525.525-.814 1.224-.814 1.967 0 .742.289 1.44.814 1.966l3.572 3.571c.573.574.73 1.364.42 2.114s-.98 1.197-1.792 1.197h-5.052c-1.533 0-2.78 1.247-2.78 2.78v6.439c0 1.534 1.247 2.781 2.78 2.781h5.052c.812 0 1.481.447 1.792 1.197s.153 1.54-.42 2.114l-3.572 3.571c-.525.525-.814 1.224-.814 1.966 0 .743.289 1.441.814 1.967l4.553 4.553c1.051 1.051 2.881 1.053 3.933 0l3.571-3.572c.574-.573 1.363-.731 2.114-.42.75.311 1.197.98 1.197 1.792v5.052c0 1.533 1.247 2.78 2.78 2.78h6.439c1.533 0 2.78-1.247 2.78-2.78v-5.052c0-.812.447-1.481 1.197-1.792.751-.312 1.54-.153 2.114.42l3.571 3.572c1.052 1.052 2.883 1.05 3.933 0l4.553-4.553c.525-.525.814-1.224.814-1.967 0-.742-.289-1.44-.814-1.966l-3.572-3.571c-.573-.574-.73-1.364-.42-2.114s.981-1.197 1.793-1.197h5.052c1.533 0 2.78-1.247 2.78-2.78v-6.44c0-1.533-1.247-2.78-2.78-2.78zm.78 9.22c0 .43-.35.78-.78.78h-5.052c-1.624 0-3.019.932-3.64 2.432-.622 1.5-.295 3.146.854 4.294l3.572 3.571c.305.305.305.8 0 1.104l-4.553 4.553c-.304.304-.799.306-1.104 0l-3.571-3.572c-1.149-1.149-2.794-1.474-4.294-.854-1.5.621-2.432 2.016-2.432 3.64v5.052c0 .43-.35.78-.78.78h-6.44c-.43 0-.78-.35-.78-.78v-5.052c0-1.624-.932-3.019-2.432-3.64-.503-.209-1.021-.311-1.533-.311-1.014 0-1.997.4-2.761 1.164l-3.571 3.572c-.306.306-.801.304-1.104 0l-4.553-4.553c-.305-.305-.305-.8 0-1.104l3.572-3.571c1.148-1.148 1.476-2.794.854-4.294-.621-1.499-2.016-2.431-3.64-2.431h-5.052c-.43 0-.78-.35-.78-.78v-6.44c0-.43.35-.78.78-.78h5.052c1.624 0 3.019-.932 3.64-2.432.622-1.5.295-3.146-.854-4.294l-3.572-3.571c-.305-.305-.305-.8 0-1.104l4.553-4.553c.304-.305.799-.305 1.104 0l3.571 3.571c1.147 1.147 2.792 1.476 4.294.854 1.5-.62 2.432-2.015 2.432-3.639v-5.052c0-.43.35-.78.78-.78h6.439c.431 0 .781.35.781.78v5.052c0 1.624.932 3.019 2.432 3.64 1.502.622 3.146.294 4.294-.854l3.571-3.571c.306-.305.801-.305 1.104 0l4.553 4.553c.305.305.305.8 0 1.104l-3.572 3.571c-1.148 1.148-1.476 2.794-.854 4.294.621 1.5 2.016 2.432 3.64 2.432h5.052c.43-.001.78.349.78.779v6.44zM27 18c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7s3.141-7 7-7 7 3.141 7 7-3.141 7-7 7z"/>
          </svg>
        </span>
      </div>
      <div class="Search__settings" v-if="showSettings">
        <datepicker input-class="Search__input" placeholder="Start Date" name="start-date" v-model="periodStart"></datepicker>
        <datepicker input-class="Search__input" placeholder="End Date" name="end-date" v-model="periodEnd"></datepicker>
      </div>

      <div class="error-message" v-if="showError">
        {{ errorMessage }}
      </div>

      <hr>

      <div v-if="loading" class="loading">
        🔧  Building Charts ...
        <div class="sk-cube-grid">
          <div class="sk-cube sk-cube1"></div>
          <div class="sk-cube sk-cube2"></div>
          <div class="sk-cube sk-cube3"></div>
          <div class="sk-cube sk-cube4"></div>
          <div class="sk-cube sk-cube5"></div>
          <div class="sk-cube sk-cube6"></div>
          <div class="sk-cube sk-cube7"></div>
          <div class="sk-cube sk-cube8"></div>
          <div class="sk-cube sk-cube9"></div>
        </div>
      </div>

      <package-info v-if="loaded" :package-name="packageName" :total-downloads="totalDownloads" :period="formattedPeriod"></package-info>

      <div class="Chart__container" v-if="loaded">
        <div class="Chart__title">
          Загрузок за период <span> {{ formattedPeriod }} </span>
          <hr>
        </div>
        <div class="Chart__content">
          <line-chart v-if="loaded" :chart-data="downloads" :chart-labels="labels"></line-chart>
        </div>
      </div>

      <div class="Chart__container" v-if="loaded">
        <div class="Chart__title">
          Загрузок в неделю
          <hr>
        </div>
        <div class="Chart__content">
          <line-chart v-if="loaded" :chart-data="downloadsWeek" :chart-labels="labelsWeek"></line-chart>
        </div>
      </div>

      <div class="Chart__container" v-if="loaded">
        <div class="Chart__title">
          Загрузок в месяц
          <hr>
        </div>
        <div class="Chart__content">
          <line-chart v-if="loaded" :chart-data="downloadsMonth" :chart-labels="labelsMonth"></line-chart>
        </div>
      </div>

      <div class="Chart__container" v-if="loaded">
        <div class="Chart__title">
          Загрузок в год
          <hr>
        </div>
        <div class="Chart__content">
          <line-chart v-if="loaded" :chart-data="downloadsYear" :chart-labels="labelsYear"></line-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'
  import Datepicker from 'vuejs-datepicker'

  import LineChart from '@/components/LineChart'
  import PackageInfo from '@/components/PackageInfo'
  import { removeDuplicate, groupData } from '../utils/downloadFormatter.js'
  import { dateToYear, dateToMonth, dateToWeek, dateToDay, dateBeautify} from '../utils/dateFormat.js'

  export default {
    components: {
      Datepicker,
      LineChart,
      PackageInfo
    },
    data () {
      return {
        downloads: [],
        downloadsYear: [],
        downloadsMonth: [],
        downloadsWeek: [],
        package: null,
        packageName: '',
        loaded: false,
        loading: true,
        labels: [],
        labelsYear: [],
        labelsMonth: [],
        labelsWeek: [],
        showError: false,
        errorMessage: 'Введите название пакета',
        showSettings: false,
        periodStart: '',
        periodEnd: new Date(),
        rawData: '',
        totalDownloads: NaN
      }
    },
    mounted() {
      if (this.$route.params.package) {
        this.package = this.$route.params.package;
        this.requestData();
      }
    },
    computed: {
      _endDate() {
        return dateToDay(this.periodEnd);
      },
      _startDate() {
        return dateToDay(this.periodStart);
      },
      period() {
        return this.periodStart ? `${this._startDate}:${this._endDate}` : 'last-month';
      },
      formattedPeriod() {
        return this.periodStart ? `${dateBeautify(this._startDate)} - ${dateBeautify(this._endDate)}` : 'last-month'
      }
    },
    methods: {
      toggleSettings() {
        this.showSettings = !this.showSettings;
      },
      requestData() {
        if (this.package === null 
            || this.package === '' 
            || this.package === 'undefined') {
          this.showError = true;
          return;
        }         
        this.resetState();
        this.loading = true;

        axios.get(`https://api.npmjs.org/downloads/range/${this.period}/${this.package}`)
          .then(response => {
            this.rawData = response.data.downloads;
            this.downloads = response.data.downloads.map(entry => entry.downloads);
            this.labels = response.data.downloads.map(entry => entry.day);
            this.packageName = response.data.package;
            this.totalDownloads = this.downloads.reduce((total, download) => total + download);
            this.setURL();
            this.groupByDate();
            this.loaded = true;
            this.loading = false;
          })
          .catch(err => {
            this.errorMessage = err.response.data.error;
            this.showError = true;
          })
      },
      resetState() {
        this.loaded = false;
        this.showError = false;
      },
      setURL() {
        history.pushState({ info: `npm-stats ${this.package}` }, this.package, `/#/${this.package}`)
      },
      groupByDate() {
        this.formatYear();
        this.formatMonth();
        this.formatWeek();
      },
      formatYear() {
        this.labelsYear = this.rawData
          .map(entry => dateToYear(entry.day))
          .reduce(removeDuplicate, []);
        this.downloadsYear = groupData(this.rawData, dateToYear);
      },
      formatMonth() {
        this.labelsMonth = this.rawData
          .map(entry => dateToMonth(entry.day))
          .reduce(removeDuplicate, []);
        this.downloadsMonth = groupData(this.rawData, dateToMonth);
      },
      formatWeek() {
        this.labelsWeek = this.rawData
          .map(entry => dateToWeek(entry.day))
          .reduce(removeDuplicate, []);
        this.downloadsWeek = groupData(this.rawData, dateToWeek);
      }
    }
  }
</script>

<style lang="scss">
  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #e8e9ed;
    margin: 1em 0;
    padding: 0;
  }
  
  .content {
    background: #fafbfe;
    min-height: calc(100vh - 184.18px);
  }

  .container {
    max-width: 90rem;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
    box-sizing: border-box;
  }

  .Search {
    &__container {
      max-width: 40rem;
      padding: 6.25rem 0 1.25rem;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    &__input {
      padding: 1.25rem;
      background-color: #fff;
      border: 1px solid #e8e9ed;
      font-size: 1rem;
      flex: 1
    }

    &__button {
      appearence: none;
      padding: 1.125rem 2.8125rem;
      margin-left: 1.25rem;
      border: 0;
      border-radius: 0;
      cursor: pointer;
      text-align: center;
      font-size: 1.3rem;
      font-weight: 600;
      color: #fff;
      background: #00c4c9;

      &:hover {
        background: #006163;
      }
    }

    &__icon {
      width: 2.5rem;
      height: 2.5rem;
      margin-left: .9rem;
      cursor: pointer;
      color: #4f5566;

      &:hover {
        color: #00c4c9;
      }
      > svg {
        fill: currentColor;
      }
    }

    &__settings {
      max-width: 40rem;
      margin: 0 auto;
      padding: 1.25rem 0;
      display: flex;
      flex-direction: row;
      justify-content: center;

      .vdp-datepicker + .vdp-datepicker {
        margin-left: 1.25rem;
        flex: 1;
      }
    }
  }

  .Chart__container {
    border-radius: .25rem;
    background-color: #fff;
    box-shadow: 0 2px 16px 0 rgba(0,0,0,.3);
    padding: 1.25rem 2.5rem;
    margin: 3.125rem 0;
  }

  .Chart__title {
    color: #4f5566;
    margin-bottom: 2.5rem;
    font-weight: 600;
    font-size: 1rem;

    &>span {
      font-weight: 400;
      color: #00c4c9;
      font-size: 1rem;
      margin-left: 1.55rem;
    }
  }

  .sk-cube-grid {
    width: 40px;
    height: 40px;
    margin: 100px auto;
  }
  .sk-cube-grid .sk-cube {
    width: 33%;
    height: 33%;
    background-color: #00c4c9;
    float: left;
    -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
            animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
  }
  .sk-cube-grid .sk-cube1 {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }
  .sk-cube-grid .sk-cube2 {
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s; }
  .sk-cube-grid .sk-cube3 {
    -webkit-animation-delay: 0.4s;
            animation-delay: 0.4s; }
  .sk-cube-grid .sk-cube4 {
    -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s; }
  .sk-cube-grid .sk-cube5 {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }
  .sk-cube-grid .sk-cube6 {
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s; }
  .sk-cube-grid .sk-cube7 {
    -webkit-animation-delay: 0s;
            animation-delay: 0s; }
  .sk-cube-grid .sk-cube8 {
    -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s; }
  .sk-cube-grid .sk-cube9 {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }
  @-webkit-keyframes sk-cubeGridScaleDelay {
    0%, 70%, 100% {
      -webkit-transform: scale3D(1, 1, 1);
              transform: scale3D(1, 1, 1);
    } 35% {
      -webkit-transform: scale3D(0, 0, 1);
              transform: scale3D(0, 0, 1);
    }
  }
  @keyframes sk-cubeGridScaleDelay {
    0%, 70%, 100% {
      -webkit-transform: scale3D(1, 1, 1);
              transform: scale3D(1, 1, 1);
    } 35% {
      -webkit-transform: scale3D(0, 0, 1);
              transform: scale3D(0, 0, 1);
    }
  }
</style>
