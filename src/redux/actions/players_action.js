import axios from 'axios'
import React from 'react'
import {GET_PLAYERS} from "../types";
import {APP_URL} from "../../config/config";

export function getPlayers(){
    return async dispatch => {

        let urls = [];
        for(let i = 1;i<34;i++){
            const options = {
                        method: 'GET',
                        url: APP_URL+'/players',
                        params: {page: i, per_page: '100'},
                        headers: {
                            'x-rapidapi-host': 'free-nba.p.rapidapi.com',
                            'x-rapidapi-key': 'c505b007c7msh153f6a59b523433p1241f4jsn3fc242180051'
                        }
                    };
            urls = urls.concat(options);
        }
        const allRequests = urls.map(option =>
        axios.request(option)
            .then((res) => res.data.data))
        await Promise.all(allRequests)
        await console.log(allRequests);

        await dispatch({
            type: GET_PLAYERS,
            payload: [].concat.apply([],allRequests.map(req => req._W)),
        })


        //TODO this is for code 429 from server's api (too much requests)

        // let pages = 0;
        // let data = [];
        // while (true) {
        //     const options = {
        //         method: 'GET',
        //         url: APP_URL+'/players',
        //         params: {page: pages++, per_page: '100'},
        //         headers: {
        //             'x-rapidapi-host': 'free-nba.p.rapidapi.com',
        //             'x-rapidapi-key': 'c505b007c7msh153f6a59b523433p1241f4jsn3fc242180051'
        //         }
        //     };
        //
        //     const response = await axios.request(options);
        //     data = data.concat(response.data.data)
        //     if (response.data.meta.next_page === null) break;
        // }
        // console.log(data);

        // dispatch({
        //     type: GET_PLAYERS,
        //     payload: data,
        // })

    }
}
