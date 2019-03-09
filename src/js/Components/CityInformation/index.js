import { connect } from 'react-redux';
import CityInformation from './CityInformation';

function mapStoreToProps(store) {
    return {
        cityInfo: store.search.cityInfo,
        weatherIcon: store.search.weatherIcon,
        error: store.search.error
    };
}

export default connect(mapStoreToProps)(CityInformation);