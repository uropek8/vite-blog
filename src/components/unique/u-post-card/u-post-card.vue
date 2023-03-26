<script setup lang="ts">
import Post from '@/types/Post'

interface Props {
  post: Post | null
  atAttribute?: string
}

const props = defineProps<Props>()
</script>

<template>
  <div
    :at-u-post-card="atAttribute"
    class="u-post-card"
  >
    <div class="post-card">
      <div class="post-card__content">
        <h5 class="post-card__title">{{ props.post?.title }}</h5>
        <p class="post-card__text">{{ props.post?.body }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./u-post-card.scss" />
