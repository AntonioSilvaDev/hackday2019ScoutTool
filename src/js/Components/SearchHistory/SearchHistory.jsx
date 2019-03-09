import React from 'react';

class SearchHistory extends React.Component{
    render(){
      const { lineItems } = this.props;
  
        return (
            <div className='card'>
                <div className='card-header bg-info'>Search History</div>
                <div className='card-body'>            
                  <div className='list-group list-group-flush d-flex'>
                  { 
                      lineItems.map((lineItem, index) => (
                          <div key={index} className='list-group-item d-flex align-items-end flex-column py-0'>
                            <div className='d-flex w-100 justify-content-between'>
                              <p className='my-0'>{ lineItem.name }</p>
                              <p className='my-0'>{ lineItem.date }</p>
                            </div>
                            <p className='my-0'>{ lineItem.time }</p>
                          </div>
                      ))
                  }
                </div>
              </div>
            </div>
        );
    }
}

export default SearchHistory;
