import React from 'react';
import { Provider } from 'react-redux';
import { store, sagaMiddleware } from './src/config/storeRedux';
import { rootSaga } from './src/reducers';
import initI18nService from './src/config/i18n';

export const wrapRootElement = ({ element }) => {
  const reduxStore = store();
  sagaMiddleware.run(rootSaga);
  initI18nService();
  return <Provider store={reduxStore}>{element}</Provider>;
};
export function onRenderBody({ setHeadComponents }) {
  setHeadComponents([<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />]);
}
