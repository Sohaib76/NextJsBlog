import Link from "next/link"

const About = ({title = "Hi from Next js About"}) => 
    <div>
        <h1>{title}</h1>
        <Link href="./home">
            <a>Home</a>
        </Link>
    </div>;


export default About;