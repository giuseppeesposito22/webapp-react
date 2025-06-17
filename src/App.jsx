import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MoviesPage from "./pages/MoviesPage";
import DefaultLayout from "./layouts/DefaultLayout";
import MoviesDetailPage from "./pages/MoviesDetailPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />

            <Route path="/movies">
              <Route index element={<MoviesPage />} />
              <Route path=":id" element={<MoviesDetailPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
