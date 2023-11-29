<script setup>
const emits = defineEmits(['weatherLocation']);
</script>
<template>
  <div>
    <button class="search-btn" @click="$emit('weatherLocation')">Search</button>
  </div>
</template>
