import { configure } from '@storybook/react';
configure(require.context('../app/containers/TableContent', true, /\.stories\.js$/), module);
