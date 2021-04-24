import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route'
import Header from './components/Header'

const items = [
  {
    title : 'Hello how are you?',
    content : 'I am fine'
  },
  {
    title : 'Where do you live?',
    content : 'i live in gurgaon.'
  },
  {
    title : 'What is React?',
    content : 'React is front-end UI framework for web applications.'
  }
];

const options = [
  {
    label : 'the color red',
    value : 'Red'
  },
  {
    label : 'the color yellow',
    value : 'Yellow'
  },
  {
    label : 'the color blue',
    value : 'Blue'
  },
]



const App = () => {
  const [selected, setSelected] = useState(options[0])
  const [showDropdown, setShowDropdown] = useState(true)
  return (

    //<Translate />
    
    // <div>
    //   <button onClick={()=>setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
    //   {/* <Accordion items={items}/>    */}
    //   {
    //     showDropdown ?
    //     <Dropdown selected={selected} onSelectChange={setSelected} options={options} labelText='Select a Color'/> :
    //     null
    //   }
      
    // </div> 
    <div>
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/search'>
        <Search />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
      <Route path='/dropdown'>
      {
        showDropdown ?
        <Dropdown selected={selected} onSelectChange={setSelected} options={options} labelText='Select a Color'/> :
        null
      }
      </Route> 
    </div>
     
  );
}

export default App;
