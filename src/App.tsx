import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { routes } from "./routes/Route";
import { createElement, Suspense } from "react";
import { Loader } from "./components/Loader";

function App() {
  const router = createBrowserRouter(
    routes.map((route) => ({
      ...route,
      element: createElement(route.element),
      children: route.children?.map((child) => ({
        ...child,
        element: createElement(child.element)
      }))
    }))
  );
  return (
    <>
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>

    </>
  );
}

export default App;
