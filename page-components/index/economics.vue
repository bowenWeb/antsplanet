<template>
  <div class="economics">
    <div class="title">
      Ants Planet Economic Model
    </div>
    <div class="sub-title text-main">
      View the document to learn about the Ants Planet  program
    </div>
    <div class="cards flex j-center">
      <div class="card" @click="skipToDocs">
        <img
          src="~/assets/images/e1.png"
          alt=""
        >
        <img
          src="~/assets/images/ehover1.png"
          alt=""
        >
        <div class="text-main">
          How to "Pledge"
        </div>
      </div>
      <div class="card" @click="skipToDocs">
        <img
          src="~/assets/images/e2.png"
          alt=""
        >
        <img
          src="~/assets/images/ehover2.png"
          alt=""
        >
        <div class="text-main">
          How to be Credible
        </div>
      </div>
      <div class="card" @click="skipToDocs">
        <img
          src="~/assets/images/e3.png"
          alt=""
        >
        <img
          src="~/assets/images/ehover3.png"
          alt=""
        >
        <div class="text-main">
          How to earn NPT
        </div>
      </div>
      <div class="card" @click="cryptocurrency">
        <img
          src="~/assets/images/e4.png"
          alt=""
        >
        <img
          src="~/assets/images/ehover4.png"
          alt=""
        >
        <div class="text-main">
          Usage of NPT
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Economics',
  methods: {
    skipToDocs () {
      console.log(1122)
      window.open('https://doc.antsplanet.io/AntsPlanetUserGuide.html')
    },
    cryptocurrency () {
      this.$router.push('./cryptocurrency')
    }
  }
}
</script>
<style lang="scss" scoped>
.economics {
  text-align: center;
  .title {
    font-size: 42dpx;
  }
  .sub-title {
    margin-top: 55dpx;
  }
  .cards {
    margin: 86dpx 312dpx 0;
    flex-wrap: wrap;
    & > div {
      height: 394dpx;
      min-width: 35%;
      background: #eae4e9;
      border-radius: 28dpx;
      padding: 80dpx 0 50dpx;
      cursor: pointer;
      &:hover {
        background: linear-gradient(90deg, #d441ff, #ff528f);
        img:nth-child(1) {
          display: inline-block;
        }
        img:nth-child(2) {
          display: none;
        }
        div {
          color: white;
        }
      }
      img {
        width: 118dpx;
        margin-bottom: 70dpx;
        &:nth-child(1) {
          display: none;
        }
      }
      &:nth-child(1) {
        margin: 0 60dpx 60dpx 0;
      }
      &:nth-child(3) {
        margin-right: 60dpx;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .title {
      font-size: 28rpx;
    }
    .sub-title {
      padding: 0 80rpx;
    }
    .cards {
      margin: 48rpx 50rpx 0;
      flex-wrap: wrap;
      justify-content: space-between;
      & > div {
        max-width: 306rpx;
        margin-right: 0!important;
        height: 238rpx;
        min-width: 40%;
        border-radius: 20rpx;
        padding: 20rpx;
        &:nth-child(1) {
          margin-bottom: 28rpx;
        }
        img {
          width: 77rpx;
        }
        div {
          font-size: 24rpx;
        }
        &:hover {
          box-shadow: -2px 6rpx 15rpx 0px rgba(19, 30, 47, 0.1);
        }
        .text-main{
          padding: 0 48rpx
        }
      }
    }
  }
  @media screen and (min-width: 1920px) {
  .title {
    font-size: 42px;
  }
  .sub-title {
    margin-top: 55px;
    font-size: 28px
  }
  .cards {
    margin: 86px 312px 0;
    flex-wrap: wrap;
    justify-content: center;
    & > div {
      height: 394px;
      min-width: 440px;
      max-width: 440px;
      background: #eae4e9;
      border-radius: 28px;
      padding: 108px 0 70px;
      cursor: pointer;
      .text-main{
        font-size: 28px
      }
      &:hover {
        background: linear-gradient(90deg, #d441ff, #ff528f);
        img:nth-child(1) {
          display: inline-block;
        }
        img:nth-child(2) {
          display: none;
        }
        div {
          color: white;
        }
      }
      img {
        width: 118px;
        margin-bottom: 70px;
        &:nth-child(1) {
          display: none;
        }
      }
      &:nth-child(1) {
        margin: 0 74px 97px 0;
      }
      &:nth-child(2) {
        margin-right: 74px;
      }
      &:nth-child(3) {
        margin-right: 74px;
      }
    }
  }
}
}
</style>
