<script setup lang="ts">
defineProps<{ atAttribute: string }>()
</script>

<template>
  <div
    :at-u-pagination="atAttribute"
    class="u-pagination"
  >
    This is UPagination
  </div>
</template>

<style lang="scss" src="./u-pagination.scss" />
