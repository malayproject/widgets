import React, {useState, useEffect, useRef, Fragment} from 'react'

const Dropdown = ({selected, onSelectChange, options, labelText}) => {

    const [open, setOpen] = useState(false)
    const domRef = useRef()

    useEffect(()=>  {
        const onBodyClick = (e)=>    {
            if(domRef.current.contains(e.target))   {
                return
            }
            setOpen(false)
            //console.log('clicked')
        }
        document.body.addEventListener('click', onBodyClick, { capture: true })
        return ()=> {
            document.body.removeEventListener('click', onBodyClick, { capture: true })
        }
    }, [])

    const renderedOptions = options.map(option=>{
        //console.log('option selected', option, selected, ' equals', option===selected)
        if(option.value === selected.value) {return null}
        return (<div className='item' key={option.value} onClick={()=>onSelectChange(option)}>
            {option.label}
        </div>)
    }).filter(o=>o!=null)

    return (
        <Fragment>
            <div ref ={domRef} className='ui form'> 
                <div className='field'>
                    <label className='label'>{labelText}</label>
                    <div className={`ui selection dropdown ${open ? 'visible active' : ''}`} onClick={()=>setOpen(!open)}>
                        <i className='dropdown icon'></i>
                        <div className='text'>{selected.label}</div>
                        <div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
                    </div>
                </div>            
            </div>
            {/* <h3 style={{color:selected.value}}>{`the color chosen is ${selected.value}`}</h3> */}
        </Fragment>
    )
}

export default Dropdown