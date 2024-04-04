import { RouteProps } from 'react-router-dom'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { ArticlePage } from 'pages/ArticlesPage'
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'articleDetails',

  NOT_FOUND = 'notFound',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/',
  [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
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
    path: `${RoutePath.profile}:id`,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    element: <ArticlePage />,
    path: RoutePath.articles,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    element: <ArticleDetailsPage />,
    path: `${RoutePath.articleDetails}:id`,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    element: <NotFoundPage />,
    path: RoutePath.notFound,
  },
}
