<script setup lang="ts">
import { Ref } from 'vue'
import { useRoute } from 'vue-router'
import { ref, computed, onMounted } from 'vue'

import UPostCardForm from '@/components/unique/u-post-card-form'

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
  return allPosts.value.find((post) => post.id === Number(id))
})
const isHasPostData = computed(() => {
  return Boolean(currentPost.value)
})
const postTitle = computed(() => {
  if (!isHasPostData.value) return ''

  return currentPost.value?.title || ''
})
const postDesc = computed(() => {
  if (!isHasPostData.value) return ''

  return currentPost.value?.body || ''
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
// TODO: update new post
async function updatePost(post: Post) {
  if (!Object.keys(post).length) return

  console.log('updatePost: ', post)
  // try {
  //   await PostDataService.update(post)
  // } catch (error) {
  //   return Promise.reject(error)
  // }
}

onMounted(() => {
  fetchPosts()
})
</script>

<template>
  <div
    :at-p-post-edit="props.atAttribute"
    class="p-post-edit"
  >
    <UPostCardForm
      :title="postTitle"
      :description="postDesc"
      @create-post="updatePost"
    />
  </div>
</template>

<style lang="scss" src="./p-post-edit.scss" />
