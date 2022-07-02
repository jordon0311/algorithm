import AlgMenu from "../components/AlgMenu"
import displayObject from "../utils/displayObject"
import { useAtom } from "jotai"
import { dataSetAtom, searchAtom } from "../components/Atoms"
import Selector from "../components/Selector"
import { Fragment, useState } from "react"
import SearchBar from "../components/SearchBar"
import depthOfObject from "../utils/depthOfObject"
import BreadthSearchAnimation from "../components/animations/BreadthSearchAnimation"
import breadthSearch from "../utils/breadthSearch"

const BreadthSearchAlg = () => {
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
    const result = breadthSearch(dataSet[displayKey], searchString)
    const depthOfSelectedData = depthOfObject(dataSet[displayKey])
    const initialID = Array(depthOfSelectedData + 2).fill(0)

    return (
        <div className="Row">
            <div className="algLeftColumn">
                <div className="codeDisplay">
                    {``}
                </div>
                <Selector optionList={dataSetKeys} selection={selected} setSelection={setSelected} />
                <div className="menuRow">
                    <AlgMenu />
                    <div className="selectedData">{displayObject(dataSet, { ...dataSetShown, [displayKey]: true })}</div>
                </div>
            </div>
            <div className="algOutput">
                <SearchBar />
                <BreadthSearchAnimation initialID={initialID}
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
                    <button onClick={() => console.log(initialID)}>{depthOfSelectedData}</button>
                </div>
            </div>
        </div>
    )
}

export default BreadthSearchAlg