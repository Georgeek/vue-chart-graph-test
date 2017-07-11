<template>
  <div class="Package">
    <h1 class="Package__title"> {{ packageName }} </h1>
    <div class="Package__info">
      <div class="Package__info-item">
        <span> {{ totalDownloads }} </span><span class="info-label"> Всего скачиваний </span>
      </div>
      <div class="Package__info-item">
        <span> {{ period }} </span><span class="info-label"> Указанный период </span>
      </div>
      <div class="Package__info-item">
        <span><a :href="packageLink">{{ packageName }}</a> на npm </span><span class="info-label"> Ссылка </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      packageName: {
        type: String
      },
      totalDownloads: {
        type: Number
      },
      period: {
        type: String
      }
    },
    computed: {
      packageLink() {
        return `https://www.npmjs.com/package/${this.packageName}`
      }
    }
  }
</script>

<style lang="scss">
  .Package {
    margin: 0 auto;
    padding: 1.25rem;
    background-color: #4f5566;
    border-radius: .25rem;
    box-shadow: 0 2px 16px 0 rgba(0,0,0, .3);
    color: #fff;
    text-align: center;
    max-width: 25rem;

    &__title {
      margin-top: 0;
      font-size: 1.8rem;
      color: #fff;
    }

    &__info {
      display: flex;
      flex-direction: column;

      &-item {
        margin: .3rem;
        display: flex;
        flex-direction: column;

        &>span:not(.info-label) {
          color: #00c4c9;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: .3rem;

          &>a {
            color: currentColor;
          }
        }

        .info-label {
          text-transform: uppercase;
          font-size: .8rem;
        }
      }
    }
  }
</style>
