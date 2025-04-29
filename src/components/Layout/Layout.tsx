// components/Layout/Layout.tsx

import "../../style.css";
import { Header } from "../Header/Header";
import { Nav } from '../Nav/Nav';
import { Footer } from '../Footer/Footer';

import { Outlet } from "react-router-dom"
export function Layout(){
    return(
        <div className="grid-container">
        <Header/>
        <Nav/>
        <main className="main">
        <Outlet/>
        </main>
        <Footer/>
        </div>
    )
}