import React from 'react';

type SimpleButtonProps = {
  count: number;
  item: string;
  verb?: string;
};

const SimpleButton: React.FC<SimpleButtonProps> = ({
  count,
  item,
  verb = 'buy',
}) => <button>{`${verb} ${count}x ${item}`}</button>;

export default SimpleButton;
