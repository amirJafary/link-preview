import { createRoot } from 'react-dom/client';

import './style/index.css';
import 'rsuite/dist/rsuite.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
