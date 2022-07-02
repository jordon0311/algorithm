import { useState } from "react"

const Selector = ({optionList, selection, setSelection}) => {
    const [isOpen, setIsOpen] = useState(false)
    
    function toggleOpen() {
        setIsOpen(!isOpen)
    }

    return (
        <div className="dataSelector">
            <button className={isOpen ? 'selectorBtn hidden' : 'selectorBtn'}
                aria-haspopup='listbox' aria-expanded={isOpen} onClick={toggleOpen}>
                {optionList[selection]}
            </button>
            <ul className={isOpen ? 'dataOption' : 'dataOption hidden'}
                tabIndex={-1} role='listbox'
                aria-activedescendant={optionList[selection]}>
                {optionList.map((value, index) => (
                    <li role='option' aria-selected={selection === index}
                        tabIndex={0} key={index} className='selectorOption'
                        onClick={() => { setSelection(index); setIsOpen(false) }}>
                        {value}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Selector