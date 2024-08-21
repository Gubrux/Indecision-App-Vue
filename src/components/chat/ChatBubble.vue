<template>
    <!-- Messages go here -->
    <!-- Example Message -->
    <div v-if="itsMine" class="flex justify-end">
        <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">{{ message }}</div>
    </div>

    <!-- Example Received Message -->
    <div v-else class="flex">
        <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
            <span>
                {{ message }}
            </span>
            <img
                :src="image"
                v-if="image"
                alt="YesNoImg"
                class="w-52 h-52 object-cover rounded-md aspect-video"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
interface Props {
    message: string;
    image?: string;
    itsMine: boolean;
}

defineProps<Props>();
</script>

<style scoped></style>
