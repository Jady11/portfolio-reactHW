import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        
        <header className="bg-green-600">
            
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    {/* <NavLink to="/" exact 
                    activeClassName="text-white"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                        Jady Tippetts
                    </NavLink to="/post" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                    activeClassName="text-red-100 bg-red-700"
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink to="/about" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                    activeClassName="text-red-100 bg-red-700"
                    >
                        About Me
                    </NavLink> */}
                    
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/jady-tippetts-b7a5b1106/" className="mr-4" target="_blank" fgColor="#fff"  style={{ height: 40, width: 40 }} />
                    <SocialIcon url="https://github.com/Jady11" className="mr-4" target="_blank" fgColor="#fff" bgColor="black" style={{ height: 40, width: 40 }} />
                    <SocialIcon url="https://www.facebook.com/jady.tippetts/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 40, width: 40 }} />
                    <SocialIcon url="https://www.instagram.com/jady11/" className="mr-4" target="_blank" fgColor="#fff" bgColor="black" style={{ height: 40, width: 40 }} />
                    <SocialIcon url="https://drive.google.com/file/d/11TomakbNUNkVqg_ao0NAoE_ivL4-sCnj/view?usp=sharing" className="mr-4" target="_blank" fgColor="#fff" bgColor="black" style={{ height: 40, width: 40 }} />
                    
                </div>
            </div>
        </header>
        )
    }
export default Footer;