<template>
  <div class="cryptocurrency bg-main">
    <img
      src="~/assets/images/cryptocurrency.png"
      alt=""
    >
    <div class="title">
      Pools
    </div>
    <div class="font-28">
      Hi, welcome to Ants Planet!
    </div>
    <div class="font-28 content-main">
      Ants Planet is a protocol that rewards token holders for Credible Behaviors. It builds a network of human weak ties through  Credible Behaviors, bridging communication and transactions amid people. You need to hold 0.25 FIL in your wallet, connect your wallet and enter the invitation address to join the protocol for staking. When the protocol reaches 500,000 participants, we will open the project entry portal. Participants with NPT will be able to vote for the cryptocurrency to be included in the Credit Program. The voted project will be required to put specified amounts of cryptocurrency into the pool, and then you can receive other cryptocurrencies by holding NPT.
    </div>
    <div class="progress">
      <div class="text-main">
        Progress
      </div>
      <div class="stripe bg-card">
        <div
          :style="{width:progress+'%'}"
          class="rate"
        />
        <div
          class="abs num font-28"
          :class="{big:progress>50}"
        >
          {{ num }} / {{ total }}
        </div>
      </div>
      <div class="white font-28 bg-gradient gray-filter" @click="showComingDialog">
        Provide Airdrop
      </div>
    </div>

    <Dialog
      :visible="dialogComing"
      :title="''"
      show-confirm
      :on-confirm="closeComingDialog"
      @close="dialogComing=false"
    >
      <div class="text-main text-center">
        Coming Soon
      </div>
    </Dialog>
  </div>
</template>
<script>
export default {
  name: 'Cryptocurrency',
  data () {
    return {
      progress: 0,
      num: 0,
      dialogComing: false,
      total: 500000
    }
  },
  async mounted () {
    try {
      const res = await this.$axios.$get('/api/project/info')
      const { data, code } = res
      if (code === 200) {
        const { total_count: num } = data
        this.num = num
        this.progress = Math.ceil(num / 10000)
      }
    } catch (e) {
      this.progress = 0
    }
  },
  methods: {
    showComingDialog () {
      if (this.num === this.total) {
        this.dialogComing = true
      }
    },
    closeComingDialog () {
      this.dialogComing = false
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/.el-dialog{
  .text-center{
    text-align: center;
  }
}
.cryptocurrency {
  padding: 170dpx 200dpx;
  img {
    width: calc(100vw - 400dpx);
    margin-bottom: 124dpx;
  }
  .title {
    font-size: 42dpx;
    margin-bottom: 100dpx;
  }
  & > div {
    line-height: 55dpx;
  }
  .progress {
    text-align: center;
    .text-main {
      margin: 93dpx 0 50dpx;
    }
    .stripe {
      height: 42dpx;
      border-radius: 21dpx;
      position: relative;
      overflow: hidden;
      div.rate {
        height: 100%;
        background: linear-gradient(
          135deg,
          #ff7ca8 25%,
          #f2407c 0,
          #f2407c 50%,
          #ff7ca8 0%,
          #ff7ca8 75%,
          #f2407c 0
        );
        background-size: 30px 30px;
        border-radius: 21dpx;
      }
      .num {
        top: 50%;
        left: 50%;
        color: #999;
        transform: translateX(-50%) translateY(-50%);
        &.big {
          color: white;
        }
      }
    }
    .white {
      height: 90dpx;
      display: inline-block;
      border-radius: 45dpx;
      padding: 0 122dpx;
      line-height: 90dpx;
      margin-top: 90dpx;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 115rpx 50rpx;
    img {
      width: calc(100vw - 100rpx);
      margin-bottom: 80rpx;
    }
    .title {
      text-align: left;
      font-size: 36rpx;
      font-weight: bold;
    }
    & > div {
      text-align: left;
      line-height: 40rpx;
    }
    .content-main {
      margin-top: 40rpx;
    }
    .progress {
      .stripe {
        height: 30rpx;
        border-radius: 15rpx;
        div {
          border-radius: 15rpx;
        }
      }
      .text-main {
        background: #eae4e9;
        display: inline-block;
        height: 42rpx;
        border-radius: 21rpx;
        padding: 0 12rpx;
      }
      .white {
        height: 64rpx;
        border-radius: 32rpx;
        line-height: 64rpx;
        display: block;
        margin: 48rpx 74rpx;
      }
    }
  }
  @media screen and (min-width: 1920px) {
    &>div{
      width: 1700px;
      margin: 0 auto
    }
    padding: 170px 42px;
    img {
      width: 1700px;
      display: block;
      margin: 0 auto 124px;
    }
    .title {
      font-size: 42px;
    }
    & > div {
      line-height: 55px;
      font-size: 28px
    }
    .progress {
      .text-main {
        margin: 93px 0 56px;
        font-size: 28px
      }
      .stripe {
        height: 42px;
        border-radius: 21px;
        div.rate {
          border-radius: 21px;
        }
        .num{
          font-size: 28px
        }
      }
      .white {
        height: 90px;
        border-radius: 45px;
        padding: 0 122px;
        line-height: 90px;
        margin-top: 90px;
        font-size: 28px
      }
    }
  }
}
</style>
