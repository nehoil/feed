<template>
  <div class="feed-app">
    <div class="main-container">
      <div class="comments-main-container">
        <div class="comment-form">
          <el-form ref="form" :model="form">
            <el-form-item prop="email" :rules="rules.email">
              <el-input v-model="form.email" placeholder="Email"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                type="textarea"
                v-model="form.message"
                placeholder="Message"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">Submit</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="filter-container">
          <el-input
            placeholder="Filter"
            prefix-icon="el-icon-search"
            @input="onFilter"
            v-model="filterBy.term"
          ></el-input>
        </div>
        <feed-comments :comments="commentsToShow"  @clearFilter="clearFilter" />
      </div>
    </div>
  </div>
</template>

<script>
import { commentService } from '@/services/comment.service';
import feedComments from '@/cmps/feeds.comments';

export default {
  name: 'feed-app',
  data() {
    return {
      isLoading: this.$store.getters.isLoading,
      form: {
        message: '',
        email: '',
      },
      filterBy: {
        term: '',
      },
      rules: {
        email: [
          {
            required: true,
            message: 'Please input email address',
            trigger: 'blur',
          },
          {
            type: 'email',
            message: 'Please input correct email address',
            trigger: ['blur'],
          },
        ],
      },
    };
  },
  computed: {
    commentsToShow() {
      return this.$store.getters.commentsForDisplay;
    },
  },
  components: {
    feedComments,
  },
  methods: {
    clearFilter() {
      this.filterBy.term = '';
      this.onFilter();
    },
    async onSubmit() {
      if (!this.form.email || !this.form.message) return;
      this.isLoading = true;
      const comment = this.form;
      const savedMsg = await this.$store.dispatch({
        type: 'addComment',
        comment,
      });
      try {
        this.form = { message: '', email: '' };
        this.successMsg();
      } catch (err) {
        console.log('cannot add comment', err);
      }
      this.isLoading = false;
    },
    successMsg() {
      this.$message({
        message: 'Comment added successfully!',
        type: 'success',
      });
    },
    onFilter() {
      const filter = JSON.parse(JSON.stringify(this.filterBy));
      this.$store.dispatch({ type: 'setFilter', filter });
    },
  },
  created() {},
};
</script>
