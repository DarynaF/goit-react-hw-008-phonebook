import axios from "axios";

const instanceContacts = axios.create({
    baseURL: "https://connections-api.herokuapp.com",
    params: {
        _limit: 25,
    }
});

export const getContactsA = async () => {
    const response = await instanceContacts.get('/contacts');
    return response.data;
}

export const addContactA = async (data) => {
    const response = await instanceContacts.post('/contacts', data);
    return response.data;
}

export const removeContactA = async (id) => {
    const response = await instanceContacts.delete(`/contacts/${id}`);
    return response.data;
}