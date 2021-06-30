<template>
  <div class="progress">
    <div class="main">
      <div class="white-paper pointer">
        <a class="bg-black white font-28" href="./AntsPlanetWhitePaper.pdf" target="_blank" rel="noopener noreferrer">
          White Paper
          <img
            src="~/assets/images/right.png"
            alt=""
          >
        </a>
      </div>
      <div class="shape">
        <img
          class="img"
          src="~/assets/images/shape.png"
        >
      </div>
      <div class="title">
        An Incentive Credit Agreement
      </div>
      <div class="sub-title grey font-28">
        for the aggregation of millions of users and hundreds of public chain DApps
      </div>
      <div class="btns font-28 flex j-start">
        <div class="bg-card grey">
          <a
            :href="$config.dappLink"
            class="grey"
            target="_blank"
          >
            Join Now
          </a>
        </div>
        <div class="bg-card">
          <a
            href="https://doc.antsplanet.io/ "
            class="grey"
            target="_blank"
          >Docs</a>
        </div>
      </div>
      <div class="flex status j-center">
        <div class="users">
          <div>{{ num }}</div>
          <div class="grey font-28">
            Participants
          </div>
        </div>
        <div class="ants">
          <div>{{ unit }} NPT</div>
          <div class="grey font-28">
            Earned daily rewards
          </div>
        </div>
      </div>
    </div>
    <div class="divider" />
  </div>
</template>
<script>
export default {
  name: 'Progress',
  data () {
    return {
      num: 0,
      unit: 0
    }
  },
  async mounted () {
    try {
      const res = await this.$axios.$get('/api/project/info')
      const { data, code } = res
      if (code === 200) {
        const { reward_day: unit, total_count: num } = data
        this.unit = unit
        this.num = num
      }
    } catch (e) {
      this.unit = 0
      this.num = 0
    }
  },
  methods: {
    toPDF () {
      this.$router.push({ path: '/pdf' })
    }
  }
}
</script>
<style lang="scss" scoped>
.progress {
  .main {
    margin: 0 200dpx 96dpx;
    text-align: center;
    background-image: url('~assets/images/main.png');
    background-size: auto 70%;
    background-repeat: no-repeat;
    background-position: right 60dpx;
    position: relative;
  }
  .shape{
    position: absolute;
    left: -100dpx;
    top: 70dpx;
    width: 60dpx;
    text-align: left;
    img{
      width: 30dpx;
    }
  }
  .white-paper {
    text-align: right;
    a {
      padding: 0 20dpx;
      height: 46dpx;
      display: inline-block;
      line-height: 46dpx;
      border-radius: 23dpx;
      text-decoration: none;
      img {
        width: 15dpx;
      }
    }
  }
  .title {
    font-size: 98dpx;
    font-weight: bold;
    margin-bottom: 60dpx;
    text-align: left;
    width: 60%;
  }
  .sub-title {
    font-size: 42dpx;
    text-align: left;
    width: 50%;
  }
  .btns {
    margin-top: 76dpx;
    div {
      height: 66dpx;
      line-height: 66dpx;
      padding: 0 28dpx;
      border-radius: 33dpx;
      cursor: pointer;
    }
    div:first-child {
      margin-right: 90dpx;
    }
    div:hover {
      background: linear-gradient(90deg, #d441ff, #ff528f);
      a {
        color: white;
      }
    }
  }
  .status {
    margin-top: 150dpx;
    & > div {
      &:nth-child(1) {
        margin-right: 210dpx;
      }
      div:nth-child(1) {
        font-size: 70dpx;
        font-weight: 300;
        margin-bottom: 48dpx;
      }
      div:nth-child(2) {
        text-align: center;
      }
    }
  }
  .divider {
    height: 1px;
    background: #eae4e9;
    margin: 0 42dpx;
  }
  @media screen and (max-width: 768px) {
    .shape{
      display: none;
    }
    .white-paper {
      display: none;
    }
    background-image: url('~assets/images/banner.png');
    background-repeat: no-repeat;
    background-size: 100% 424rpx;
    .main {
      overflow: hidden;
      background: none;
      width: 100%;
      padding-left: 0;
      text-align: center;
      margin: 0 0 70rpx;
      .title {
        margin: 62rpx 0 30rpx;
        font-size: 54rpx;
        color: white;
        text-align: center;
        width: 100%;
        padding: 0 20rpx;
        box-sizing: border-box;
      }
      .sub-title {
        font-size: 24rpx;
        color: white;
        margin: 0;
        text-align: center;
        width: 100%;
        padding:0 20rpx;
        box-sizing: border-box;
      }
      .btns {
        justify-content: center;
        padding: 0 36rpx;
        margin-top: 40rpx;
        div {
          padding: 0 32rpx;
          height: 64rpx;
          border-radius: 32rpx;
          line-height: 64rpx;
          &:first-child {
            margin-right: 68rpx;
          }
          background: white;
          flex: 1;
          color: #f84fa0;
          a {
            color: #f84fa0;
          }
        }
      }
      .status {
        margin-top: 120rpx;
        justify-content: center;
        & > div > div:nth-child(1) {
          font-size: 50rpx;
        }
      }
    }
  }
  @media screen and (min-width: 1920px) {
    .main {
      width: 1700px;
      margin: 0 auto 96px;
      background-position: right 60px;
    }
    .white-paper {
      span {
        padding: 0 20px;
        height: 46px;
        line-height: 46px;
        font-size: 28px;
        border-radius: 23px;
        img {
          width: 15px;
        }
      }
    }
    .shape{
      left: -80px;
      top: 135px;
    }
    .title {
      font-size: 98px;
      margin: 60px 0;
    }
    .sub-title {
      font-size: 42px;
    }
    .btns {
      margin-top: 76px;
      div {
        height: 66px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 28px;
        border-radius: 33px;
        a{
          font-size: 28px
        }
      }
      div:first-child {
        margin-right: 90px;
      }
    }
    .status {
      margin-top: 150px;
      & > div {
        &:nth-child(1) {
          margin-right: 210px;
        }
        div:nth-child(1) {
          font-size: 70px;
          margin-bottom: 48px;
        }
      }
    }
    .divider {
      height: 1px;
      margin: 0 42px;
    }
  }
}
</style>
