<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
    <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
        <PersonBar />

        <ChatMessages />

        <MessageBox />
    </div>
</template>
<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import PersonBar from '@/components/chat/PersonBar.vue';
</script>
