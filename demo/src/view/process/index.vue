<template>
  <Title :title="name[0]"></Title>
  <div class="body">
    <div class="desc">
      驾考宝典整合学车全流程，驾考宝典为用户提供全方位学车服务
    </div>
    <div class="container">
      <div class="box" v-for="(i, index) in showlist" :key="i.title">
        <div class="item">
          <div
            class="part"
            @mouseenter="changeindex = index"
            @mouseleave="changeindex = -1"
          >
            <a href="https://www.jiakaobaodian.com/mnks/kemu2/car.html">
              <img
                :src="
                  changeindex === index
                    ? getIconUrl(i.Icon)
                    : getIconUrl(i.icon)
                "
              />
              <div :class="changeindex != index ? 'title1' : 'title2'">
                {{ i.title }}
              </div>
            </a>

          </div>
          <p class="p">{{ i.desc }}</p>
        </div>
      </div>
    </div>
  </div>

  <!--宝典荣耀-->
  <Title :title="name[1]"></Title>
  <div class="body">
    <div class="desc">
      强大的驾考功能，优秀的用户体验，我们的愿景是学车无忧，轻松拿本
    </div>
    <div class="company">
      <img src="@/assets/home-dynamic.png" />
    </div>
  </div>
  <div class="block"></div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Title } from "../../component/Title/Title";
import { showlist } from "@/store/show";
import { getIconUrl } from "@/utils";

const name = ["学车流程", "宝典荣耀"];
//截取图片地址
const changeindex = ref<number>(0);
</script>

<style scoped>
.body {
  width: 1200px;
  height: 284px;
  margin: 0 auto;
  position: relative;

  .company {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 70px;
  }

  .desc {
    font-size: 16px;
    color: #666;
    text-align: center;
    margin-bottom: 20px;
  }
  .container {
    display: flex;
    justify-content: space-between;

    .box {
      display: flex;
      flex-direction: column;
    }

    .item {
      display: flex;
      flex-direction: column;
    }
    .title1 {
      font-size: 24px;
      text-align: center;
      color: #333;
      margin-top: 22px;
    }
    .title2 {
      font-size: 24px;
      text-align: center;
      color: #60a7f3;
      margin-top: 22px;
    }
    .part {
      color: #333;
    }
    .p {
      text-align: center;
      font-size: 14px;
      color: #999;
      margin-top: 10px;
    }
  }
}
.block {
  width: 1200px;
  height: 125px;
}
a {
  color: #d8d8d8;
  text-decoration: none;
}
</style>
