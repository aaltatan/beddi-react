import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";

// layout
import MainLayout from "./layouts/MainLayout";

// pages
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

function App() {
  return (
    <div className="App dark:text-white">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
