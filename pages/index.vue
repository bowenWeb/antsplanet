<template>
  <div class="container bg-main ">
    <Progress />
    <Link />
    <Economics />
    <Community />
  </div>
</template>

<script>
import Progress from '../page-components/index/progress'
import Link from '../page-components/index/link'
import Economics from '../page-components/index/economics'
import Community from '../page-components/index/community'
export default {
  components: {
    Progress,
    Link,
    Economics,
    Community
  }
}
</script>

<style lang='scss'>
.container {
  padding-top: 186dpx;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    padding-top: 90rpx;
    background: none
  }
  @media screen and (min-width: 1920px) {
    background-size: auto 320px;
  }
}

</style>
