import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

//Utility to add JWT
const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

//Utility to remove JWT
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

//  ***
//  POST @ /users/signup
//  body: {name, email, password}
//
export const register = createAsyncThunk(
    'auth/register',
    async (credentails, thunkAPI) => {
        try {
            const res = await axios.post('/users/signup', credentails);
            setAuthHeader(res.data.token);
            return res.data;
         }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
     }
);

//  ***
//  POST @ /users/login
//  body: { email, password }
//
export const logIn = createAsyncThunk(
    'auth/login',
     async (credentails, thunkAPI) => {
        try {
            const res = await axios.post('/users/login', credentails);
            setAuthHeader(res.data.token);
            return res.data;
         }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
     }
);

//  ***
//  POST @ /users/logout
//  headers: Autorization: Bearer token
//
export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post('/users/logout');
            clearAuthHeader();
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });


//  ***
//  GET @ /users/current
//  headers: Autorization: Bearer token
//
export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => { 
        const { token } = thunkAPI.getState().auth;
        if (!token) {
            return thunkAPI.rejectWithValue('No valid token');
        }

        setAuthHeader(token);
        try {
            const res = await axios.get('/users/current');
            return res.data;
        } catch (error) {
               return thunkAPI.rejectWithValue(error.message); 
        }
    }
);