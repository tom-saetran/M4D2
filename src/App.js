import "./App.css"
import MyNav from "./components/MyNav"
import Welcome from "./components/Welcome"
import Latest from "./components/Latest"
import MyFooter from "./components/MyFooter"

function App() {
    return (
        <>
            <MyNav title="Strive Books!" />
            <Welcome />
            <Latest imageUrl="https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg" />
            <MyFooter />
        </>
    )
}

export default App
