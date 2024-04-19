<template>
  <div class="part">
    
    <div class="title">
      <img src="../icon/time.png" />
      <span >
        <a href="https://www.jiakaobaodian.com/mnks/kemu1/car.html" style="margin-left: 7px;">
          {{ title }}
        </a>
      </span>
    </div>

    <div class="item">
      <div class="inner-item" v-for="i in examlist" :key="i.name">
        <div class="content">
          <img :src="getIconUrl(i.icon)" class="icon" />
          <div class="text">
            <span >
              <a href="https://www.jiakaobaodian.com/mnks/kemu1/car.html" style="font-size: 15px">
                {{ i.name }}
              </a>
            </span>
            <div class="intext">
              {{ i.text }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <button class="blue-button">
      <a href="https://www.jiakaobaodian.com/mnks/exam/car-kemu3.html">
        <span class="blue-button-title">
        模拟考试
      </span>
      </a>
    </button>

  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { examlist } from "@/store/exam";
import { getIconUrl } from "@/utils";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.part {
  padding: 0 20px;
  width: 580px;
  border: 1px solid #e9e9e8;

  .blue-button {
    display: block;
    width: 300px;
    height: 46px;
    margin: 15px auto 30px;
    font-size: 18px;
    background-color: #37b5f8f7;
    border-radius: 5px;
    border: none;
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 0;
    width: 100%;
    height: 80px;
    font-size: 20px;
  }
  .part-title {
    padding-left: 10px;
  }
  .blue-button-title{
    color: rgb(255, 255, 255);
  }
 
  .item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-betwee;
    
    .inner-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 244px;
      height: 69px;
      line-height: 20px;
      margin: 0 10px 15px 10px;
      background-color: #fafafa;
    }

    .content {
      padding: 10px 0;
      .icon {
        padding-top: 6px;
        width: 35px;
      }
    }
    .text {
      display: inline-block;
      padding-left: 8px;
      color: rgb(0, 0, 0);
      .intext {
        padding-top: 5px;
        font-size: 14px;
        color: #918585;
      }
      .text:hover {
        color: rgb(58, 160, 244);
      }
    }
  }
  a {
    color: #1f1f1f;
    text-decoration: none;
  }
  a:hover {
      color: #37b5f8ff;
      text-decoration: none;
    }

}
</style>
