<script setup lang="ts">
import type { Ref } from 'vue'
import { ref, computed, onMounted } from 'vue'
import type { PageState } from 'primevue/paginator'

import UPostsList from '@/components/unique/u-posts-list'
import UPostCardForm from '@/components/unique/u-post-card-form'

import Post from '@/types/Post'
import PostDataService from '@/services/posts'

defineProps<{ atAttribute?: string }>()

const postsList: Ref<Post[]> = ref([])
const currentPage = ref<number>(1)
const pageRowsLimit = ref<number>(5)

const isShowPosts = computed(() => Boolean(postsList.value.length))
const paginatedPosts = computed(() => {
  const begin = (currentPage.value - 1) * pageRowsLimit.value
  const end = currentPage.value * pageRowsLimit.value

  return postsList.value.slice(begin, end)
})

// TODO: update new post
async function createPost(post: Post) {
  if (!Object.keys(post).length) return

  console.log('createPost: ', post)
  // try {
  //   await PostDataService.create(post)
  // } catch (error) {
  //   return Promise.reject(error)
  // }
}
async function fetchPosts() {
  try {
    const response = await PostDataService.getAll()
    const { data: posts } = response

    if (!posts.length) return

    postsList.value = [...posts.slice(0, 30)]
  } catch (error) {
    return Promise.reject(error)
  }
}
function handlePaginator(event: PageState) {
  currentPage.value = event.page + 1
  pageRowsLimit.value = event.rows
}

onMounted(() => {
  fetchPosts()
})
</script>

<template>
  <div
    at-p-home
    class="p-home"
  >
    <UPostCardForm @create-post="createPost" />
    <div
      v-if="isShowPosts"
      class="posts-list-wrapper"
    >
      <UPostsList
        :posts="paginatedPosts"
        at-attribute="posts-list"
      />
      <Paginator
        :rows="pageRowsLimit"
        :total-records="postsList.length"
        class="posts-list__paginator"
        @page="handlePaginator"
      ></Paginator>
    </div>
  </div>
</template>

<style lang="scss" src="./p-home.scss" />
