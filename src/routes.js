import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Countries from './pages/Countries';
import Leagues from './pages/Leagues';
import Teams from './pages/Teams';
import MyTeam from './pages/MyTeam';

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/countries" exact element={<Countries />} />
                <Route path="/countries/:countryId/leagues" exact element={<Leagues />} />
                <Route path="/countries/:countryId/leagues/:leagueId/teams" exact element={<Teams />} />
                <Route path="/countries/:countryId/leagues/:leagueId/teams/:teamId" exact element={<MyTeam />} />
            </Routes>
        </BrowserRouter>
    );
}