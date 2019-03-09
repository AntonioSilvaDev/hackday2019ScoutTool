import { connect } from 'react-redux';
import SearchHistory from './SearchHistory';

function mapStoreToProps(store){
    return {
        lineItems: store.search.lineItems
    };
}

export default connect(mapStoreToProps)(SearchHistory);
