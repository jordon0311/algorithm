import AlgMenu from "../components/AlgMenu"
import displayObject from "../utils/displayObject"
import { useAtom } from "jotai"
import { dataSetAtom, searchAtom } from "../components/Atoms"
import Selector from "../components/Selector"
import { Fragment, useState } from "react"
import SearchBar from "../components/SearchBar"
import depthOfObject from "../utils/depthOfObject"
import JumpSearchAnimation from "../components/animations/JumpSearchAnimation"
import jumpSearch from "../utils/jumpSearch"

const JumpSearchAlg = () => {
    const [dataSet] = useAtom(dataSetAtom)
    const dataSetKeys = Object.keys(dataSet)
    const dataSetShown = dataSetKeys.reduce((prev, curr) => {
        return (
            { ...prev, [curr]: false }
        )
    }, {})
    const [selected, setSelected] = useState(0)
    const displayKey = dataSetKeys[selected]
    const [searchString,] = useAtom(searchAtom)
    const result = jumpSearch(dataSet[displayKey], searchString)
    const depthOfSelectedData = depthOfObject(dataSet[displayKey])
    const initialID = Array(depthOfSelectedData + 2).fill(0)

    return (
        <div className="Row">
            <div className="algLeftColumn">
                <div className="codeDisplay">
                    {`function jumpSearch(arr = [], x = '', n = arr.length) {
    arr.sort()
    if (checkForObject(arr)) {
        return ['Data set cannot contain objects']
    } else {
        let step = Math.floor(Math.sqrt(n))
        let prev = 0
        //This finds the block containing the result
        while (arr[Math.min(step, n) - 1] < x) {
            prev = step
            step += Math.floor(Math.sqrt(n))
            if (prev >= n) return ['No blocks contain the Result']
        }
        //This is a linear search within the block
        while (arr[prev] < x) {
            prev++
            if (prev === Math.min(step, n)) {
                return ['No Results in expected block']
            }
        }
        //If the result is found
        if (arr[prev] == x) {
            return [prev, arr[prev]]
        } else return ['No Results']
    }
}`}
                </div>
                <Selector optionList={dataSetKeys} selection={selected} setSelection={setSelected} />
                <div className="menuRow">
                    <AlgMenu />
                    <div className="selectedData">{displayObject(dataSet, { ...dataSetShown, [displayKey]: true })}</div>
                </div>
            </div>
            <div className="algOutput">
                <SearchBar />
                <JumpSearchAnimation initialID={initialID}
                    Obj={dataSet[displayKey]} result={result} />
                <div className="outputSolution">
                    <span>{displayKey}</span>
                    {result.map((value, index) => {
                        return (
                            <Fragment key={index}>
                                <span>:</span>
                                <span>{value}</span>
                            </Fragment>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default JumpSearchAlg