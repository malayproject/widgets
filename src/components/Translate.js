import React, {useState} from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'


const Translate = () => {
    const options = [
        {
            label: 'africaans',
            value: 'af'
        },
        {
            label: 'arabic',
            value: 'ar'
        },
        {
            label: 'hindi',
            value: 'hi'
        },
        {
            label: 'english',
            value: 'en'
        },
        {
            label: 'german',
            value: 'de'
        },
        {
            label: 'francaise',
            value: 'fr'
        },
        {
            label: 'japanese',
            value: 'ja'
        },
        {
            label: 'russian',
            value: 'ru'
        },
        {
            label: 'spanish',
            value: 'es'
        },
        {
            label: 'sanskrit',
            value: 'sa'
        }
    ]
    const [selectedLang, setSelectedLang] = useState(options[0])
    const [text, setText] = useState('')

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter text</label>
                    <input value={text} onChange={e=>setText(e.target.value)}/>
                </div>
            </div>
            <Dropdown selected={selectedLang} onSelectChange={setSelectedLang} options={options} labelText='Select a Language' />
            <hr />
            <h3 className='ui header'>Output</h3>
            <Convert language={selectedLang} text={text} />
        </div>
    )
}

export default Translate
