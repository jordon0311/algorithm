import { useAtom } from "jotai"
import { useEffect, useRef, useState } from "react"
import { useSpring, animated, config, } from "react-spring"
import { animationAtom, scrollAtom } from "../Atoms"


const LinearSearchAnimation = ({ Obj, initialID, result = [] }) => {
    const [activeElement, setActiveElement] = useState(initialID)
    const resultElement = [0, result.slice(0, -1)].flat()
    const animationRef = useRef()
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
        // console.log('mount')
        setActiveElement(initialID)
        setScroll([curr, 16])
        return (
            // console.log('unmount'),
            setAnimation([false, true])
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Obj])

    function incrementScroll() {
        if (curr > 32 - animationRef.current.offsetHeight) {
            setScroll([curr, curr - 32])
        } else setScroll([curr, 16])
    }

    function incrementID(initial) {
        const arr = Array.from(initial)

        if (resultElement.toString() === activeElement.toString()) {
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

        if (arr[0] !== 0) {
            // console.log('reset')
            setActiveElement(initialID)
        } else if (document.getElementById(
            [arr]
        ) === null) {
            arr.pop()
            incrementID(arr)
        } else if (arr.toString() !== activeElement.toString()) {
            setActiveElement(arr)
            document.getElementById(arr).className = 'animationRow active'
        } else if (document.getElementById(
            [arr, 0]
        ) !== null) {
            arr.push(0)
            incrementID(arr)
        } else if (document.getElementById(
            [arr.slice(0, -1), arr[arr.length - 1] + 1]
        ) !== null) {
            arr[arr.length - 1]++
            arr.push(0)
            incrementID(arr)
        } else {
            arr.pop()
            arr[arr.length - 1]++
            arr.push(0)
            incrementID(arr)
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
            </animated.div>
            <animated.div className="objectList" style={styles} ref={animationRef} >
                {displayObjectMap(Obj)}
            </animated.div>
        </div>
    )
}

export default LinearSearchAnimation