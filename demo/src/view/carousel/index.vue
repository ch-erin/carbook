<template>
  <div class="nav">
    <div class="list">
      <div class="item" v-for="i in navlist" :key="i.name">
        {{ i.name }}
        <span class="triangle" v-if="i.item"></span>
        <!--展示子菜单-->
        <div class="seconditem" v-if="i.item">
          <div v-for="j in i.item">
            <div class="seconditemborder">
              <a href="https://www.jiakaobaodian.com/">
                {{ j }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="body">
    <!--轮播图-->
    <div class="carousel">
      <n-carousel autoplay dot-type="dot" :interval="Number(carouselInterval)">
        <img src="../../assets/1.png" alt="img" />
        <img src="../../assets/2.png" alt="img" />
        <img src="../../assets/3.png" alt="img" />
        <img src="../../assets/4.png" alt="img" />
      </n-carousel>
    </div>
    <!--悬浮窗口-->
    <div class="overlay-box">
      <div class="box-title">学车流程</div>
      <div class="box-content" v-for="i in windowlist" :key="i.name">
        <div>
          <img :src="getIconUrl(i.icon)" class="box-icon" />
        </div>
        <div class="box-inner">
          <span class="name">
            <a href="https://www.jiakaobaodian.com/mnks/kemu1/car.html">
              {{ i.name }}
            </a>
          </span>
          <span class="desc">{{ i.desc }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { navlist, windowlist } from "@/store/carousel";
import { getIconUrl } from "@/utils";

// 轮播间隔
const carouselInterval = 4000;
</script>

<style scoped lang="css">
.body {
  position: relative;
  .carousel {
    position: relative;
    z-index: 0;
    width: 100%;
    height: 380px;
    cursor: pointer;
  }
  .overlay-box {
    z-index: 2;
    position: absolute;
    top: 20px;
    left: 156px;
    width: 285px;
    height: 89%;
    background-color: rgba(255, 253, 253, 0.8);

    .box-title {
      margin: 0 auto;
      width: 80%;
      margin-top: 2px;
      text-align: center;
      font-weight: normal;
      font-size: 20px;
      line-height: 49px;
      border-bottom: 1px #d8c6c690 dotted;
    }
    .box-content {
      display: flex;
      margin-top: 3px;
      .box-icon {
        margin-left: 26px;
        margin-top: 8px;
      }
      .box-inner {
        margin: auto 0;
        display: flex;
        height: 69px;
        flex-direction: column;
        .name {
          margin-top: 5px;
          margin-left: 6px;
          font-size: 16px;
        }
        .desc {
          padding-top: -2px;
          margin-left: 6px;
          font-size: 14px;
          color: #666;
        }
      }
    }
  }
  a {
    color: #37b5f8;
    text-decoration: none;
  }
}

.nav {
  background-color: #2aacf1;
  width: 100%;
  height: 52px;
  cursor: pointer;

  .list {
    display: flex;
    flex-direction: row;
    position: relative;
    width: 1200px;
    height: 100%;
    margin: 0 auto;

    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 128px;
      font-size: 16px;
      color: #fff;
      height: 100%;

      .seconditem {
        position: absolute;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 120px;
        font-size: 16px;
        color: #070707;
        top: 52px;
        display: none;
        text-align: center;
        background-color: #ffffff;

        .seconditemborder {
          line-height: 39px;
          border-bottom: 1px solid #f6f6f6;

          a:hover {
            color: #54c0f9;
          }
          a {
            text-decoration: none;
            color: #666;
          }
        }
      }
    }

    .item:hover {
      background-color: #54c0f9;
    }

    .active {
      background-color: #258fc7 !important;
    }

    .item:hover .seconditem {
      display: block;
    }

    .triangle {
      position: relative;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid white;
      display: inline-block;
      margin-left: 5px;
      margin-top: 2px;
    }
  }
}
</style>
