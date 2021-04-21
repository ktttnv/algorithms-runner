<template>
<div class="input-code">
    <prism-editor class="my-editor" v-model="code" :highlight="highlighter" line-numbers></prism-editor>
</div>
</template>

<script lang="ts">
import {
    Options,
    Vue
} from "vue-class-component";
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles somewhere

  // import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css'; // import syntax highlighting styles

@Options({
    components: {
        PrismEditor,
    },
    data: () => ({ code: 'console.log("Hello World")' }),
    props: {
        msg: String,
    },
})
export default class InputCode extends Vue {
    msg!: string;
    highlighter(code: string) {
        return highlight(code, languages.js, "js"); // languages.<insert language> to return html with markup
    };
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.my-editor {
    background: #2d2d2d;
    color: #ccc;    
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
    width: auto;
}
</style>
