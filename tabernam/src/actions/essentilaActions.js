import { GET_DATA} from "./types";
// import axios from 'axios';

export const getPreviews = () => {
    return {
        type: GET_DATA,
    };
};