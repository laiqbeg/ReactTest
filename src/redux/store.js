// import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
// import { thunk } from 'redux-thunk';
// import authReducer from './reducers/authReducer';
// import userReducer from './reducers/userReducer';
// import productReducer from './reducers/productReducer';
// import categoryReducer from './reducers/categoryReducer';

// const rootReducer = combineReducers({
//     auth: authReducer,
//     user: userReducer,
//     product: productReducer,
//     category: categoryReducer,
// });

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;


import { legacy_createStore as createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { thunk } from 'redux-thunk';
import authReducer from './reducers/authReducer';
import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';
import categoryReducer from './reducers/categoryReducer';
import globalReducer from './reducers/globalReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    product: productReducer,
    category: categoryReducer,
    globalState: globalReducer
});

// Check if Redux DevTools Extension is installed, otherwise fallback to compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
