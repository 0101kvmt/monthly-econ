'use client'
import { createSlice } from '@reduxjs/toolkit';

import { StatementState } from './index.state';

const initialState: StatementState = {
    value: 0,
    statements: []
}

export const statementSlice = createSlice({
    name: 'statements',
    initialState,
    reducers: {
        addStatements: (state, action) => {
            state.statements = action.payload;
        }
    }
})

export const { addStatements } = statementSlice.actions;

export default statementSlice.reducer;