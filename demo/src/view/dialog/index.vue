<template>
  <div>
    <button @click="showModal">打开弹窗</button>

    <div v-if="visible" class="modal">
      <div class="modal-content">
        <h2>这是一个弹窗</h2>
        <p>弹窗的内容可以在这里添加。</p>
        <button @click="hideModal">关闭弹窗</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);

const showModal = () => {
  visible.value = true;
};
const hideModal = () => {
  visible.value = false;
};
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
}
</style>
