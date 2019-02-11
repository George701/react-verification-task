import { GET_DATA} from "../actions/types";

const initialState = {
    navigators: [
        {
            id:1,
            title: "Vestibulum",
            link:"#collection",
        },
        {
            id:2,
            title: "Aliquam",
            link:"#product",
        },
        {
            id:3,
            title: "Morbi",
            link:"#comments",
        }
    ]
};


export default function(state = initialState, action){
    switch(action.type){
        case GET_DATA:
            return {
                ...state
            };
        default: return state;
    }
}