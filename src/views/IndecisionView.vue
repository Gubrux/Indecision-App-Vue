<template>
    <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
        <PersonBar />

        <ChatMessages :messages="messages" :isTyping="isTyping" />

        <MessageBox @send-message="onMessage($event)" />
    </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import PersonBar from '@/components/chat/PersonBar.vue';
import { useChat } from '@/composables/useChat';

const { messages, onMessage, isTyping } = useChat();
</script>
