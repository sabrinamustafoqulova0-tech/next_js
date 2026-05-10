"use client"
import { store } from '@/src/store/store';
import { Provider } from 'react-redux'

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default function Prividers({ children }) {
  return (
        <Provider store={store}>
        {children}  
        </Provider>
  )
}