import React from 'react'

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
                <h2 className="text-lg text-white-600 flex justify-center mb-12">
                    Cell Phone: 801.641.2989
                    </h2>
                    <h2 className="text-lg text-white-600 flex justify-center mb-12">
                    Email: jady11@gmail.com
                    </h2>
            </section>
        </main>
    )
}