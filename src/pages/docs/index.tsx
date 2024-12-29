import { Routes, Route } from 'react-router-dom';
import { DocsLayout } from "@/components/docs/layout";
import { Overview } from './overview';
import { Philosophy } from './philosophy';
import { MissionVision } from './mission-vision';
import { Platform } from './platform';
import { Framework } from './framework';
import { FutureSteps } from './future-steps';

export function DocsPage() {
  return (
    <DocsLayout>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/mission-vision" element={<MissionVision />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/framework" element={<Framework />} />
        <Route path="/future-steps" element={<FutureSteps />} />
      </Routes>
    </DocsLayout>
  );
}