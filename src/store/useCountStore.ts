import create from "zustand";

// this is amazing
interface CountState {
    count: number;
    increment: () => void;
    decrement: () => void;
}

const useCountStore = create<CountState>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCountStore;
