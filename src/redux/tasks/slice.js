import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../../redux/auth/operations';
import { fetchTasks, addTask, deleteTask } from './operations';

//Helpers-------------------------------------
const handlePending = state => {
    state.isLoading = true;
};
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};
//--------------------------------------------
const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: [],
        sorted: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        sortListItems: (state, action) => {
            try {
                if (action.payload !== '') {
                    state.sorted = state.items.filter(todo =>
                        todo.text.toLowerCase().includes(action.payload.toLowerCase()))
                } else {
                    state.sorted = []
                }

            } catch (error) {
                console.error(error)
            }
        },
        addListItems: (state, action) => {

            state.items.push(action.payload)
        },
    },

    extraReducers: {
        [fetchTasks.pending]: handlePending,
        [addTask.pending]: handlePending,
        [deleteTask.pending]: handlePending,
        [fetchTasks.rejected]: handleRejected,
        [addTask.rejected]: handleRejected,
        [deleteTask.rejected]: handleRejected,
        [fetchTasks.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [addTask.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [deleteTask.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                task => task.id === action.payload.id
            );
            state.items.splice(index, 1);
        },
        [logOut.fulfilled](state) {
            state.items = [];
            state.error = null;
            state.isLoading = false;
        },
    },
});
export const { sortListItems, addListItems } = tasksSlice.actions
export const tasksReducer = tasksSlice.reducer;
