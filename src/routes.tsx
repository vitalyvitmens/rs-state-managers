import { RouteObject } from 'react-router-dom'
import Navigation from './layout/Navigation/Navigation.lazy'
import HomePage from './pages/HomePage/HomePage.lazy'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.lazy'
import LoginPage from './pages/LoginPage/LoginPage.lazy'
import RegisterPage from './pages/RegisterPage/RegisterPage.lazy'
import Offline from './pages/Offline/Offline.lazy'

export const routes: RouteObject[] = [
  {
    path: '/*',
    element: <Navigation />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/offline', element: <Offline /> },
]
