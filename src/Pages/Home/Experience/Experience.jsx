

const Experience = () => {
    return (
        <div className="max-w-7xl mx-auto py-28">
            <h2 className="text-text-prime text-2xl font-bold uppercase text-center">My Experience</h2>
            <hr className='w-40 mt-1 mb-20 mx-auto' />
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:px-0 px-5 gap-10">
                <div className="border-2 border-text-prime px-8 py-16 bg-bg-prime rounded-2xl">
                    <h3 className="text-2xl font-bold text-center">HTML/CSS/JavaScript</h3>
                    <ul className="space-y-5 mt-5">
                        <li className="flex">
                            <p><span className="underline">HTML </span>: Proficiency in creating the structure of web pages, understanding semantic HTML, and using HTML5 features.</p>
                        </li>
                        <li className="flex">
                            <p><span className="underline">CSS </span>: Ability to style web pages, understanding selectors, specificity, and knowledge of CSS frameworks like Bootstrap, Tailwind CSS.</p>
                        </li>
                        <li className="flex">
                            <p><span className="underline">JavaScript </span>: Solid understanding of the language, including ES6 features, asynchronous programming, and familiarity with JavaScript frameworks and libraries.</p>
                        </li>
                    </ul>
                    <p></p>
                </div>
                <div className="border-2 border-text-prime px-8 py-16 bg-bg-prime rounded-2xl">
                    <h3 className="text-2xl font-bold text-center">React JS</h3>
                    <ul className="space-y-5 mt-5">
                        <li className="flex">
                            <p><span className="underline">Component-Based Architecture </span>: Understanding the concept of reusable components and how to structure a React application.</p>
                        </li>
                        <li className="flex">
                            <p><span className="underline">State Management </span>: Experience with managing state using Reacts state and props, and potentially using state management libraries like Redux.</p>
                        </li>
                        <li className="flex">
                            <p><span className="underline">React Router </span>: Navigation in a React application using React Router for handling client-side routing.</p>
                        </li>
                    </ul>
                    <p></p>
                </div>
                <div className="border-2 border-text-prime px-8 py-16 bg-bg-prime rounded-2xl">
                    <h3 className="text-2xl font-bold text-center">Node JS</h3>
                    <ul className="space-y-5 mt-5">
                        <li className="flex">
                            <p><span className="underline">Server Setup </span>: Ability to set up a basic Node.js server using the built-in http module or using frameworks like Express.</p>
                        </li>
                        <li className="flex">
                            <p><span className="underline">Asynchronous Programming </span>: Understanding the event-driven, non-blocking nature of Node.js and proficiency in asynchronous programming using callbacks, Promises, and async/await.</p>
                        </li>
                    </ul>
                    <p></p>
                </div>
                <div className="border-2 border-text-prime px-8 py-16 bg-bg-prime rounded-2xl">
                    <h3 className="text-2xl font-bold text-center">Express JS</h3>
                    <ul className="space-y-5 mt-5">
                        <li className="flex">
                            <p><span className="underline">Routing </span>: Defining and handling routes in an Express application.</p>
                        </li>
                        <li className="flex">
                            <p><span className="underline">Middleware </span>: Understanding and using middleware functions for request processing.</p>
                        </li>
                        <li className="flex">
                            <p><span className="underline">Error Handling </span>: Implementing error handling mechanisms in an Express application.</p>
                        </li>
                    </ul>
                    <p></p>
                </div>
                <div className="border-2 border-text-prime px-8 py-16 bg-bg-prime rounded-2xl">
                    <h3 className="text-2xl font-bold text-center">MongoDB</h3>
                    <ul className="space-y-5 mt-5">
                        <li className="flex">
                            <p><span className="underline">Data Modeling </span>: Designing MongoDB schemas based on the applications data requirements.</p>
                        </li>
                        <li className="flex">
                            <p><span className="underline">CRUD Operations </span>: Proficiency in performing Create, Read, Update, and Delete operations using MongoDB.</p>
                        </li>
                        <li className="flex">
                            <p><span className="underline">Error Handling </span>: Implementing error handling mechanisms in an Express application.</p>
                        </li>
                    </ul>
                    <p></p>
                </div>
                <div className="border-2 border-text-prime px-8 py-16 bg-bg-prime rounded-2xl">
                    <h3 className="text-2xl font-bold text-center">RESTful API Design</h3>
                    <ul className="space-y-5 mt-5">
                        <li className="flex">
                            <p><span className="underline">Resource Endpoints </span>: Designing clear and consistent RESTful API endpoints.</p>
                        </li>
                        <li className="flex">
                            <p><span className="underline">HTTP Methods </span>: Understanding and appropriately using HTTP methods (GET, POST, PUT, DELETE).</p>
                        </li>
                        <li className="flex">
                            <p><span className="underline">Request and Response Handling </span>: Processing incoming requests and sending appropriate responses.</p>
                        </li>
                    </ul>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default Experience;