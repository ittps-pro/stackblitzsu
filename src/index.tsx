import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { Apps } from './App';

const container = document.getElementById('app')
const root = createRoot(container);

root.render(
  <StrictMode>
    <Apps name="TSD" />
  </StrictMode>
);
