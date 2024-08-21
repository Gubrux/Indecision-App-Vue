<template>
    <section class="flex justify-center items-center w-full h-screen">
        <MyCounter :value="4" />
        <MyCounterScript :value="8" />
        <MyCounterScript2 :value="2" />
    </section>
</template>
<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';
</script>
