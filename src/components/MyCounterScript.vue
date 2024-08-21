<template>
    <section class="flex flex-col items-center">
        <h3>Counter: {{ counter }}</h3>
        <h3>Square: {{ computedSquare }}</h3>
        <div class="flex">
            <button class="btn" @click="counter++">+</button>
            <button class="btn" @click="counter--">-</button>
        </div>
    </section>
</template>

<script lang="ts">
import { useCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        value: { type: Number, required: true },
    },
    setup(props) {
        const { computedSquare, counter } = useCounter(props.value);

        return {
            computedSquare,
            counter,
        };
    },
});
</script>

<style scoped>
.btn {
    @apply p-5 bg-emerald-500  rounded-md mx-2 my-2 w-12 h-12 flex justify-center items-center hover:bg-pink-500;
}
</style>
