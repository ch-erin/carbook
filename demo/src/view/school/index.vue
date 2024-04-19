<template>
  <Title :title="name"></Title>
  <div class="body">
    <div class="card" v-for="i in schoollist" :key="name">
      <div class="top">
        <div class="topleft">
          <div class="up">
            <span class="title">{{ i.name }}</span>
            <img src="@/assets/star.png" class="star" />
          </div>
          <div class="down">
            <div class="words" v-for="j in words">
              <img src="@/icon/bingou.png" class="icon" />
              {{ j }}
            </div>
          </div>
        </div>
        <div class="topright">
          <div class="price">{{ i.price }}</div>
          <div class="btn"  @click="open" style="cursor: pointer">学车报名</div>
         
        </div>
      </div>
      <div class="bottom">
          <div class="inner">
            <img src="@/assets/A.png" class="avatar" />
            <span class="text">{{ i.comment }}</span>
          </div>
      </div>
    </div>
    <a href="https://www.jiakaobaodian.com/school/" class="button" >查看更多</a>
  </div>
  <Dialog></Dialog>
</template>

<script setup lang="ts">
import { ref,provide} from "vue";
import { schoollist } from "@/store/school/index";
import { Title } from "../../component/Title/Title";
import Dialog from "./Dialog/index.vue";

const name = "武汉市驾校推荐";
const words = ["口碑好", "规模大", "拿本快", "包接送"];

const isshow = ref(false);
provide("isshow", isshow);
const open =()=> {
  isshow.value = true;
}

</script>

<style scoped>
.body {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 1200px;
  margin: 0 auto;

  .card {
    display: space-between;
    margin: 20px 0;
    width: 585px;
    border: 1px solid #e9e9e9;
    height: 245px;
    flex-direction: column;

    .top {
      display: flex;
      align-items: center;
      top: 41px;
      position: relative;
      width: 100%;
      height: 74px;

      .topleft {
        margin-left: 28px;
        width: 310px;
        height: 100%;
        padding-right: 10px;
        border-right: 1px solid #e9e9e9;

        .up {
          height: 50%;
          width: 100%;

          .title {
            font-size: 22px;
            color: #666;
          }

          .star {
            position: absolute;
            top: 11px;
            left: 126px;
          }
        }

        .down {
          display: flex;
          height: 50%;
          width: 100%;

          .words {
            display: flex;
            align-items: center;
            color: #666;
            font-size: 14px;
            padding-right: 14px;
          }

          .icon {
            margin: -2px;
            padding-top: 1px;
            padding-right: 5px;
            display: flex;
            align-items: center;
          }
        }
      }

      .topright {
        display: flex;
        height: 75px;
        width: 210px;
        display: flex;
        justify-content: center;
        /* 将.price 水平居中 */
        align-items: center;

        .price {
          width: 120px;
          text-align: center;
          color: #ee4653;
          font-size: 30px;
        }

        .btn {
          width: 80px;
          font-size: 14px;
          height: 24px;
          text-align: center;
          color: #000;
          border-radius: 4px;
          background-color: #fff;
          border: 1px solid #e9e9e9;
        }
      }
    }

    .bottom {
      margin-top: 60px;
      margin-left: 5%;
      width: 90%;
      height: 75px;
      background-color: #fafafa;

      .inner {
        height: 40px;

        .avatar {
          width: 40px;
          margin-top: 14px;
          margin-left: 14px;
        }

        .text {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          margin-left: 62px;
          margin-right: 20px;
          margin-top: -50px;
          overflow: hidden;
          text-overflow: ellipsis;
          line-clamp: 2;
          font-size: 14px;
          color: #999;
          align-items: center;
        }
      }
    }
  }

  .button {
    width: 280px;
    margin: 20px auto 0;
    height: 46px;
    font-size: 16px;
    line-height: 48px;
    text-align: center;
    color: #c4c4c4;
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #e9e9e9;
  }

  .button:hover {
    color: #54c2f9;
    border-color: #54c2f9;
  }

  a {
    color: #d8d8d8;
    text-decoration: none;
  }
}
</style>
