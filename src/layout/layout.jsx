import React from "react";
import Nav from "../components/nav/nav";
import RoutesComponent from "./routes";

export default function Layout() {
    return (
        <div>
            <Nav />
            <RoutesComponent />
        </div>
    )
}