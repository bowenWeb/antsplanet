<template>
  <div class="link">
    <div class="title">
      A credit tool to connect public chains and DApps
    </div>
    <div class="sub-title text-main">
      We build advanced open source applications to support the  Ants Planet protocol and contribute to human sociology
    </div>
    <div class="flex cards">
      <div>
        <img
          src="~assets/images/link-1.png"
          alt=""
        >
        <div>
          Helping good cryptocurrencies to staking
        </div>
      </div>
      <div>
        <img
          src="~assets/images/link-2.png"
          alt=""
        >
        <div>
          Incentives to develop user's Credible Behavior
        </div>
      </div>
      <div>
        <img
          src="~assets/images/link-3.png"
          alt=""
        >
        <div>
          Connecting cryptocurrency and data storage
        </div>
      </div>
      <div>
        <img
          src="~assets/images/link-4.png"
          alt=""
        >
        <div>
          Solving the credit problem amid cross-chains
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Link'
}
</script>
<style lang="scss" scoped>
.link {
  text-align: center;
  padding-bottom: 175dpx;
  .title {
    margin: 93dpx 0 50dpx;
    font-size: 42dpx;
  }
  .cards {
    margin: 80dpx 200dpx 0;
    & > div {
      margin-right: 40dpx;
      padding: 66dpx 30dpx 52dpx;
      flex: 1;
      border-radius: 28dpx;
      background: #eae4e9;
      &:hover {
        background: white;
        div {
          color: black;
        }
      }
      img {
        width: 94dpx;
      }
      div {
        font-size: 28dpx;
        margin-top: 50dpx;
        color: #999;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 55rpx;
    .title {
      margin-top: 62rpx;
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
        margin-right: 0;
        height: 238rpx;
        min-width: 40%;
        border-radius: 20rpx;

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
      }
    }
  }
  @media screen and (min-width: 1920px) {
    padding-bottom: 176px;
    .title {
      margin: 93px 0 50px;
      font-size: 42px;
    }
    .sub-title{
      font-size: 28px
    }
    .cards {
      margin: 80px 42px 0;
      justify-content: center;
      & > div {
        margin-right: 40px;
        padding: 66px 78px 52px;
        border-radius: 28px;
        max-width: 430px;
        img {
          width: 94px;
        }
        div {
          font-size: 28px;
          margin-top: 50px;
        }
      }
    }
  }
}
</style>
