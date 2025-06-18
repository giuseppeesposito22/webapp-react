import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import { useLoader } from "../contexts/LoaderContext";

export default function DefaultLayout() {
  const { isLoading } = useLoader();

  return (
    <>
      <Loader show={isLoading} />
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
