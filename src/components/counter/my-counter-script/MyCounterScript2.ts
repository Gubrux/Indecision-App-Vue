import { useCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        value: {
            type: Number,
            required: true,
        },
    },
    setup(props) {
        const { computedSquare, counter } = useCounter(props.value);
        // const counter = ref(props.value);
        // const computedSquare = computed(() => counter.value * counter.value);
        return {
            counter,
            computedSquare,
        };
    },
});
