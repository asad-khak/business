import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contacts from "./pages/Contacts";
import Feedback from "./pages/Feedback";

export default function App() {
  return (
    <Router>
      <nav className="flex justify-center gap-6 p-4 bg-yellow-600 text-white">
        <Link to="/">Головна</Link>
        <Link to="/menu">Меню</Link>
        <Link to="/contacts">Контакти</Link>
        <Link to="/feedback">Обратна зв'язок</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/feedback" component={Feedback} />
      </Switch>
    </Router>
  );
}
