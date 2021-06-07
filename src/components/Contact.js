import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

// const Contact = () => {
//     return (
//         <div className="container">
//         <h1></h1>
//         </div>
//     )
// }

// export default Contact
export default function Home() {
  return (
    <main className="bg-gray-500 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My Contact</h1>
        <div className="text-lg text-white-600 flex justify-center mb-12">
        <a href="801-641-2989">Cell Phone: 801.641.2989</a> 
          
        </div>
        <div className="text-lg text-white-600 flex justify-center mb-12">
          <a href="jady11@gmail.com">Email: jady11@gmail.com</a>
        </div>
        <div className="text-lg text-white-600 flex justify-center mb-12">
          <a href="https://drive.google.com/file/d/11TomakbNUNkVqg_ao0NAoE_ivL4-sCnj/view?usp=sharing">
            Resume:{" "}
          </a>
          <SocialIcon
            url="https://drive.google.com/file/d/11TomakbNUNkVqg_ao0NAoE_ivL4-sCnj/view?usp=sharing"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            bgColor="black"
            style={{
              height: 40,
              width: 40,
            }}
          />
        </div>
      </section>
    </main>
  );
}
