import React, { Component } from 'react';
import faker from 'faker';

import Comment from './Comment';
import ApprovalCard from './ApprovalCard';

class AppCard extends Component {
  render() {
    return (
      <div className="ui container comments">
        <ApprovalCard>
          <Comment
            author="saeed"
            comment="hello darkness"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <Comment
            author="alex"
            comment="myname is"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
      </div>
    );
  }
}

export default AppCard;
