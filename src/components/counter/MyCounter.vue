<template>
    <section class="flex flex-col items-center">
        <h3>Counter: {{ counter }}</h3>
        <h3>Square: {{ computedSquare }}</h3>
        <div class="flex">
            <button @click="counter++" class="btn">+</button>
            <button @click="counter--" class="btn">-</button>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

const { computedSquare, counter } = useCounter(3);
</script>

<style scoped>
.btn {
    @apply p-5 bg-blue-500  rounded-md mx-2 my-2 w-12 h-12 flex justify-center items-center hover:bg-blue-700;
}
</style>
