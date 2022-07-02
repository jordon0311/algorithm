import { useAtom } from "jotai"
import AnimatedPage from "../components/AnimatedPage"
import { dataSetAtom } from "../components/Atoms"
import getCurrentDate from "../utils/getCurrentDate"


const Home = () => {
    const currentDate = getCurrentDate()
    const [dataSet] = useAtom(dataSetAtom)

    function TESTFUNCTION() {
        console.log(dataSet)
    }
    
    return (
        <AnimatedPage>
            <div className="home">
                <div className='leftContainer'>
                    <div className="logoContainer">
                        {currentDate.day}/{currentDate.month}/{currentDate.year}/

                        <button onClick={TESTFUNCTION}>Test</button>
                    </div>
                    <div className="splashContainer">
                        <video autoPlay loop muted id="videoBg">
                            <source src={require('../videos/stressBackground.mp4')} type="video/mp4" />
                            video not working
                        </video>
                    </div>
                </div>
                <div className='rightContainer'>
                    <div className='navbarContainer'>
                        Navbar
                    </div>
                    <div className='splashText'>
                        Splash Text Goes Here
                        Splash Text Goes Here
                        Splash Text Goes Here
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Home