<script setup lang="ts">
import type { Ref } from 'vue'
import { useRoute } from 'vue-router'
import { ref, computed, onMounted } from 'vue'

import UPostCard from '@/components/unique/u-post-card'

import Post from '@/types/Post'
import PostDataService from '@/services/posts'

interface Props {
  atAttribute?: string
}

const props = defineProps<Props>()

const route = useRoute()
const id = route.params.id
const allPosts: Ref<Post[]> = ref([])

const currentPost = computed(() => {
  return allPosts.value.find((post) => post.id === Number(id)) || null
})
const isHasPostData = computed(() => {
  return Boolean(Object.keys(currentPost).length)
})

async function fetchPosts() {
  try {
    const response = await PostDataService.getAll()
    const { data: posts } = response

    if (!posts.length) return

    allPosts.value = [...posts]
  } catch (error) {
    return Promise.reject(error)
  }
}

onMounted(() => {
  fetchPosts()
})
</script>

<template>
  <div
    :at-p-post-details="props.atAttribute"
    class="p-post-details"
  >
    <div class="post-details">
      <UPostCard
        v-if="isHasPostData"
        :post="currentPost"
      />
      <template v-else>
        <div class="post-details__empty">Not Post info</div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" src="./p-post-details.scss" />
