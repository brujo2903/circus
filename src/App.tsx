import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home';
import { DocsPage } from './pages/docs';
import { LaunchPage } from './pages/launch';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/docs/*" element={<DocsPage />} />
      <Route path="/launch" element={<LaunchPage />} />
    </Routes>
  );
}