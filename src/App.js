import React from 'react';
import './App.css';
import simpleRestProvider from 'ra-data-simple-rest';
import { Admin, Resource } from 'react-admin';
import {CustomerCreate,CustomerEdit,CustomerList} from './Customer';

function App() {
  return (
    <div className="App">
     <Admin dataProvider={simpleRestProvider('https://localhost:44315/api')}>
        <Resource name="Customers" list={CustomerList} edit={CustomerEdit} create={CustomerCreate} />
    </Admin>
    </div>
  );
}

export default App;
