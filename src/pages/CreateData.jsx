import { useAtom } from 'jotai'
import { useState } from 'react'
import { dataSetAtom } from '../components/Atoms'
import NewDataForm from '../components/NewDataForm'
import displayObject from '../utils/displayObject'

const CreateData = () => {
  const [dataSet, setDataSet] = useAtom(dataSetAtom)
  const dataSetKeys = Object.keys(dataSet)
  const [dataSetShown, setDataSetShown] = useState(dataSetKeys.reduce((prev, curr) => {
    return (
      { ...prev, [curr]: false }
    )
  }, {}))

  function showDataSet(key) {
    if (dataSetShown[key]) {
      setDataSetShown({ ...dataSetShown, [key]: false, })
    } else {
      setDataSetShown({ ...dataSetShown, [key]: true, })
    }
  }

  return (
    <div className='createDataContainer'>
      <div className='dataList'>
        <div className='dataLinkWrapper'>
          {Object.keys(dataSet).map((value, index) => (
            <button className={dataSetShown[value] ? 'dataLink active' : 'dataLink'}
              key={index} onClick={() => showDataSet(value)} >{value}</button>
          ))}
        </div>
        <div className='dataDisplay'> {displayObject(dataSet, dataSetShown)}</div>
      </div>
      <NewDataForm />
    </div>
  )
}

export default CreateData