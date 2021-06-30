<template>
  <div class="about bg-main">
    <img
      src="~/assets/images/about.png"
      alt=""
    >
    <div class="title">
      About Ants Network Labs
    </div>
    <div class="font-28 content-main">
      It has been 12 years since the "The 2009 DARPA Red Balloon Challenge". And we were also very impressed the surprising efficiency by the "Recursive Motivation Model” used by the Massachusetts Institute of Technology (MIT) team to aggregate bits of information across millions of people in just 9 hours. Inspiring by the significant result, the team (Ants Network Labs or Labs for short) has been insisting on the study about how to adopt sociological theory integrated with blockchain, and the integration will not only be adopted in study on social mobilization.
    </div>
    <div class="font-28 content-main">
      Ants Network Labs will design 10 chapters in the next 10 years to experiment and build digital society models and NPT token economic system from different dimensions. In future, each chapter is independent as an experiment but also related to solve problems in sociology to achieve the goal that to build an efficient global network for digital society.
    </div>
  </div>
</template>
<style lang="scss" scoped>
.about {
  padding: 170dpx 200dpx;
  img {
    width: calc(100vw - 400dpx);
    margin:0 0 124dpx;
  }
  .title {
    font-size: 42dpx;
    margin-bottom: 60dpx;
  }
  .content-main {
    margin-top: 20dpx;
  }
  div {
    line-height: 55dpx;
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
    div {
      text-align: left;
      line-height: 40rpx;
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
