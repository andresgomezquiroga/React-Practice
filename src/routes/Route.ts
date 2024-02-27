import React from "react";

export const Customers = React.lazy(()=> import('../pages/Customers'))
export const Register = React.lazy(() => import('../pages/Register'))
export const Login = React.lazy(() => import('../pages/Login'))
export const Welcome = React.lazy(()=> import('../pages/Welcome'))
export const BaseDashboard = React.lazy(() => import('../pages/layout/BaseDashboard'))


export const routes = [
  {
    path: "/",
    element: Welcome,
  },
  {
    path: "/login",
    element: Login,
  },
  {
    path: "/register",
    element: Register,
  },
  {
    path: "/dashboard",
    element: BaseDashboard,
    children: [
      {
        path: "",
        element: Customers,
      },
    ],
  },
];
