<template>
<div class="article">
    <h2>Binary Search</h2>
    <div class="article-text">
        <QuillEditor theme="snow" :toolbar="[{ 'size': [false, 'large'] }, { 'color': [] }, { 'background': [] }, { 'align': [] }, 'bold', 'italic', 'underline',
        'blockquote', 'code-block', { 'list': 'ordered' }, { 'list': 'bullet' }, { 'script': 'sub' }, { 'script': 'super' },
        { 'indent': '-1' }, { 'indent': '+1' }, 'link', 'image', 'clean']" />

        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <CodeRunner />
</div>
</template>

<script lang="ts">
import {
    Options,
    Vue
} from "vue-class-component";
import CodeRunner from "./CodeRunner/CodeRunner.vue";
import {
    QuillEditor
} from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import '@vueup/vue-quill/dist/vue-quill.bubble.css';

@Options({
    components: {
        QuillEditor,
        CodeRunner,
    },
    props: {
        msg: String,
    },
})
export default class Article extends Vue {
    msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.article {
    margin: 10px;
    margin-left: 20px;
    width: calc(66% - 24px);
    text-align: left;
    vertical-align: top;
}

h2 {
    text-align: center;
}

.article-text {
    margin: 20px 0;
    text-align: justify;
}
</style>
