
import React from 'react';

import Capture from './components/Capture';

function App () {
  const [name, setName] = React.useState('ParentComponent');
  const [age, setAge] = React.useState(18);
  React.useEffect(() => {
    setAge(age=>age+1);
  }, [name]);
  return (<>
    <h1 className='user-name222'>{name}</h1>
    <h1>{age}</h1>
    <input value={name} onChange={e => {
      setName(e.target.value);
    }} />
    <Capture value={age}/>
  </>)
}

function test(){
  console.log('test');
}



export default App;


