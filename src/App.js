import React from 'react';
import { UsersContainer } from './containers/UsersContainer';
import './styles/App.scss';

function App() {
  return (
    <div className="app-wrapper">
      <div className="app-inner">
        <div className="content">
          <UsersContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
