import { ref } from 'vue';
import type { ChatMessagesInterface } from '@/interfaces/chat.messages.interface';
import type { Yesnoresponse } from '@/interfaces/yes.no.response';
import { sleep } from '@/helpers/sleep';

export const useChat = () => {
    const messages = ref<ChatMessagesInterface[]>([]);
    const isTyping = ref(false);

    const getResponse = async () => {
        const resp = await fetch('https://yesno.wtf/api');
        const data = (await resp.json()) as Yesnoresponse;
        return data;
    };

    const onMessage = async (text: string) => {
        messages.value.push({
            id: new Date().getTime(),
            message: text,
            itsMine: true,
        });
        if (!text.endsWith('?')) return;

        isTyping.value = true;
        await sleep(1);
        const { answer, image } = await getResponse();
        isTyping.value = false;

        messages.value.push({
            id: new Date().getTime(),
            itsMine: false,
            message: answer,
            image,
        });
    };

    return {
        // props
        messages,
        isTyping,
        // methods
        onMessage,
    };
};
