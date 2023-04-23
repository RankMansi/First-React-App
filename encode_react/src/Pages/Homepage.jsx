import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Counter from "../Components/Counter"

//lorem10 and it will generate 10 words
//for accessing the elements in javascript we need to use curly braces
export default function Homepage(){

    const name="John Doe"
    const age=30
    const address="123 Main St"
    console.log(name)
    return(
        <div>
            <Navbar />
            <h1>My name is {name}</h1>    
            <h1>My age is {age}</h1>
            <h1>I live in a villa {address}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, quibusdam?</p> 
            <Footer />  
            <Counter />
        </div>
    )
}