import React from 'react';
import { Provider } from 'react-redux';
import { store, sagaMiddleware } from './src/config/storeRedux';
import { rootSaga } from './src/reducers';
import initI18nService from './src/config/i18n';
import 'normalize.css';
import 'modern-normalize';
import 'react-datepicker/dist/react-datepicker.css';

export const wrapRootElement = ({ element }) => {
  const reduxStore = store();
  sagaMiddleware.run(rootSaga);
  initI18nService();
  return <Provider store={reduxStore}>{element}</Provider>;
};
