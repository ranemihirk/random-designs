import React, { lazy, Suspense, useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Layout = lazy(
  () => import(/* webpackChunkName: "VidtuRouter" */ "./Core/Layout")
);
const Home = lazy(
  () => import(/* webpackChunkName: "VidtuRouter" */ "./Default/Home")
);
const Design1 = lazy(
  () => import(/* webpackChunkName: "VidtuRouter" */ "./Design1/Design1")
);
const Error = lazy(
  () => import(/* webpackChunkName: "VidtuRouter" */ "./Default/Error")
);

export default function VidtuRouter() {
  const user = null;
  const router = createBrowserRouter([
    {
      element: (
        <Suspense fallback={<>...</>}>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          path: "",
          element: (
            <Suspense fallback={<>...</>}>
              <Home />
            </Suspense>
          ),
        },
        {
            path: "design1",
            element: (
              <Suspense fallback={<>...</>}>
                <Design1 />
              </Suspense>
            ),
          },
      ],
      errorElement: (
        <Suspense fallback={<>...</>}>
          <Error />
        </Suspense>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
