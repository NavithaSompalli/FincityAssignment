import {Switch, Route, BrowserRouter} from 'react-router-dom'

import './App.css'

import ProjectHomeRoute from './components/ProjectHomeRoute'
import AddRoute from './components/AddRoute'

// Replace your code here
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ProjectHomeRoute} />
      <Route exact path="/projects" component={AddRoute} />
    </Switch>
  </BrowserRouter>
)

export default App
