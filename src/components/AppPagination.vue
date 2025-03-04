<template>
  <nav class="mt-5" aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li
        class="page-item"
        @click.prevent="
          $emit('page', currentPage == 1 ? currentPage : currentPage - 1)
        "
        :class="isPrevPage"
      >
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="page in pageCount"
        class="page-item"
        :key="page"
        @click.prevent="$emit('page', page)"
        :class="{ active: currentPage === page }"
      >
        <a class="page-link" href="#">{{ page }}</a>
      </li>
      <li class="page-item">
        <a
          class="page-link"
          :class="isNextPage"
          href="#"
          aria-label="Next"
          @click.prevent="$emit('page', currentPage + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
});

const isPrevPage = computed(() => ({ disabled: !(props.currentPage > 1) }));
const isNextPage = computed(() => ({
  disabled: !(props.currentPage < props.pageCount),
}));
</script>

<style lang="scss" scoped></style>
