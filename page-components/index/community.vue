<template>
  <div class="community">
    <div class="title">
      Globalized community
    </div>
    <div class="sub-title text-main">
      Learn more about Ants Planet, chat with the team and others in the community, and post your suggestions for Ants Planet’s development
    </div>
    <div class="contacts flex bg-card">
      <a class="link-a" href="https://discord.gg/DHSqwEV8zT" target="_blank">
        <img
          src="~/assets/images/discord.png"
          alt=""
        >
        <img
          src="~/assets/images/discord-d.png"
          alt=""
        >
        <span>Discord</span>
      </a>
      <a class="link-a" href="https://www.reddit.com/user/ANTSPlanet/" target="_blank">
        <img
          src="~/assets/images/reddit.png"
          alt=""
        >
        <img
          src="~/assets/images/reddit-d.png"
          alt=""
        >
        <span>Reddit</span>
      </a>
      <a class="link-a" href="https://antsplanet.medium.com/" target="_blank">
        <img
          src="~/assets/images/medium.png"
          alt=""
        >
        <img
          src="~/assets/images/medium-d.png"
          alt=""
        >
        <span>Medium</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Community'
}
</script>
<style lang="scss" scoped>
.community {
  margin: 164dpx 0 110dpx;
  text-align: center;
  .title {
    font-size: 42dpx;
  }
  .sub-title {
    margin: 60dpx 420dpx 80dpx;
  }
  .contacts {
    margin: 80dpx 200dpx 0;
    border-radius: 60dpx;
    & > .link-a {
      height: 120dpx;
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      border-radius: 60dpx;
      &:hover {
        background: white;
        box-shadow: -3dpx 8dpx 21dpx 0px rgba(19, 30, 47, 0.1);
        span {
          color: black;
        }
        img {
          width: 58dpx;
          &:nth-child(1) {
            display: inline-block;
          }
          &:nth-child(2) {
            display: none;
          }
        }
      }
      img {
        width: 58dpx;
        margin-right: 38dpx;
        &:nth-child(1) {
          display: none;
        }
      }
      span {
        font-size: 28dpx;
        color: #7d7d7d;
      }
    }
  }
  @media screen and (max-width: 768px) {
    margin: 56rpx 50rpx 50rpx;
    .title {
      font-size: 28rpx;
    }
    .sub-title {
      margin: 20rpx 50rpx 45rpx;
    }
    .contacts {
      margin: 0;
      height: 86rpx;
      border-radius: 43rpx;
      & > .link-a {
        height: 86rpx;
        border-radius: 43rpx;
        img {
          width: 40rpx;
        }
        span {
          font-size: 24rpx;
        }
      }
      &:hover {
        img {
          width: 40rpx !important;
        }
      }
    }
  }
  @media screen and (min-width: 1920px) {
    .title {
      font-size: 42px;
    }
    .sub-title {
      margin: 60px 420px 80px;
      font-size: 28px;
    }
    .contacts {
      margin: 80px auto;
      width: 1700px;
      border-radius: 60px;
      & > .link-a {
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        border-radius: 60px;
        &:hover {
          background: white;
          box-shadow: -3px 8px 21px 0px rgba(19, 30, 47, 0.1);
          span {
            color: black;
          }
          img {
            width: 58px;
            &:nth-child(1) {
              display: inline-block;
            }
            &:nth-child(2) {
              display: none;
            }
          }
        }
        img {
          width: 58px;
          margin-right: 38px;
          &:nth-child(1) {
            display: none;
          }
        }
        span {
          font-size: 28px;
          color: #7d7d7d;
        }
      }
    }
  }
}
</style>
