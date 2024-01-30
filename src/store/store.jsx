import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import authReducer from './slices/authSlice';


const rootReducer = combineReducers({
    auth: persistReducer({ key: 'auth', storage }, authReducer)
});

const persistConfig = {
    key: 'root',
    storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
    reducer: {
        root: persistedReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
});

export const persistor = persistStore(store);

export default store;
