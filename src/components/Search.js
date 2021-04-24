import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'

const Search = () => {
    console.log('rendering, ' + new Date().getTime().toString())
    const [term, setTerm] = useState('programming')
    const [results, setResults] = useState([])
    const [debouncedTerm, setDebouncedTerm] = useState(term)

    useEffect(()=>{
        if(!term)   {return}
        const timeoutId = setTimeout(()=>{
            setDebouncedTerm(term)
        }, 1000)
        return ()=>clearTimeout(timeoutId)
    }, [term])

    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params : {
                    action : 'query',
                    list : 'search',
                    origin : '*',
                    format : 'json',
                    srsearch : debouncedTerm
                }
            })
            setResults(data.query.search)
            //console.log(results)
        }
        search()
    }, [debouncedTerm])

    const renderedResults = results.map(result => {
        return (
            <div key={result.pageid}className='item'>
                <div className='right floated content'>
                    <a className='ui button' href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                        Open
                    </a>
                </div>
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        )
    })

    return (
        <Fragment>
            <div className='ui form'>
                <label>Search</label>
                <input className='input' value={term} onChange = {e => setTerm(e.target.value)}/>
            </div>
            <div className='ui celled list'>
                {renderedResults}
            </div>
        </Fragment>
    )
}

export default Search