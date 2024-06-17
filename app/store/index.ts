'use client';
import { configureStore } from '@reduxjs/toolkit';
import statementReducer from './features/statements/index';

export const store = configureStore({
    reducer: {
        statements: statementReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;