import React from 'react';
import './App.css';
import { Routes } from './components/Routes';
import { AppProvider } from './providers/AppProvider';


export const App = () => {
  return (
   <AppProvider>
    <Routes/>
   </AppProvider>
  );
};

export default App;
