import { GET_COMMENTS } from "./types";
import axios from 'axios';

export const getComments = () => async dispatch => {
    const res = await axios.get('http://jsonplaceholder.typicode.com/comments');
    dispatch({
        type: GET_COMMENTS,
        payload: res.data
    });
};