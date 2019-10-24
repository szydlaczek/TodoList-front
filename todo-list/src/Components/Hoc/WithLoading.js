import React from 'react';
import { Spinner } from 'react-bootstrap'
function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return (<Component {...props} />);
    return (<React.Fragment>
                <p>Be Hold, fetching data may take some time :)</p>
                <Spinner animation="border" variant="success" />
            </React.Fragment>
    );
  }
}
export default WithLoading;