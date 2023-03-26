<!-- <script setup lang="ts">
import UPostCardForm from '@/components/unique/u-post-card-form'
</script> -->

<template>
  <div class="main">
    <router-view />
  </div>
</template>

<style lang="scss">
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: rgb(246, 246, 247);
}
.posts-list-wrapper {
  max-width: 100%;
  margin: 0 25px 35px;
}
.posts-list {
  width: 100%;
  background-color: #ffffff;
}
.posts-list__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 35px;
  padding: 20px 35px;

  & + .posts-list__item {
    border-top: 1px solid #ced4da;
  }
}
.posts-list__item-info {
  flex: 1 0 0;
  max-width: 100%;
}
.posts-list__item-title {
  font-size: 18px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 25px;
}
.posts-list__item-text {
  font-size: 14px;
  margin: 0;
}
.posts-list__paginator {
  margin-top: 20px;

  .p-paginator {
    border: none;
    border-radius: 0;
  }
}
</style>
