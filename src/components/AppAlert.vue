<template>
  <div v-if="show" class="app-alert alert" role="alert" :class="styleClass">
    {{ msg }}
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  type: {
    type: String,
    default: '',
    validator: value => ['success', 'error'].includes(value),
  },
  show: {
    type: Boolean,
    default: false,
  },
  msg: {
    type: String,
    required: true,
  },
});

const styleClass = computed(() =>
  props.type === 'error' ? 'alert-danger' : 'alert-success',
);
</script>

<style lang="css" scoped>
.app-alert {
  position: fixed;
  top: 10px;
  right: 10px;
}
</style>
