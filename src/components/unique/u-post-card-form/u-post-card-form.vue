<script setup lang="ts">
import { computed } from 'vue'
import { useToast } from 'primevue/usetoast'
import { useRoute, useRouter } from 'vue-router'
import { useField, useForm } from 'vee-validate'

import Post from '@/types/Post'
import { getRandomInt } from '@/services/numbers'

defineProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  atAttribute: {
    type: String,
    default: '',
  },
})
const emit = defineEmits<{
  (e: 'createPost', post: Post): void
}>()
const route = useRoute()
const router = useRouter()
const id = route.params.id
const isEditPage = computed(() => route.path.includes('/edit'))
const buttonLabel = computed(() => {
  return isEditPage.value ? 'Update' : 'Create'
})

const { handleSubmit, resetForm } = useForm()
const { value: titleValue, errorMessage: titleError } = useField(
  'titleValue',
  validateTitleField,
  {
    modelPropName: 'title',
  }
)
const { value: descValue, errorMessage: descError } = useField(
  'descValue',
  validateDescField,
  {
    modelPropName: 'description',
  }
)
const toast = useToast()

function validateTitleField(value: string) {
  if (!value) return 'Post Title is required.'

  return true
}
function validateDescField(value: string) {
  if (!value) return 'Post Description is required.'

  return true
}

const onSubmit = handleSubmit((values) => {
  const isFilledTitle = Boolean(values.titleValue && values.titleValue.length)
  const isFilledDesc = Boolean(values.descValue && values.descValue.length)

  if (isFilledTitle && isFilledDesc) {
    toast.add({
      severity: 'success',
      summary: 'Post Created!',
      life: 3000,
    })

    const currentPost = {
      id: getRandomInt(101, 200),
      userId: 1,
      title: values.titleValue,
      body: values.descValue,
    }

    if (isEditPage.value) {
      currentPost.id = Number(id)
    }

    emit('createPost', {
      id: getRandomInt(101, 200),
      userId: 1,
      title: values.titleValue,
      body: values.descValue,
    })

    if (isEditPage.value) {
      router.push('/')
    } else {
      resetForm()
    }
  }
})
</script>

<template>
  <div
    :at-u-post-card-form="atAttribute"
    class="u-post-card-form"
  >
    <div class="post-card-form">
      <div class="post-card-form__content">
        <h4 class="post-card-form__title">Create Post</h4>
        <form
          class="post-card-form__form"
          @submit="onSubmit"
        >
          <div class="post-card-form__form-item">
            <label for="title">Post Title</label>
            <InputText
              id="title"
              v-model="titleValue"
              :class="{ 'p-invalid': titleError }"
              aria-describedby="username-help"
            />
            <small class="p-error">{{ titleError || '&nbsp;' }}</small>
          </div>
          <div class="post-card-form__form-item">
            <label for="desc">Post Body</label>
            <Textarea
              id="desc"
              v-model="descValue"
              :class="{ 'p-invalid': descError }"
              rows="5"
              cols="30"
            />
            <small class="p-error">{{ descError || '&nbsp;' }}</small>
          </div>
          <div class="post-card-form__form-item">
            <div class="post-card-form__form-btn-wrap">
              <Button
                type="submit"
                :label="buttonLabel"
              />
            </div>
          </div>
        </form>
        <Toast />
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./u-post-card-form.scss" />
