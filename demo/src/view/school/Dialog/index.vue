<script setup lang="ts">
import Input from "@/component/Input.vue";
import { Ref, inject } from "vue";

let show = inject<Ref<boolean>>("isshow");

const close = () => {
  show!.value = false;
};
</script>

<template>
  <div class="cover" v-if="show">
    <div class="box">
      <div class="top">
        <h2 class="head">免 费 咨 询</h2>
        <p class="desc">留下您的联系方式，不久后会收到来电</p>
        <img src="@/icon/close.jpg" class="img" @click="close" />
      </div>
      <Input :placeholder="'请填写你的姓名'" :label="'姓名'" :width="'400'" />
      <Input :placeholder="'请填写你的手机号'" :label="'手机'" :width="'400'" />
      <div class="input">
        <Input
          :placeholder="'请填写短信验证码'"
          :label="'验证'"
          :width="'270'"
        />
        <button class="btn1">短信码验证</button>
      </div>
      <div class="input2">
        <div class="name">驾照</div>
        <select class="select">
          <option>C1 小型汽车</option>
          <option>C2 小型自动档汽车</option>
          <option>A1 大型客车</option>
          <option>A2 牵引车</option>
          <option>A3 城市公交车</option>
          <option>B2 大型货车</option>
          <option>C6 牵引牵引挂车</option>
        </select>
      </div>
      <Input :placeholder="'所在位置'" :label="'位置'" :width="'400'" />
      <button class="btn2" @click="show = false">提交</button>
      <div class="agree">
        <input type="checkbox" class="checkbox" />
        <span>同意 《隐私政策》 和 《个人信息保护声明》</span>
      </div>
    </div>
  </div>
</template>



<style scoped>
.cover {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 10;
  .box {
    position: relative;
    margin: 0 auto;
    width: 500px;
    background-color: #ffffff;
    border-radius: 8px;
    .top {
      text-align: center;
    }
    .img {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 19px;
      height: 19px;
    }
    .head {
      font-size: 20px;
      color: #333;
      margin-top: 24px;
      margin-bottom: 0;
    }
    .desc {
      color: #999;
      font-size: 14px;
      margin-top: 5px;
      margin-bottom: 20px;
    }
    .input {
      display: flex;
    }
    .input2 {
      display: flex;
      margin-bottom: 18px;
      margin-top: 2px;
      .name {
        margin-left: 19px;
        margin-top: 12px;
        color: #333;
        font-size: 16px;
        text-align: center;
      }
      .select {
        display: inline-block;
        width: 406px;
        height: 52px;
        font-size: 16px;
        margin-left: 19px;
        border: none;
        border-radius: 4px;
        border: 1px solid #e9e9e9;
      }
    }
  }

  .btn1 {
    width: 120px;
    height: 50px;
    border: none;
    border-radius: 4px;
    margin-left: 10px;
    background-color: #04a5ff;
    color: #fff;
    font-size: 16px;
  }
  .btn2 {
    margin-left: 5%;
    width: 90%;
    height: 50px;
    font-size: 18px;
    background-color: #04a5ff;
    border: none;
    margin-top: 10px;
    color: #fff;
    border-radius: 4px;
  }
  .agree {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15px;
    margin-top: 30px;
    text-align: center;
    margin-bottom: 40px;
    .checkbox {
      margin-right: 5px;
      margin-top: 3px;
      width: 15px;
      height: 15px;
    }
  }
}
</style>

