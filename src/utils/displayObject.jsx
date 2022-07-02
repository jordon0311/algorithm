import checkForObject from "./checkForObject"


function displayObject(Obj, dataSetShown={0:false}) {
    if (Object.values(dataSetShown).every(val => (val === false))) {
        return(
            <div className="dataPlaceholder">{'<==='} Select a data set to display</div>
        )
    }
    if (!Array.isArray(Obj)) {
        // console.log('Not an Array')
        if (typeof Obj === 'object') {
            return (
                Object.keys(Obj).map((value, index) => {
                    if (typeof Obj[value] !== 'object') {
                        // console.log(value + ' : ' + Obj[value])
                        return (
                            <div className='arrayValue' key={index}>
                                <span>{value}:</span>
                                <span>{Obj[value]}</span>
                            </div>
                        )
                    } else {
                        return (
                            <div className={false === dataSetShown[value] ? 'objectWindow hidden' : 'objectWindow'} key={value}>
                                <div className="objectTitle">{value}</div>
                                <div className="objectValue">{displayObject(Obj[value], dataSetShown)}</div>
                            </div>
                        )
                    }
                })
            )
        } else {
            console.log('error')
        }
    }
    else if (checkForObject(Obj)) {
        // console.log('Object Start')
        return (
            Obj.map((value, index) => (
                <div className='arrayValue' key={index}>
                    <span className="indexSpan">{index}:</span>
                    <span className="valueSpan">{displayObject(value, dataSetShown)}</span>
                </div>
            ))
        )
    }
    else {
        // console.log('final: ' + Obj)
        return (
            Obj.map((value, index) => (
                <div className='arrayValue' key={index}>
                    <span className="indexSpan">{index}:</span>
                    <span className="valueSpan">{value}</span>
                </div>
            ))
        )
    }
}

export default displayObject
