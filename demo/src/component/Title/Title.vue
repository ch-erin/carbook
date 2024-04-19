<template>
  <div class="divide">
    <div class="divide-line"></div>
    <div class="divide-title">{{ title }}</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String, 
    required: true // 
  }
});
</script>

<style scoped>
.divide {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  padding-top: 80px;
  margin-bottom: 50px;

  .divide-line {
    width: 1200px;
    height: 0;
    border-bottom: 1px solid #e9e9e9;
  }

  .divide-title {
    display: inline-block;
    position: absolute;
    font-size: 30px;
    color: #333;
    background-color: #fff;
    padding: 0 40px;
  }
}
</style>
