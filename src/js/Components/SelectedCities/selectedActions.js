import axios from "axios";

export function updateSearchCity(city){
    return {
        type: 'UPDATE_SEARCH_CITY',
        payload: { city }
    };
}

export function fetchData(value){
    return {
        type: 'FETCH_DATA',
        payload: axios.get('/api', {params: { q: `${value}`}})
    }
}
