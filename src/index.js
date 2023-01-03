import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { allReducers } from './reducers';
import { Provider } from 'react-redux';

// createStoreの第二引数にredux devtoolsのextensionを設定できる
// 開発者画面にcombineReducer()で設定したプロパティ名で表示されている
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* react-reduxのProvider(storeの提供者)を使うことで、全てのコンポーネントでstate,dispatchを利用できる */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
