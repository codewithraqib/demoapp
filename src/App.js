import { useEffect, useState } from 'react';
import './App.css'

function App() {


  const [tabs, setTabs] = useState([
    { id: 0, name: "Tab 1", active: true },
    { id: 1, name: "Tab 2", active: false },
    { id: 2, name: "Tab 3", active: false },

  ])

  // const [increase, setIncrease] = useState(0);
  // const [decrease, setDecrease] = useState(0);


  // const [boxes, setBoxes] = useState([
  //   0
  // ])

  // useEffect(() => {


  //   if (increase > 0) {
  //     console.log('increasing useEffect called')
  //     setBoxes([...boxes, increase])
  //   }

  // }, [increase])


  // useEffect(() => {

  //   if (decrease > 0) {
  //     console.log('decreasing useEffect called')
  //     let newBoxes = boxes;
  //     newBoxes.pop()
  //     setBoxes(newBoxes)
  //   }

  // }, [decrease])


  // console.log(boxes)



  const selectTab = (tab) => {

    let newTabs = [];

    tabs.forEach(item => {
      if (item.id === tab.id) {
        // item.active = true;
        newTabs.push({ ...item, active: true })
      } else {
        newTabs.push({ ...item, active: false })
      }

      setTabs(newTabs)
    })

  }



  return (
    <div className="App">

      {/* <div className='box_container'>
        {boxes && boxes.map((box, index) => <div key={index} className='box'>{box}</div>)}
      </div> */}

      {/* <button onClick={() => setIncrease(increase + 1)}>Add More Boxes</button>

      <button onClick={() => setDecrease(decrease + 1)}>Remove Box</button> */}


      <div className='tabs_container'>
        {tabs.map((tab, index) => {
          return <div className={tab.active ? 'tab_item active' : "tab_item"} key={index} onClick={() => selectTab(tab)}>{tab.name}</div>
        })}

      </div>


    </div>
  );
}

export default App;
