import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppUserRoutes } from './components/App-UserRoutes';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store,  persistor } from './redux/store'; 
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, ColorModeScript} from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <ChakraProvider>
      <ColorModeScript initialColorMode='light' />
      <Provider store={store}>   
       <PersistGate loading={null} persistor={persistor}>
         <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <AppUserRoutes />   
        </BrowserRouter>
        </PersistGate>    
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
  
);
