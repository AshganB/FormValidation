
import './App.css';
import Button from './components/Button'
import Counter from './components/Counter'
import Form from './components/Form'

function App() {

 

  //   if(!tesxt){
  //     alert('Please insert your Name');
  //     return
  //   }
  //   onSubmit
  // }
  // function validate(e){
  //   let target=e.target.name;
  //   if(target==='password'){

  //   }
  // }
  return (
    <div className="App">
      
      <Counter title="counter 1" color="blue"/>
      <Counter title="counter 2"/>
      <Form title="Contact details" />
      
     
    </div>
  );
}


export default App;
