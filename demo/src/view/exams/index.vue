<template>
<Title :title="name"></Title>
<div class="body">
    <examcode :title="rule[0]"></examcode>
    <div class="cranny"></div>
    <examcode :title="rule[1]"></examcode>
</div>
</template>

<script setup lang='ts'>
import {Title} from "../../component/Title/Title";
import {examcode} from "@/component/examcode/examcode"

const name = "武汉市2024小车理论考试" 
const rule =["科目一交规","科目四安全文明驾驶"]
</script>

<style scoped >
.body{
    display: flex;
    width: 1200px;
    height: 400px;
    margin: 0 auto;
    position: relative;
    
    .cranny{
        width: 39px;
        height: 499px;
        border:1px;
    }
}
</style>