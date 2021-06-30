<template>
  <div class="footer font-20 flex a-center bg-card grey">
    <span>@ 2021 Ants Planet</span>
    <nuxt-link
      to="about"
      class="grey"
    >
      About Ants Network Labs
    </nuxt-link>
    <nuxt-link
      to="disclaimer"
      class="grey"
    >
      Disclaimers
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style lang="scss" scoped>
.footer {
  padding: 0 142dpx;
  height: 124dpx;
  margin-top: auto;
  a:last-child {
    margin-left: 108dpx;
  }
  a:nth-child(2) {
    margin-left: auto;
  }
  @media screen and (max-width: 768px) {
    height: 98rpx;
    padding: 0 28rpx;
    justify-content: space-between;
    a{
      margin: 0!important;
      font-size: 24rpx;
    }
    span{
      font-size: 24rpx;
    }
  }
  @media screen and (min-width: 1920px) {
    padding: 0 142px;
    height: 124px;
    a,span {
      font-size: 28px;
    }
  }
}
</style>
