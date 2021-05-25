import React from 'react';
import { NavLink } from 'react-router-dom';


export default function NavBar() {
    return (
        <header className="bg-green-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact 
                    activeClassName="text-white"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-black-100 hover:text-white-800 text-4xl font-bold cursive tracking-widest">
                        Jady Tippetts
                    </NavLink>
                    <NavLink to="/post" className="inline-flex items-center py-3 px-3 my-6 rounded text-black-200 hover:text-white-800"
                    activeClassName="text-green-100 bg-green-700"
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project" className="inline-flex items-center py-3 px-3 my-6 rounded text-black-200 hover:text-white-800"
                    activeClassName="text-green-100 bg-green-700"
                    >
                        Projects
                    </NavLink>
                    <NavLink to="/about" className="inline-flex items-center py-3 px-3 my-6 rounded text-black-200 hover:text-white-800"
                    activeClassName="text-green-100 bg-green-700"
                    >
                        About Me
                    </NavLink>
                    <NavLink to="/contact" className="inline-flex items-center py-3 px-3 my-6 rounded text-black-200 hover:text-white-800"
                    activeClassName="text-green-100 bg-green-700"
                    >
                        Contact
                    </NavLink>
                    
                </nav>
            </div>
        </header>
    )
}