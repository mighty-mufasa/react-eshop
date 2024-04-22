import Home from './components/Home/Home'
import App from './App'
import Store from './components/Store/Store'

export const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <h1>404 error, page don&apos;t found</h1>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/store',
        element: <Store />,
      },
    ],
  },
]
