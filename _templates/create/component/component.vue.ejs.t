---
to: "<% return path + kebabName + '.vue'%>"
---
<script setup lang="ts">
interface Props {
  atAttribute?: string
}

const props = defineProps<Props>()
</script>

<template>
  <div
    :at-<%= kebabName %>="atAttribute"
    class="<%= kebabName %>"
  >
    This is <%= pascalName %>
  </div>
</template>

<style lang="scss" src="./<%= kebabName %>.scss" />
