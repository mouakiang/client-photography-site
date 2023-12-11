import React from "react";
import {Route, Routes} from 'react-router-dom';
import About from "../components/about/about";
import Contact from "../components/contact/contact";
import Gallery from "../components/gallery/gallery";
import Home from "../components/home/home";
import NotFound from "./notFound";

export default function RoutesComponent() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}