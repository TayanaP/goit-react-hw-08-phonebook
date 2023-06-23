import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://648e081e2de8d0ea11e882be.mockapi.io';
const BASEURL = 'https://648e081e2de8d0ea11e882be.mockapi.io/api/v1/';

// export const contactAPI = axios.create({
//   BaseURL: 'https://648e081e2de8d0ea11e882be.mockapi.io/api/v1',
// });

// export const fetchContacts = async () => {
//   const { data } = await contactAPI.get(`${BASEURL}/contacts`);
//   return data;
// };

// export const addContact = async contact => {
//   const { data } = await contactAPI.post(`${BASEURL}/contacts, contact`);
//   return data;
// };

// export const deleteContact = async id => {
//   const { data } = await contactAPI.delete(`${BASEURL}/contacts/${id}`);
//   return data;
// };

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASEURL}/contacts`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post(`${BASEURL}/contacts`, newContact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`${BASEURL}/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
