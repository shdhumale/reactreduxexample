import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer'
import HookCakeContainer from './components/HookCakeContainer'
import IceCreamContainer from './components/IceCreamContainer';
import HookIceCreamContainer from './components/HookIceCreamContainer';
import NewCakeContainerUseStagePayload from './components/NewCakeContainerUseStagePayload';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HookCakeContainer />
        <IceCreamContainer />
        <HookIceCreamContainer />
        <NewCakeContainerUseStagePayload />
      </div>
    </Provider>
  );
}

export default App;
