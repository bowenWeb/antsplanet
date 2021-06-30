<template>
  <div class="disclaimer bg-main">
    <img src="~/assets/images/about.png" alt="">
    <div class="title">
      Ants Planet protocol disclaimer
    </div>
    <div class="font-28 content-main">
      Ants Planet is a protocol that rewards token holders for Credible Behavior. It builds a network of human weak ties through Credible Behavior, bridging communication and transaction amid people. Ants Planet has released V1, each of which is made up of free, shared, open-source or source-available software including a set of smart contracts that are deployed on the BSC Blockchain. Your use of the Ants Planet protocol involves various risks, including, but not limited to, losses while digital assets are being supplied to the Ants Planet protocol and losses due to the fluctuation of prices of tokens in a trading pair or liquidity pool. Before using the Ants Planet protocol, you should review the relevant documentation to make sure you understand how the Ants Planet works. Additionally, just as you can access email protocols such as SMTP through multiple email clients, you can access the Ants Planet through dozens of webs or mobile interfaces. You are responsible for doing your own diligence on those interfaces to understand the fees and risks they present.
    </div>
    <div class="font-28 content-main ">
      As described in the Ants Planet licenses, the Ants Planet is provided ‘AS IS’, at your own risk, and without warranties of any kind. Although Ants Planet Labs developed much of the initial code for the Ants Planet, it does not provide, own, or control the Ants Planet, which is run by smart contracts deployed on the BSC blockchain. Upgrades and modifications to the protocol are managed in a community-driven way by holders of the UNI governance token. No developer or entity involved in creating the Ants Planet will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of, the Ants Planet, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
    </div>
  </div>
</template>
<style lang="scss" scoped>
.disclaimer{
  padding: 170dpx 200dpx;

  img{
    width: calc(100vw - 400dpx);
    margin-bottom: 104dpx
  }
    .content-main {
      margin-top: 20dpx;
    }
  .title{
    font-size: 42dpx;
    margin-bottom: 100dpx;
  }
  div{
    line-height: 55dpx
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
    div{
      text-align: left;
      line-height: 40rpx
    }
    .content-main {
      margin-top: 40rpx;
    }
  }
  @media screen and (min-width: 1920px) {
    & > div {
      width: 1700px;
      margin: 0 auto;
    }
    padding: 170px 42px;
    img {
      width: 1700px;
      display: block;
      margin: 0 auto 124px;
    }
    .title {
      font-size: 42px;
      margin-bottom: 100px;
    }
    div {
      line-height: 55px;
      font-size: 28px
    }
  }
}
</style>
