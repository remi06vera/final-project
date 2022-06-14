import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './components/Navbar/NavbarDesktop'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import MemberLogin from './pages/MemberLogin'
import Shop from './pages/Shop'
import ReserveList from './pages/ReserveList'
import MemberCenter from './pages/MemberCenter'
import Groups from './pages/Groups'
import NotFoundPage from './pages/NotFoundPage'
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <MemberLogin />
        </Route>
        <Route path="/memberCenter">
          <MemberCenter />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/group">
          <Groups />
        </Route>
        <Route path="/reserveList">
          <ReserveList />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
