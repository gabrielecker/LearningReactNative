import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import List from './components/List';
import ItemDetail from './components/ItemDetail';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="list" component={List} title="Lista de Posts" initial />
      <Scene key="postDetail" component={ItemDetail} title="Ver Post" />
    </Router>
  );
};

export default RouterComponent;
