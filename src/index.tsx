import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Apps } from './App';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <Apps name="StackBlitz" />
  </StrictMode>
);
