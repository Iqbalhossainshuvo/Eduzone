import logo from './logo.svg';
import './App.css';

import router from './Component/Layout/Routes';
import { RouterProvider } from 'react-router-dom';


function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
