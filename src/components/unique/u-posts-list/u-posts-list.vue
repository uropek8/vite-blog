<script setup lang="ts">
import Post from '@/types/Post'
import PostDataService from '@/services/posts'

defineProps<{
  atAttribute: string
  posts: Post[]
}>()

function getPostViewPath(id: string | number) {
  return `/posts/${id}`
}
function getPostEditPath(id: string | number) {
  return `/posts/edit/${id}`
}
// TODO: remove post
async function removePost(id: string | number) {
  console.log('removePost: ', id)
  // try {
  //   await PostDataService.delete(String(id))
  // } catch (error) {
  //   return Promise.reject(error)
  // }
}
</script>

<template>
  <div
    :at-u-posts-list="atAttribute"
    class="u-posts-list"
  >
    <div class="posts-list">
      <div
        v-for="post in posts"
        :key="post.id"
        class="posts-list__item"
      >
        <div class="posts-list__item-info">
          <h5 class="posts-list__item-title">
            {{ post.title }}
          </h5>
          <p class="posts-list__item-text">
            {{ post.body }}
          </p>
        </div>
        <div class="posts-list__item-action">
          <router-link
            :to="getPostViewPath(post.id)"
            class="p-button p-component"
          >
            View
          </router-link>
          <router-link
            :to="getPostEditPath(post.id)"
            class="p-button p-component p-button-secondary"
          >
            Edit
          </router-link>
          <Button
            class="p-button p-component p-button-danger"
            label="Remove"
            @click="removePost(post.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./u-posts-list.scss" />
