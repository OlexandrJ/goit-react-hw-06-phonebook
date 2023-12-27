import { createSlice, nanoid } from '@reduxjs/toolkit';

export const sliceContact = createSlice({
  name: 'contacts',
  initialState: [
    { id: nanoid(), name: 'Ivan Klimenko', number: '555-44-33' },
    { id: nanoid(), name: 'Anna Kruz', number: '333-22-11' },
  ],
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: payload => {
        return {
          payload: {
            id: nanoid(),
            ...payload,
          },
        };
      },
    },
    removeContact(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContact, removeContact } = sliceContact.actions;