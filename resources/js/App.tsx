import './bootstrap';
import '../css/app.css';
import React from 'react';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { ChakraProvider } from '@chakra-ui/react';
import { createRoot } from 'react-dom/client';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import FileUploadContextProvider from './Contexts/FileUploadContext';

createInertiaApp({
  resolve: (name) => {
    return resolvePageComponent(
      `./Pages/${name}.tsx`,
      import.meta.glob('./Pages/**/*.tsx')
    );
  },
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(
      <ChakraProvider>
        <FileUploadContextProvider>
          <App {...props} />
        </FileUploadContextProvider>
      </ChakraProvider>
    );
  },
}).then(null);

InertiaProgress.init({ color: '#4B5563' });
