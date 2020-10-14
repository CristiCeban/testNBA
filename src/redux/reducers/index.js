import {combineReducers} from 'redux'
import {teams_reducer} from "./teams_reducer";
import {players_reducer} from "./players_reducer";

const reducer = combineReducers({
    teams : teams_reducer,
    players : players_reducer,
})

export default reducer;
