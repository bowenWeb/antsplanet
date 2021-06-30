<template>
  <div>
    <Header />
    <h1 v-if="error.statusCode === 404">
      Page not found
    </h1>
    <h1 v-else>
      An error occurred
    </h1>
    <div class="top-30 flex j-center back">
      <NuxtLink
        to="/"
        class="bg-gradient white"
      >
        Home page
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: {
    error: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
<style lang="scss" scoped>
h1 {
  margin-top: 300dpx;
  text-align: center;
}
.back {
  a {
    display: inline-block;
    height: 50dpx;
    border-radius: 25dpx;
    padding: 0 20dpx;
    line-height: 50dpx;
  }
  @media screen and (max-width: 768px) {
    margin-top: 40rpx;
    a {
      height: 50rpx;
      border-radius: 25rpx;
      padding: 0 20rpx;
      line-height: 50rpx;
    }
  }
}
</style>
