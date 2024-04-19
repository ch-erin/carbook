<script setup lang="ts">
defineProps<{
  label: string;
  placeholder: string;
  width: string;
}>();
</script>

<template>
  <div class="label"> <div class="intext">{{ label }}</div></div>
  <input
    type="text"
    :placeholder="placeholder"
    class="input"
    :style="{ width: `${width}px` }"
    required
  />
</template>

<style scoped >
.input {
  display: flex;
  height: 48px;
  margin-left: 70px;
  margin-bottom: 14px;
  border: 1px solid #e9e9e9;
  font-size: 16px;
  border-radius: 4px;
}
.input:focus {
  border: 1px solid #ADD8E6;
}
.label {
  position: absolute;
  left: 20px;
  .intext {
    margin-top:12.5px;
    color: #333;
    font-size: 16px;
    text-align: center;
  }
}

</style>
