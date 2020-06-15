import React, { ComponentProps } from 'react';
import SimpleButton from "components/SimpleButton";

export default {
  title: 'Components/SimpleButton',
  component: SimpleButton,
};

type SimpleButtonProps = ComponentProps<typeof SimpleButton>;

export const Simple = (args: SimpleButtonProps) => <SimpleButton {...args} />;

Simple.args = {
  count: 6,
  item: 'car',
};
