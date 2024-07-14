// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import UserProfile from './pages/UserProfile';
// import ProductManagement from './pages/ProductManagement';
// import CategoryManagement from './pages/CategoryManagement';
// import Layout from './components/Layout/Layout';

// function App() {
//   return (
//     <Provider store={store}>
//       <Router>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route element={<Layout />}>
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/user-profile" element={<UserProfile />} />
//             <Route path="/product-management" element={<ProductManagement />} />
//             <Route path="/category-management" element={<CategoryManagement />} />
//           </Route>
//         </Routes>
//       </Router>
//     </Provider>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserProfile from './pages/UserProfile';
import ProductManagement from './pages/ProductManagement';
import CategoryManagement from './pages/CategoryManagement';
import Layout from './components/Layout/Layout';  // Ensure correct import

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" replace />
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<PrivateRoute element={Dashboard} />} />
            <Route path="user" element={<PrivateRoute element={UserProfile} />} />
            <Route path="product" element={<PrivateRoute element={ProductManagement} />} />
            <Route path="category" element={<PrivateRoute element={CategoryManagement} />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;