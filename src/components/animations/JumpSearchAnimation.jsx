import { useAtom } from "jotai"
import { useEffect, useState } from "react"
import { useSpring, animated, config, } from "react-spring"
import { animationAtom, scrollAtom } from "../Atoms"


const JumpSearchAnimation = ({ Obj, initialID, result = [], search = '' }) => {
    const [activeElement, setActiveElement] = useState(initialID)
    const [prevElement, setPrevElement] = useState([initialID])
    const resultElement = [0, result.slice(0, -1)].flat()
    const step = Math.floor(Math.sqrt(Obj.length))
    const [[prev, curr], setScroll] = useAtom(scrollAtom)
    const [[isPaused, isReset], setAnimation] = useAtom(animationAtom)
    const [flip, setFlip] = useState(false)
    const styles = useSpring({
        pause: isPaused,
        from: { y: prev, },
        y: curr,
        delay: 200,
        config: config.gentle,
        onRest: () => handleRest(activeElement),
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
            setActiveElement(initialID)
            setScroll([32, 16])
            return (
                setAnimation([false, true])
            )
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Obj, result])

    function incrementScroll() {
        if (activeElement.toString() === initialID.toString()) {
            setScroll([curr, curr - 32])
        } else if (prevElement[1] > activeElement[1]) {
            if (prevElement[1] === activeElement[1] + 1 && activeElement[1] !== resultElement[1]) {
                setScroll([curr, 16])
            } else setScroll([curr, curr - 32])
        } else if (Obj[activeElement[1]] > search && Obj[0] < search) {
            if (prevElement[1] + 1 === activeElement[1]) {
                setScroll([curr, 16])
            } else {
                setScroll([curr, ((prevElement[1] + 1) * -32) - 16])
            }
        } else if (document.getElementById([0, activeElement[1] + 1]) === null) {
            setScroll([curr, 16])
        } else if (document.getElementById([0, activeElement[1] + step]) !== null) {
            setScroll([curr, curr - (32 * step)])
        } else {
            setScroll([curr, ((Obj.length - 1) * -32) - 16])
        }
    }

    function incrementID(initial) {
        const arr = Array.from(initial)

        if (activeElement.toString() === resultElement.toString()) {
            document.getElementById(activeElement).className = 'animationRow result'
            setAnimation([true, false])
            return
        }
        if (document.getElementById(activeElement) !== null) {
            document.getElementById(activeElement).className = 'animationRow finished'
        }
        if (document.getElementById(activeElement) === null) {
            const finishedElements = document.getElementsByClassName('animationRow')
            Object.keys(finishedElements).forEach(i => {
                finishedElements[i].className = 'animationRow'
            })
        }
        if (arr.length > 2) {
            arr.pop()
            setPrevElement(initial)
            incrementID(arr)
        } else if (arr.toString() !== activeElement.toString()) {
            setActiveElement(arr)
            document.getElementById(arr).className = 'animationRow active'
        } else if (prevElement[1] > initial[1]) {
            if (prevElement[1] === initial[1] + 1) {
                setPrevElement(initialID)
                setActiveElement(initialID)
            } else incrementID([0, arr[1] + 1])
        } else if (Obj[arr[1]] > search && Obj[0] < search) {
            setPrevElement(initial)
            incrementID([0, prevElement[1] + 1])
        } else if (document.getElementById([0, arr[1] + 1]) === null) {
            setPrevElement(initialID)
            setActiveElement(initialID)
        } else if (document.getElementById([0, arr[1] + step]) !== null) {
            setPrevElement(initial)
            incrementID([0, arr[1] + step])
        } else {
            setPrevElement(initial)
            incrementID([0, Obj.length - 1])
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
                setActiveElement(initialID)
                setScroll([16, -16])
            }
        } else {
            incrementScroll()
        }
        setFlip(true)
    }

    function handleStart() {
        incrementID(activeElement)
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
                {/* {prev},{curr},{isPaused + ''},{isReset + ''},{prevElement}, {activeElement} */}
                {/* <button onClick={() => incrementID(activeElement)}>test</button> */}
                {/* <button onClick={() => incrementScroll()}>test</button> */}
            </animated.div>
            <animated.div className="objectList" style={styles} >
                {displayObjectMap(Obj)}
            </animated.div>
        </div>
    )
}

export default JumpSearchAnimation