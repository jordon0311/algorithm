import AlgMenu from "../components/AlgMenu"
import displayObject from "../utils/displayObject"
import { useAtom } from "jotai"
import { dataSetAtom, searchAtom } from "../components/Atoms"
import Selector from "../components/Selector"
import { Fragment, useState } from "react"
import SearchBar from "../components/SearchBar"
import depthOfObject from "../utils/depthOfObject"
import binarySearch from "../utils/binarySearch"
import BinarySearchAnimation from "../components/animations/BinarySearchAnimation"

const BinarySearchAlg = () => {
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
    const result = binarySearch(dataSet[displayKey], searchString)
    const depthOfSelectedData = depthOfObject(dataSet[displayKey])
    const initialID = Array(depthOfSelectedData + 2).fill(0)

    return (
        <div className="Row">
            <div className="algLeftColumn">
                <div className="codeDisplay">
                    {`function binarySearch(arr = [], x = '', l = 0, u = arr.length - 1) {
    arr.sort()
    if (checkForObject(arr)) {
        return ['Data set can not contain objects']
    } else {
        if (x > arr[u]) return ['No results']
        if (x < arr[l]) return ['No results']
        const mid = l + Math.floor((u - l) / 2)
        if (x === arr[mid]) {
            return [mid, arr[mid]]
        } else if (x > arr[mid]) {
            return binarySearch(arr, x, mid + 1, u)
        } else {
            return binarySearch(arr, x, l, mid - 1)
        }
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
                <BinarySearchAnimation initialID={initialID}
                    Obj={dataSet[displayKey]} result={result}
                    search={searchString} />
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
                    <button onClick={() => console.log(initialID)}>test</button>
                </div>
            </div>
        </div>
    )
}

export default BinarySearchAlg