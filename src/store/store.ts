import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './data';

export const store = configureStore({
  reducer: { data: dataReducer },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false });
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
