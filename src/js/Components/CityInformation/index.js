import { connect } from 'react-redux';
import CityInformation from './CityInformation';

function mapStoreToProps(store) {
    return {
        playerInfo: store.search.playerInfo.player,
        playerStats: store.search.playerStats,
        fbCount: store.search.fbCount,
        error: store.search.error
    };
}

export default connect(mapStoreToProps)(CityInformation);