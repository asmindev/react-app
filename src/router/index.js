import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Calculator from '../views/kalkulator'
import Counter from '../views/Counter'
import Roster from '../views/Roster'
import Math from '../views/Math'

function Router () {
  return (
    <Switch>
      <Route exact path="/">
        <div>ini home</div>
      </Route>
      <Route path="/kal">
        <Calculator />
      </Route>
      <Route path="/counter">
        <Counter />
      </Route>
      <Route path="/roster">
        <Roster />
      </Route>
      <Route path="/math" component={Math} />
    </Switch>
  )
}
export default Router
