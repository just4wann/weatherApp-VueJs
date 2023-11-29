<script setup>
defineProps({
  weatherFetchData: Object,
  countryIcon: String,
});
</script>
<template>
  <div>
    <p>{{ weatherFetchData?.name }}</p>
    <div class="country">
      <p>{{ weatherFetchData?.sys.country }}</p>
      <img :src="countryIcon" width="20" />
    </div>
  </div>
</template>
