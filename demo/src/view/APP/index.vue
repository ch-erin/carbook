<template>
  <div class="body">
    <div class="part">
      <div class="img1">
        <div class="title">教练宝典app</div>
        <img src="@/assets/coach.png" />
        <img src="@/assets/coach-code.png" class="up1 hidden" />
      </div>
    </div>
    <div class="part">
      <div class="img2">
        <div class="title">驾考宝典app</div>
        <img src="@/assets/car.png" />
        <img src="@/assets/ercode1.png" class="up2 hidden" />
      </div>
    </div>
    <div class="part">
      <div class="img3">
        <div class="title">学车宝典app</div>
        <img src="@/assets/buy-car.png" />
        <img src="@/assets/buy-code.png" class="up3 hidden" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.body {
  display: flex;
  width: 100%;
  height: 560px;
  overflow: hidden;
  background-color: #f5f5f5;

  .hidden {
    opacity: 0;
  }
  .part {
    justify-content: center;
    flex: 1;
    display: flex;
    margin: 0 auto;

    .title {
      font-size: 20px;
      text-align: center;
      color: #333;
      margin-top: 10px;
    }
    .img1 {
      position: relative;
      justify-content: center;
      left: 80px;
      top: 110px;
      width: 300px;
      height: 500px;
      transition: all 0.8s ease;

      .up1 {
        position: absolute;
        left: 18px;
        top: 120px;
      }
    }
    .img1:hover {
      top: 70px;
      .up1 {
        opacity: 1;
      }
    }

    .img2 {
      position: relative;
      justify-content: center;
      width: 430px;
      height: 540px;
      top:56px;
      transition: all 0.8s ease;
      .up2 {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 230px auto;
        width: 180px;
      }
    }
    .img2:hover {
      opacity: 0.6;
      top: 26px;
      .up2 {
        opacity: 1;
      }
    }

    .img3 {
      position: relative;
      justify-content: center;
      right: 85px;
      top: 170px;
      width: 265px;
      height: 428px;
      transition: all 0.8s ease;
      .up3 {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 120px auto;
      }
    }
    .img3:hover {
      top: 130px;
      .up3 {
        opacity: 1;
      }
    }
  }
}
</style>
