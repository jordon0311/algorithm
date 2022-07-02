import AlgMenu from "../components/AlgMenu"
import displayObject from "../utils/displayObject"
import { useAtom } from "jotai"
import { dataSetAtom, searchAtom } from "../components/Atoms"
import Selector from "../components/Selector"
import { Fragment, useState } from "react"
import linearSearch from "../utils/linearSearch"
import SearchBar from "../components/SearchBar"
import LinearSearchAnimation from "../components/animations/LinearSearchAnimation"
import depthOfObject from "../utils/depthOfObject"

const LinearSearchAlg = () => {
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
  const depthOfSelectedData = depthOfObject(dataSet[displayKey])
  const result = linearSearch(dataSet[displayKey], searchString).flat(depthOfSelectedData)
  const initialID = Array(depthOfSelectedData + 2).fill(0)

  return (
    <div className="Row">
      <div className="algLeftColumn">
        <div className="codeDisplay">
          {`function linearSearch(Arr, x = '', n = 0) {
    const valueArray = Object.values(Arr)
    
    if (typeof valueArray[n] === 'object') {
        if (linearSearch(valueArray[n], x).length === 1) {
            return linearSearch(Arr, x, n + 1)
        } else return [n, linearSearch(valueArray[n], x)]
    } else if (typeof valueArray[n] === 'string') {
        if (valueArray[n].toLowerCase() === x.toLowerCase()) {
            return [n, valueArray[n]]
        } else return linearSearch(Arr, x, n + 1)
    } else if (typeof valueArray[n] === 'number') {
        if (valueArray[n] == x) {
            return [n, valueArray[n]]
        } else return linearSearch(Arr, x, n + 1)
    } else return ['No Result']
}
//This linear search was accomplished using a recursive function
//Large dataset will cause a crash due to runnning out of memory`}
        </div>
        <Selector optionList={dataSetKeys} selection={selected} setSelection={setSelected} />
        <div className="menuRow">
          <AlgMenu />
          <div className="selectedData">{displayObject(dataSet, { ...dataSetShown, [displayKey]: true })}</div>
        </div>
      </div>
      <div className="algOutput">
        <SearchBar />
        <LinearSearchAnimation initialID={initialID}
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

export default LinearSearchAlg