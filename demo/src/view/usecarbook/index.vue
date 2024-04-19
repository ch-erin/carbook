<script setup lang="ts">

</script>

<template>
  <div class="body">
    <div class="left">
      <div class="text">
        <span class="name">驾考宝典APP下载</span>
        <p class="describe">考驾照 用宝典</p>
      </div>
      <img src="@/assets/ercode.png" class="img" />
    </div>
    <div class="right">
      <div class="text">
        <span class="name">驾考宝典微信小程序</span>
        <p class="describe">考驾照 用宝典</p>
      </div>
      <img src="@/assets/applet.jpg" class="img" />
    </div>
  </div>
</template>

<style scoped lang="less">
.body {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  height: 200px;
  margin: 0 auto;
  padding: 80px 40px;
  .text {
    padding-right: 160px;
  }
  .left,
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 600px;
    border-right: 1px solid #e9e9e9;
  }
  .right {
    .text {
      margin-left: 65px;
    }
    border: none;
  }
  .left {
    padding-right: 55px;
  }
  .name {
    color: #333;
    font-size: 20px;
  }
  .describe {
    color: #908e8e;
    font-size: 14px;
    padding-top: 7px;
  }
  .img {
    display: inline;
    width: 150px;
  }
}
</style>