import './App.css'
import Todo from './Todo-app'
import Rendering from './conditional-rendering'
import Actor from './Actor'
import Singers from './Singers'
import Bookstore from './Bookstore'

function App() {

  //kono ekta object/array ke loop through kore dekhanor process start
  const actors = ['sakib', 'Raj', 'soriful Raz','siam']


  const books = [
    {id:1, name:'Chemistry', price:2000},
    {id:2, name:'Physics', price:2200},
    {id:3, name:'Math', price:2100},
    {id:4, name:'Biology', price:1500},
    {id:5, name:'Social science', price:1000},
  ]


  const  singers = [
    { id:1, name: 'Dr. Mahfuz', age:68},
    { id:2, name:'Eva Rahman', age:35},
    { id:3, name:'Suvro Dev', age:58},
    { id:4, name:'pritom', age:30}  ]
 
    return ( 
    <>
      <h1>Vite + React</h1>

      <Bookstore books = {books}></Bookstore>

      {
        singers.map(singer => <Singers singer ={singer}></Singers>)
      }

      <Actor name={'Abm sumon'}></Actor>
      {   actors.map(actor =><Actor name={actor}></Actor>)  }

      {/* <Device name='laptop'></Device>
      <Device name='mobile'></Device>
      <Device name='computer'></Device>
      <Person></Person>
      <Student grade='7' score='99'></Student>
      <Student grade={12} score='85'></Student>
      <Student></Student>
      <Developer></Developer> */}

{/* 
      <Rendering className = "student"
        step="Focus" isCom={true}></Rendering>
      <Rendering
        step="Detarmind" isCom={true}></Rendering>
      <Rendering
        step="And-planning" isCom={false}></Rendering> */}

      {/* <Todo task="learn React" isDone={true}></Todo>
      <Todo
        task="learn concepts" isDone={false}></Todo>
      <Todo
        task="learn jsx" isDone={true}></Todo> */}
       
      

    </>
  )
}
export default App
function Device(props) {            //react useing props option-01
  // console.log(props)
  return <h2>This device: {props.name}</h2>
}

//person function
function Person() {
  const age = 20;
  const money = 2000;
  const person = { name: 'sakib', age: 12 }
  return <h1>I am {person.name} with age: {age +
    money}</h1>
}


//Student function
const { grade, score } = { grade: '7', score: '99' };   //destructure in js
// function Student(props){                     //useing props
// console.log(props);
// function Student({grade,score}){            
function Student({ grade = 1, score = 0 }) {            //set a default value   //destructure in react props option-02
  // console.log(grade,score)
  return <div className='student'>          //class reserved keyWord thats why we use className
    <h3>This is a student</h3>
    <p>Class:{grade}</p>
    <p>score:{score}</p>
  </div>
}


//developer function
function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }                               //chaile developerStyle take div style er vitor oo rakha jay.
  return (
    <div style={developerStyle}>
      <h3>Developer also struggle</h3>
    </div>
  )
}