// @flow

import React from 'react';

type Props = {
  message: string,
}

const Message = ({ message }: Props): React$Element<any> => <p>{message}</p>;

export default Message;
