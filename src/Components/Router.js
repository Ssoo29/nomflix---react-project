import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from 'Routes/Home';
import Search from 'Routes/Search';
import TV from 'Routes/TV';
import Header from "Components/Header";


const CustomRouter = () => (
  <Router>
    <>
    <Header/>
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/search"  component={Search} />
    <Route path="/tv" exact component={TV} />
    <Redirect from="*" to="/" /> 
    </Switch>
    </>
  </Router>
)

export default CustomRouter;

