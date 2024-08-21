<template>
    <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">
            <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
            <TypingIndicator v-if="isTyping" />
        </div>
    </div>
</template>

<script setup lang="ts">
import ChatBubble from '@/components/chat/ChatBubble.vue';
import TypingIndicator from '@/components/chat/TypingIndicator.vue';
import type { ChatMessagesInterface } from '../../interfaces/chat.messages.interface';
import { ref, watch } from 'vue';

interface Props {
    messages: ChatMessagesInterface[];
    isTyping: boolean;
}
const chatRef = ref<HTMLDivElement | null>(null);
const { messages } = defineProps<Props>();

watch(messages, () => {
    setTimeout(() => {
        chatRef.value?.scrollTo({
            top: chatRef.value?.scrollHeight,
            behavior: 'smooth',
        });
    }, 100);
});
</script>
