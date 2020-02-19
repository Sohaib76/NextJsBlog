import React, {Component} from "react";
import Head from "./components/head"
import Link from "next/link"
import Header from "./components/header"
import NavBar from "./components/navbar"

//npx create-next-app myapp

//npm install @zeit/next-sass
//npm install --save config next-config
//npm install --save @zeit/next-sass node-sass

export default class Home extends Component{
    render(){
        return(
            <div className="Home" style={layoutStyle}>
                <Head title="Home" description="Home description" 
                title="This is Home Title" url="http://localhost:3000/"/>
                <Header/>
                <div style={content}>
                    <h1 className="title">This is Home Page.</h1>
                    <Link href="./contact">
                        <a>Contact</a>
                    </Link>
                    <br />
                    <Link href="./blog">
                        <a>Blog</a>
                    </Link>
                </div>
                
                <NavBar/>
            </div>
        )
    }
}

const layoutStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    margin: 0,
    padding: 0,
    fontFamily: "Segoe UI" ,
    // -webkit-font-smoothing: antialiased;
    // -moz-osx-font-smoothing: grayscale;
 
};
const content = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
}
