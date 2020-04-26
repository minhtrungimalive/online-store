import * as React from 'react';

const Button: React.FunctionComponent<{ title: string }> = props => {
  const { title } = props;
  return <button type="button">{title}</button>;
};

export default {
  title: 'Components',
  parameters: {
    info: { inline: true },
  },
};

export const ButtonClick = () => <Button title="Click" />;
