<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <PostForm
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="edit"
    >
      <template #actions>
        <button class="btn btn-outline-danger" @click="goDetailPage">
          취소
        </button>
        <button class="btn btn-primary">수정</button>
      </template>
    </PostForm>
    <AppAlert :show="showAlert" :msg="alertMsg" :type="alertType" />
  </div>
</template>

<script setup>
import { getPostById, updatePost } from '@/api/posts';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import PostForm from '@/components/posts/PostForm.vue';
import AppAlert from '@/components/AppAlert.vue';

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
    // router.push({ name: 'PostDetail', params: { id: props.id } });
    vAlert('수정이 완료되었습니다.', 'success');
  } catch (e) {
    console.error(e);
    vAlert('네트워크 오류', 'error');
  }
};

const goDetailPage = () =>
  router.push({
    name: 'PostDetail',
    params: {
      id: props.id,
    },
  });

const showAlert = ref(false);
const alertMsg = ref('');
const alertType = ref('');
const vAlert = (message, type) => {
  showAlert.value = true;
  alertMsg.value = message;
  alertType.value = type;
  setTimeout(() => (showAlert.value = false), 2000);
};
</script>

<style></style>
