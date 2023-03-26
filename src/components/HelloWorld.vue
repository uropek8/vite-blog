<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
const checked = ref(false)
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <button
      type="button"
      @click="count++"
    >
      count is {{ count }}
    </button>
    <Button
      label="Count"
      @click="count++"
    />
    <Checkbox
      v-model="checked"
      :binary="true"
    />
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <p>
    Check out
    <a
      href="https://vuejs.org/guide/quick-start.html#local"
      target="_blank"
      class="new"
    >
      create-vue
    </a>
    , the official Vue + Vite starter
  </p>
  <p>
    Install
    <a
      href="https://github.com/johnsoncodehk/volar"
      target="_blank"
    >
      Volar
    </a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>

  <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-700 text-center">
      <div class="text-blue-600 font-bold mb-3">
        <i class="pi pi-discord" />
        &nbsp;POWERED BY DISCORD
      </div>
      <div class="text-900 font-bold text-5xl mb-3">
        Join Our Design Community
      </div>
      <div class="text-700 text-2xl mb-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam
        eligendi quos.
      </div>
      <TheButton
        label="Join Now"
        icon="pi pi-discord"
        class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"
      />
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
