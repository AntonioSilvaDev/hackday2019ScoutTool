const defaultState = {
    city: '',
    cityInfo: '',
    weatherIcon: '',
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
            const dateObj = new Date();
            const month = dateObj.getMonth() + 1; //months from 1-12
            const day = dateObj.getDate();
            const year = dateObj.getFullYear();
            const newDate = month + "/" + day + "/" + year;

            const hours = dateObj.getHours();
            const minutes = (dateObj.getMinutes() <10 ? '0' : '') + dateObj.getMinutes();
            const seconds = (dateObj.getSeconds() <10 ? '0' : '') + dateObj.getSeconds();
            const newTime = hours + ':' + minutes + ':' + seconds;
            const date = newDate;
            const name = action.payload.data.name;
            const time = newTime;
            
            return {
                city: '',
                cityInfo: action.payload.data,
                weatherIcon: action.payload.data.weather[0].icon,
                date: '',
                error: '',
                lineItems: [
                ...state.lineItems,
                { date, name, time }
                ]
            }
        }

        case 'FETCH_DATA_REJECTED' : {
            return {
                ...state,
                city: '',
                cityInfo: '',
                weatherIcon: '',
                date: '',
                error: true,
            }

        }

        default: {
            return state
            }
        }
    }

