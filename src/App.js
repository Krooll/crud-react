import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/views/Header/Header';
import HomePage from './components/pages/HomePage/HomePage';
import AddPostPage from './components/pages/AddPostPage/AddPostPage';
import EditPostPage from './components/pages/EditPostPage/EditPostPage';
import SinglePostPage from './components/pages/SinglePostPage/SinglePostPage';
import CategoriesPage from './components/pages/CategoriesPage/CategoriesPage';
import AboutPage from './components/pages/AboutPage/AboutPage';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import Footer from './components/views/Footer/Footer';
import PostByCategoriesPage from "./components/pages/PostByCategoriesPage/PostByCategoriesPage";

const App = () => {
  return (
      <BrowserRouter>
        <Header />
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/add" element={<AddPostPage />} />
          <Route path="/post/edit/:id" element={<EditPostPage />} />
          <Route path="/post/:id" element={<SinglePostPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:category" element={<PostByCategoriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
