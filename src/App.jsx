import {AuthContextProvider} from './context/AuthContext'
import {lazy, Suspense} from 'react'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
const Layout = lazy(() => import('./Layout/Layout'))
const ProtectedHomePage = lazy(() => import('./Protected/ProtectedHomePage/ProtectedHomePage'))
const ProtectedMovieDetail = lazy(() => import('./Protected/ProtectedMovieDetail/ProtectedMovieDetail'))
const ProtectedSignUp = lazy(() => import('./Protected/ProtectedSignUp/ProtectedSignUp'))
const PrivateBrowse = lazy(() => import('./Protected/PrivateBrowsePage/PrivateBrowse'))
const Loader = lazy(() => import('./components/Loader/Loader'))
const WatchList = lazy(() =>import('./pages/WatchList/WatchList'))
const MovieDetail = lazy(() => import('./pages/WatchList/MovieDetail/MovieDetail'))
const Friends = lazy(() =>import('./pages/Friends/Friends'))
const Parties = lazy(() =>import('./pages/Friends/Parties'))
const Home = lazy(() =>import('./pages/home/Home'))
const Login = lazy(() =>import('./pages/login/Login'))
const Signup = lazy(() =>import('./pages/signup/Signup'))
const Error = lazy(() =>import('./pages/Error/Error'))
const Browse = lazy(() =>import('./pages/browse/Browse'))
const Discover = lazy(() =>import('./pages/discover/Discover'))
const CommingSoon = lazy(() =>import('./pages/comming-soon/CommingSoon'))
const Community = lazy(() =>import('./pages/community/Community'))

function App() {
  const token = localStorage.getItem('token')

  return (
    <AuthContextProvider>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<ProtectedHomePage />}>
              <Route path='/' element={<Home />}/>
            </Route>
            <Route path='/signin' element={<Login />}/>
            <Route element={<ProtectedSignUp />}>
              <Route path='/signup' element={<Signup />}/>
            </Route>
            <Route element={<PrivateBrowse />}>
              <Route element={<Layout />}>
                <Route path='/browse' element={token && <Browse />}/>
                <Route path='/discover' element={<Discover />}/>
                <Route path='/community' element={<Community />} />
                <Route path='/comming-soon' element={<CommingSoon />}/>
                <Route path='/watch-list'element={<WatchList />} />
                <Route path='/friends' element={<Friends />} />
                <Route path='/parties' element={<Parties />}/>
                <Route element={<ProtectedMovieDetail />}>
                  <Route path='watch-list/:id' element={<MovieDetail />} />
                </Route>
              </Route>
            </Route>
            <Route path='*' element={<Error />} />
          </Routes>
        </Suspense>
      </Router>
    </AuthContextProvider>
  )
}

export default App
