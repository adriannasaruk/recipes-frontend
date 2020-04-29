import React from 'react';
import { connect } from 'react-redux';

function UserPage(props) {
  return (
    <div>
      <div>Hello from user page</div>
    </div>
  );
}

const map = (state) => {
  return;
};
export default connect(map, {})(UserPage);
