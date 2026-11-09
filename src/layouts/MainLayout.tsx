import Header from '@/components/Header/Header';
import CvPage from '@/pages/CvPage/CvPage';
import ProjectPage from '@/pages/ProjectPage/ProjectPage';
import { Routes, Route } from 'react-router';
import styles from './main-layout.module.scss';

function MainLayout() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<ProjectPage />} />
          <Route path="/cv" element={<CvPage />} />
        </Routes>
      </main>
    </>
  );
}

export default MainLayout;
