import React from "react";
// import Home from "../src/components/home"
// import Home from "./home"
import dynamic from "next/dynamic";

const Home = dynamic(() => import("./home"), {
    loading : () => <div>loading..</div>
})

const Index = () => (
    <div>
        
        <Home />
    </div>
)

export default Index

// const Index = ({title = "Hi from Next js"}) => 
//     <div>
//         <h1>{title}</h1>
//     </div>;


//export default Index;