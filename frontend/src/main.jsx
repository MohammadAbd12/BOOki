import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import UserDashboard from './screens/UserDasboard.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import AdminDashboard from './screens/AdminDashboard.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      <Route element={<PrivateRoute allowedRoles={['user', 'admin']} />}>
        <Route path='/profile' element={<ProfileScreen />} />
        <Route element={<PrivateRoute allowedRoles={['user']} />}>
          <Route path='/user-dashboard' element={<UserDashboard />} />
        </Route>
        <Route element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route path='/admin-dashboard' element={<AdminDashboard />} />
        </Route>
      </Route>
    </Route>
  )
);



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
