const defaultState = {
    city: '',
    playerInfo: '',
    playerStats: '',
    date: '',
    error: '',
    lineItems: []
};

export default function SelectedReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'UPDATE_SEARCH_CITY' : {
            return {
                ...state,
                city: payload.city
            };
        }

        case 'FETCH_DATA_PENDING' : {
            return {
                ...state
            };
        }

        case 'FETCH_DATA_FULFILLED' : {
            // const dateObj = new Date();
            // const month = dateObj.getMonth() + 1; //months from 1-12
            // const day = dateObj.getDate();
            // const year = dateObj.getFullYear();
            // const newDate = month + "/" + day + "/" + year;

            // const hours = dateObj.getHours();
            // const minutes = (dateObj.getMinutes() <10 ? '0' : '') + dateObj.getMinutes();
            // const seconds = (dateObj.getSeconds() <10 ? '0' : '') + dateObj.getSeconds();
            // const newTime = hours + ':' + minutes + ':' + seconds;
            // const date = newDate;
            // const name = action.payload.data.name;
            // const time = newTime;
            
            return {
                city: '',
                playerInfo: action.payload.data,
                playerStats: action.payload.data.player.seasons[0].totals.statistics.pitch_metrics,
                fbCount: action.payload.data.player.seasons[0].totals.statistics.pitch_metrics.pitch_types[2],
                error: '',
                lineItems: [
                ...state.lineItems,
                // { date, name, time }
                ]
            }
        }

        case 'FETCH_DATA_REJECTED' : {
            return {
                ...state,
                city: '',
                playerInfo: '',
                playerStats: '',
                date: '',
                error: true,
            }

        }

        default: {
            return state
            }
        }
    }

