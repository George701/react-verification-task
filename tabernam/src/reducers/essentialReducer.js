import { GET_DATA} from "../actions/types";

const initialState = {
    previews: [
        {
            id:1,
            title: "Nulla Facilisi",
            description:"In quis iaculis velit. Etiam tristique lorem eu justo aliquam gravida.",
            img: "https://images.pexels.com/photos/583842/pexels-photo-583842.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        },
        {
            id:2,
            title: "Vivamus Vehicula",
            description:"Phasellus sit amet arcu in lectus tincidunt dignissim. Sed eleifend volutpat viverra.",
            img: "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        },
        {
            id:3,
            title: "Suspendisse Turpis",
            description:" Proin eu lacinia nisl. Praesent porttitor nisl et erat aliquam congue. Etiam eget pulvinar ipsum.",
            img: "https://images.pexels.com/photos/892757/pexels-photo-892757.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        }
    ]
};


export default function(state = initialState, action){
    switch(action.type){
        case GET_DATA:
            return {
                ...state,
            };
        default: return state;
    }
}