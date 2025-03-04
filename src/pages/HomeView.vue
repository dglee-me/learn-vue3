<template>
  <h2>Home</h2>
  <hr class="my-4" />
  <AppGrid :items="items" #default="{ item }">
    <AppCard>{{ item }}</AppCard>
  </AppGrid>
</template>

<script setup>
import { ref } from 'vue';
import AppCard from '@/components/AppCard.vue';
import AppGrid from '@/components/AppGrid.vue';

const items = ref(['사과', '딸기', '포도', '바나나']);
</script>

<style lang="scss" scoped></style>
