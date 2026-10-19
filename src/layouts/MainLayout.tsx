import CvPage from '@/pages/CvPage/CvPage';
import ProjectPage from '@/pages/ProjectPage/ProjectPage';
import { Routes, Route } from 'react-router';

function MainLayout() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ProjectPage />} />
        <Route path="/cv" element={<CvPage />} />
      </Routes>
    </main>
  );
}

export default MainLayout;
