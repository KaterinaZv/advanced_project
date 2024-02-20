import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

export const AppRouter = () => (
  <Routes>
    {Object.values(routeConfig).map((value) => (
      <Route
        key={value.path}
        path={value.path}
        element={
          <Suspense fallback={<PageLoader />}>
            <div className='page-wrapper'>{value.element}</div>
          </Suspense>
        }
      />
    ))}
  </Routes>
)
