import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { RouteProps } from 'react-router-dom'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',

  NOT_FOUND = 'notFound',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    element: <MainPage />,
    path: RoutePath.main,
  },
  [AppRoutes.ABOUT]: {
    element: <AboutPage />,
    path: RoutePath.about,
  },
  [AppRoutes.PROFILE]: {
    element: <ProfilePage />,
    path: RoutePath.profile,
  },
  [AppRoutes.NOT_FOUND]: {
    element: <NotFoundPage />,
    path: RoutePath.notFound,
  },
}
