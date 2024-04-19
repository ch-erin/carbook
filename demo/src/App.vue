<template>
    <n-config-provider>
      <Head></Head>
      <Carousel></Carousel>
    </n-config-provider>
    <exams></exams>
    <school> </school>
    <process></process>
    <APP></APP>
    <usecarbook></usecarbook>
</template>

<script setup lang="ts">
import { NConfigProvider } from "naive-ui";
import Head from "@/view/head/index.vue";
import Carousel from "@/view/carousel/index.vue";
import exams from "@/view/exams/index.vue";
import school from "@/view/school/index.vue";
import process from "@/view/process/index.vue";
import APP from "@/view/APP/index.vue";
import usecarbook from "@/view/usecarbook/index.vue";
</script>

<style scoped></style>
