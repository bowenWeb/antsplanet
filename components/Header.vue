<template>
  <div class="header  abs">
    <div class="pc flex j-between a-center">
      <nuxt-link to="/">
        <img
          v-if="$route.path==='/'"
          class="logo pointer"
          src="~/assets/images/logo.png"
        >
        <img
          v-else
          class="logo-color pointer"
          src="~/assets/images/logo-color.png"
        >
      </nuxt-link>
      <div class="nav-container font-20 flex a-center">
        <nuxt-link to="cryptocurrency">
          Pools
        </nuxt-link>
        <a href="https://doc.antsplanet.io/ " target="_blank">Docs</a>
        <a
          href="https://github.com/Antslabs/Ants-Planet"
          target="_blank"
        >
          Github
        </a>
        <el-dropdown>
          <span class="font-20 black pointer">Community</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <a
                href="https://discord.gg/DHSqwEV8zT"
                target="_blank"
              >Discord</a>
            </el-dropdown-item>
            <el-dropdown-item>
              <a href="https://www.reddit.com/user/ANTSPlanet/" target="_blank">Reddit</a>
            </el-dropdown-item>
            <el-dropdown-item>
              <a
                href="https://antsplanet.medium.com/"
                target="_blank"
              >Medium</a>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <a
          :href="$config.dappLink"
          target="_blank"
          class="enter-page"
        >
          <div class="white font-20 bg-gradient radius-28 pointer ">
            <img
              src="~/assets/images/start.png"
              alt=""
            >
            Application
          </div>
        </a>
      </div>
    </div>
    <div class="mobile flex j-between a-center">
      <img
        src="~/assets/images/more.png"
        alt=""
        class="more"
        @click.stop="showMbNav=true"
      >
      <nuxt-link to="/">
        <img
          src="~/assets/images/logo-color.png"
          alt=""
          class="logo"
        >
      </nuxt-link>
      <div class="bg-gradient enter ">
        <a
          :href="$config.dappLink"
          class="white"
        >
          Application
        </a>
      </div>
      <el-drawer
        :visible="showMbNav"
        direction="ltr"
        :append-to-body="true"
      >
        <div @click.stop="">
          <el-menu @select="handleSelect">
            <el-menu-item index="0">
              <nuxt-link to="/cryptocurrency">
                Pools
              </nuxt-link>
            </el-menu-item>
            <el-menu-item index="1">
              <a href="https://doc.antsplanet.io/ " target="_blank">Docs</a>
            </el-menu-item>
            <el-menu-item index="2">
              <a
                href="https://github.com/Antslabs/Ants-Planet"
                target="_blank"
              >Github</a>
            </el-menu-item>
            <el-submenu index="4">
              <template slot="title">
                Community
              </template>
              <el-menu-item index="5">
                <a
                  href="https://discord.gg/DHSqwEV8zT"
                  target="_blank"
                >Discord</a>
              </el-menu-item>
              <el-menu-item index="6">
                <a href="https://www.reddit.com/user/ANTSPlanet/" target="_blank">Reddit</a>
              </el-menu-item>
              <el-menu-item index="7">
                <a
                  href="https://antsplanet.medium.com/"
                  target="_blank"
                >Medium</a>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </el-drawer>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Header',
  data () {
    return {
      showConnect: false,
      showWallet: false,
      showMbNav: false
    }
  },
  computed: {
    ...mapState(['connected'])
  },
  mounted () {
    document.addEventListener('click', () => {
      this.showMbNav = false
    })
  },
  methods: {
    ...mapMutations(['switch']),
    handleSelect (index) {
      this.showMbNav = false
    },
    connectWallet () {
      this.switch(true)
      this.showConnect = false
    },
    disConnect () {
      this.showWallet = false
      this.switch(false)
    },
    copy () {
      this.$message({
        message: '复制成功',
        type: 'success'
      })
      this.$copyText('xnjsnxjxsnsxjn')
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  top: 0;
  left: 0;
  .pc{
    padding: 20dpx 42dpx 0;
    position: relative;
    .logo {
      position: absolute;
      top: 0;
      left: 0;
      width: 240dpx;
    }
    .logo-color{
      position: absolute;
      top: 20dpx;
      left: 42dpx;
      width: 200dpx;
    }
  }
  .mobile {
    display: none;
  }

  .nav-container {
    a:not(.enter-page),
    div {
      margin-left: 88dpx;
    }

    div {
      height: 56dpx;
      display: inline-flex;
      align-items: center;
      padding: 0 18dpx;
    }
  }
  .connect {
    & > div:first-child {
      height: 56dpx;
      border-radius: 28dpx;
      padding: 0 24dpx;
      line-height: 56dpx;
    }
    .balance {
      padding: 0 40dpx 0 20dpx;
    }
    .balance,
    .connected {
      height: 56dpx;
      border-radius: 28dpx;
      line-height: 56dpx;
    }
    .connected {
      padding: 0 14dpx;
      margin-left: -30dpx;
    }
    div.doc {
      margin-left: 30dpx;
    }
  }
  .enter-page {
    img {
      width: 30dpx;
    }
  }
}
.connect-wallet {
  border: 1px solid #999;
  color: black;
  padding: 32dpx;
  .link {
    width: 52dpx;
    height: 52dpx;
    border-radius: 50%;
    img {
      width: 40dpx;
    }
  }
}
.account {
  .linked {
    height: 70px;
    background: #fedced;
    border-radius: 28px;
    color: #f74fa5;
    padding: 0 28dpx;
  }
  .address {
    font-size: 36dpx;
    color: black;
  }
  .btns {
    margin-top: 40dpx;
    img {
      width: 36dpx;
      margin-right: 20dpx;
    }
    div,
    a {
      display: flex;
      cursor: pointer;
      color: #999;
      align-items: center;
    }
  }
}

@media screen and (max-width: 768px) {
  .header {
    background: white;
    height: 90rpx;
    padding: 0 25rpx;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    .pc {
      display: none;
    }
    .mobile {
      height: 100%;
      display: flex;
      justify-content: center;
      position: relative;
      .more {
        width: 35rpx;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
      .logo {
        width: 240rpx;
      }
      .enter {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 45rpx;
        border-radius: 22rpx;
        line-height: 45rpx;
        font-size: 26rpx;
        padding: 0 30rpx;
      }
      .mobile-nav {
        top: 90rpx;
        left: -25rpx;
        width: 100vw;
        z-index: 1000;
        text-align: center;
        color: white;
        height: 0;
        overflow: hidden;
        transition: all 0.2s;
        & > div {
          height: 100rpx;
          line-height: 100rpx;
          font-size: 26rpx;
        }
        &.open {
          height: 400rpx;
        }
      }
    }
  }
}
@media screen and (min-width: 1920px) {
  .header {
    .logo {
      width: 200px;
    }
    .nav-container {
      a:not(.enter-page),
      div {
        margin-left: 88px;
        font-size: 28px
      }
      span{
        font-size: 28px
      }

      div {
        height: 56px;
        padding: 0 18px;
      }
    }
    .connect {
      & > div:first-child {
        height: 56px;
        border-radius: 28px;
        padding: 0 24px;
        line-height: 56px;
      }
      .balance {
        padding: 0 40px 0 20px;
      }
      .balance,
      .connected {
        height: 56px;
        border-radius: 28px;
        line-height: 56px;
      }
      .connected {
        padding: 0 14px;
        margin-left: -30px;
      }
      div.doc {
        margin-left: 70px;
      }
    }
    .enter-page {
      img {
        width: 30px;
      }
    }
  }
}
</style>
