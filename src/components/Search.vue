<script setup>
defineProps({
  inputValue: String,
});
defineEmits(['update:inputValue']);
</script>

<template>
  <div>
    <input type="text" class="search-field" :value="inputValue" @input="$emit('update:inputValue', $event.target.value)" />
  </div>
</template>
