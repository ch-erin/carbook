<template>
  <div class="head">
    <img src="@\assets\logo.png" />
    <div class="search" >
      <form action="https://www.so.com/s" target="_blank" id="so360form">
        <input
          type="text"
          class="text" 
          placeholder="请输入关键字"
          autocomplete="off"
          name="q"
          id="so360_keyword"
        />
        <input
          type="submit"
          class="button"
          ref="soSubmit"
          id="so360_submit"
          value="搜 索"
        />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const text = ref("");
</script>

<style scoped>
.head {
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  width: 1200px;
  height: 98px;
  .img {
    width: 207px;
    height: 42px;
  }
  .search {
    position: relative;
    width: 300px;
    height: 40px;
    border: 1px solid #e9e9e7;
    &.active {
      border-color: #a3c7f4; /* 添加这行 */
    }
    .text {
      flex: 1;
      height: 100%;
      font-size: 14px;
      color: #888585;
      line-height: 38px;
      padding-left: 10px;
      text-align: left; 
      height: 36px;
      width: 79.5%;
      border: 1px solid #e9e9e7;
      outline:none;
      &:focus {
        border-color: #6da5e9;
      }
    }
    .button {
      display: flex;
      position: absolute;
      top: 0;
      right: 0;
      width: 16%;
      height: 100%;
      font-size: 16px;
      text-align: center;
      color: #332;
      background-color: #e5e0e0;
      border:1px;
      border-color: #e5e0e2;
    }
  }
}
</style>
