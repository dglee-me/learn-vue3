<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <form @submit.prevent="edit()">
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input
          v-model="form.title"
          type="text"
          class="form-control"
          id="title"
          value=""
        />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">내용</label>
        <textarea
          class="form-control"
          id="content"
          rows="3"
          v-model="form.content"
        ></textarea>
      </div>
      <div class="pt-4">
        <button class="btn btn-outline-danger me-2" @click="goDetailPage">
          취소
        </button>
        <button class="btn btn-primary">수정</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { getPostById, updatePost } from '@/api/posts';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const props = defineProps({
  id: Number,
});

const router = useRouter();
const form = ref({
  title: null,
  content: null,
});

const fetchPost = async () => {
  const { data } = await getPostById(props.id);
  form.value = { ...data };
};

fetchPost();

const edit = async () => {
  try {
    await updatePost(props.id, {
      ...form.value,
    });
    router.push({ name: 'PostDetail', params: { id: props.id } });
  } catch (e) {
    console.error(e);
  }
};

const goDetailPage = () =>
  router.push({
    name: 'PostDetail',
    params: {
      id: props.id,
    },
  });
</script>

<style></style>
