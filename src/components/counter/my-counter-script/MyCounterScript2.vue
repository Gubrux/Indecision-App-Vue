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

<script lang="ts" src="./MyCounterScript2.ts"></script>
<style>
.btn {
    @apply p-5 bg-red-500  rounded-md mx-2 my-2 w-12 h-12 flex justify-center items-center hover:bg-purple-700;
}
</style>
