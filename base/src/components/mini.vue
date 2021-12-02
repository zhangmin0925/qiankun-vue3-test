<template>
    <div id="vue"></div>
</template>
<script>
import { start } from 'qiankun'
export default {
    data() {
        return {

        }
    },
    mounted() {
        if (!window.qiankunStarted) {
            window.qiankunStarted = true
            start()
        }
    }
}
</script>
