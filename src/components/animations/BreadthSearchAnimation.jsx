import { useAtom } from "jotai"
import { useEffect, useState } from "react"
import { useSpring, animated, config, } from "react-spring"
import { animationAtom, scrollAtom } from "../Atoms"


const BreadthSearchAnimation = ({ Obj, initialID, result = [], search = '' }) => {
    const [mid, setMid] = useState(initialID)
    const [low, setLow] = useState(initialID)
    const [high, setHigh] = useState([0, Obj.length - 1])
    const resultElement = [0, result.slice(0, -1)].flat()
    const [[prev, curr], setScroll] = useAtom(scrollAtom)
    const [[isPaused, isReset], setAnimation] = useAtom(animationAtom)
    const [flip, setFlip] = useState(false)
    const styles = useSpring({
        pause: isPaused,
        from: { y: prev, },
        y: curr,
        delay: 200,
        config: config.gentle,
        onRest: () => handleRest(mid),
        onStart: () => handleStart(),
    })
    const shapeStyle = useSpring({
        pause: (isPaused || isReset) ? true : false,
        delay: 0,
        from: { left: flip ? '5%' : '20%' },
        to: { left: flip ? '20%' : '5%' },
        config: config.wobbly,
    })

    useEffect(() => {
        if (!isReset) {
            setMid(initialID)
            setHigh([0, Obj.length - 1])
            setScroll([32, 16])
            return (
                setAnimation([false, true])
            )
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Obj, result])

    function incrementScroll() {
        if (mid.toString() === initialID.toString()) {
            setScroll([curr, curr - 32])
        } else if(low[1] >= high[1]) {
            setScroll([curr, 16])
        } else if (low.toString() === initialID.toString()) {
            setScroll([curr, (high[1]) * -16])
        } else if (Obj[mid[1]] >= search) {
            setScroll([curr, -16 - (low[1] + Math.floor((mid[1] - 1 - low[1]) / 2)) * 32])
        } else if (Obj[mid[1]] <= search) {
            setScroll([curr, -16 - (mid[1] + 1 + Math.floor((high[1] - mid[1] - 1) / 2)) * 32])
        }
    }

    function incrementID(initial) {
        const arr = Array.from(initial)

        if (mid.toString() === resultElement.toString()) {
            document.getElementById(mid).className = 'animationRow result'
            setAnimation([true, false])
            return
        }
        if (document.getElementById(mid) !== null) {
            document.getElementById(mid).className = 'animationRow finished'
        }
        if (document.getElementById(mid) === null) {
            const finishedElements = document.getElementsByClassName('animationRow')
            Object.keys(finishedElements).forEach(i => {
                finishedElements[i].className = 'animationRow'
            })
        }
        if (arr.length > 2) {
            arr.pop()
            setLow(initial)
            incrementID(arr)
        } else if (arr.toString() !== mid.toString()) {
            setMid(arr)
            document.getElementById(arr).className = 'animationRow active'
        } else if (low.toString() === initialID.toString()) {
            setLow(mid)
            incrementID([0, Math.floor((high[1]) / 2)])
        } else if (low.toString() >= high.toString()) {
            setLow(initialID)
            setHigh([0, Obj.length - 1])
            setMid(initialID)
        } else if (Obj[arr[1]] >= search) {
            //search is less than mid point
            Obj.forEach((value, index) => {
                if (index > arr[1]) {
                    document.getElementById([0, index]).className = 'animationRow finished'
                } return value
            })
            setHigh([0, arr[1] - 1])
            incrementID([0, low[1] + Math.floor((arr[1] - 1 - low[1]) / 2)])
        } else if (Obj[arr[1]] <= search) {
            //search is greater than mid point
            Obj.forEach((value, index) => {
                if (index < arr[1]) {
                    document.getElementById([0, index]).className = 'animationRow finished'
                } return value
            })
            setLow([0, arr[1] + 1])
            incrementID([0, arr[1] + 1 + Math.floor((high[1] - arr[1] - 1) / 2)])
        } else {
            setLow(initialID)
            setHigh([0, Obj.length - 1])
            incrementID(initialID)
        }
    }



    function handleRest(activeElement) {
        if (isReset) {
            if (prev === 16) {
                setAnimation([true, false])
                // setActiveElement(initialID)
                incrementScroll()
            } else {
                // console.log(initialID)
                setMid(initialID)
                setHigh([0, Obj.length - 1])
                setScroll([16, -16])
            }
        } else {
            incrementScroll()
        }
        setFlip(true)
    }

    function handleStart() {
        incrementID(mid)
        setFlip(false)
    }

    function displayObjectMap(input, depth = [0]) {
        const entryArray = Object.entries(input)
        return entryArray.map(([key, value], index) => {
            if (typeof value === 'object') {
                return (
                    <div className="animationRow" key={key}
                        id={[depth, index]} >
                        <animated.div
                            className='animatedKey embeded' >
                            {displayObjectMap(value, [depth, index])}
                        </animated.div>
                        <animated.div
                            className='animatedKey' >
                            :{(key === index.toString()) ? key : key + ' : ' + index}
                        </animated.div>
                    </div>
                )
            } else return (
                <div className="animationRow" key={key}
                    id={[depth, index]} >
                    <animated.div
                        className='animatedValue' >
                        {value}
                    </animated.div>
                    <animated.div
                        className='animatedKey child' >
                        :{(key === index.toString()) ? key : key + ' : ' + index}
                    </animated.div>
                </div>
            )
        })
    }

    return (
        <div className="animationWindow">
            <animated.div className='animationLeft' style={shapeStyle}>
                <button onClick={() => incrementID(mid)}>{prev},{curr},{isPaused + ''},{isReset + ''}</button>
                <button onClick={() => incrementScroll()}>{low}, {mid}, {high}</button>
                {/* <button onClick={() => console.log([0, Math.floor((high[1]) / 2)])}>Log</button> */}
            </animated.div>
            <animated.div className="objectList" style={styles} >
                {displayObjectMap(Obj)}
            </animated.div>
        </div>
    )
}

export default BreadthSearchAnimation