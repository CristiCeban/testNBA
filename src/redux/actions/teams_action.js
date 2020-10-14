import axios from 'axios'
import React from 'react'
import {GET_TEAMS} from "../types";
import {APP_URL} from "../../config/config";

export function getTeams(){
    return async dispatch => {

        const options = {
            method: 'GET',
            url: APP_URL+'/teams',
            params: {page: '0'},
            headers: {
                'x-rapidapi-host': 'free-nba.p.rapidapi.com',
                'x-rapidapi-key': 'c505b007c7msh153f6a59b523433p1241f4jsn3fc242180051'
            }
        };

        const response = await axios.request(options)
        dispatch({
            type: GET_TEAMS,
            payload: response.data
        })
    }
}
