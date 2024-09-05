import {createSlice} from "@reduxjs/toolkit";

export const avSlice = createSlice({
    name: "av",
    initialState: [
        {
            img: "src/assets/business-20031_1280.jpg",
            name: "Projectors",
            cost: 200,
            quantity: 0,
        },
        {
            img: "src/assets/speakers-4109274_1280.jpg",
            name: "Speaker",
            cost: 35,
            quantity: 0,
        },
        {
            img: "src/assets/public-speaking-3926344_1280.jpg",
            name: "Microphones",
            cost: 45,
            quantity: 0,
        },
        {
            img: "src/assets/whiteboard-2903269_1280.webp",
            name: "Whiteboards",
            cost: 80,
            quantity: 0,
        },

        {
            img: "src/assets/directory-235079_1280.jpg",
            name: "Signage",
            cost: 80,
            quantity: 0,
        },
    ],


    reducers: {
        incrementAvQuantity: (state, action) => {
            const item = state[action.payload];
            if(item) {
                item.quantity++;
            }
        },
        decrementAvQuantity: (state, action) => {
            const item = state[action.payload];
            if(item && item.quantity > 0) {
                item.quantity--;
            }
        },
    },
});

export const {incrementAvQuantity, decrementAvQuantity} = avSlice.actions;

export default avSlice.reducer;
