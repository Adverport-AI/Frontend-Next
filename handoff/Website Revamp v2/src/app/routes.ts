import { createBrowserRouter } from 'react-router';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import BrandsPage from './components/BrandsPage';
import FeaturesPage from './components/FeaturesPage';
import PremiumPage from './components/PremiumPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import BlogPostPage from './components/BlogPostPage';
import AboutPage from './components/AboutPage';
import FAQPage from './components/FAQPage';
import HelpCenterPage from './components/HelpCenterPage';
import LegalPage from './components/LegalPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'markalar', Component: BrandsPage },
      { path: 'ozellikler', Component: FeaturesPage },
      { path: 'premium', Component: PremiumPage },
      { path: 'blog', Component: BlogPage },
      { path: 'blog/:slug', Component: BlogPostPage },
      { path: 'iletisim', Component: ContactPage },
      { path: 'hakkimizda', Component: AboutPage },
      { path: 'sss', Component: FAQPage },
      { path: 'yardim-merkezi', Component: HelpCenterPage },
      { path: 'yasal/:slug', Component: LegalPage },
    ],
  },
]);
