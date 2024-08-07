import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Pages/Home/Home";
import { routes } from "./Routes";
import { Search } from "./Components/Pages/Search/Search";
import { Detail } from "./Components/Pages/Detail/Detail";
import { SignUp } from "./Components/Pages/LoginPage/SignUp";
import { Login } from "./Components/Pages/LoginPage/Login";
import { PageNotFound } from "./PageNotFound";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.Search} element={<Search />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.Login} element={<Login />} />
        <Route path={routes.SignUp} element={<SignUp />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
