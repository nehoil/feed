<template>
  <div class="comment-list">
    <div class="no-result-msg" v-if="isComments">
      No results found, try searching again or
      <a @click="clearFilter"> clear filter. </a>
    </div>
    <div
      class="comment-container"
      v-for="(comment, idx) in comments"
      :key="idx"
    >
      <div class="comment-avatar">
        <img
          :src="
            'https://www.gravatar.com/avatar/' +
            comment.img +
            '?d=https://i.ibb.co/sHq40p1/00000000000000000000000000000000.jpg'
          "
          alt=""
          srcset=""
        />
      </div>
      <div class="comment-txt-content">
        <div class="comment-email">{{ comment.email }}</div>
        <div class="comment-message">{{ comment.message }}</div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    comments: Array,
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    clearFilter(){
      this.$emit('clearFilter')
    }
  },
  computed: {
    isComments(){
      return this.comments.length < 1 ? true : ''
    }
  },
  created() {},
};
</script>