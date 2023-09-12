// export default function Todo({task}){              //Export Todo() function
//   task = "ami ghumabo na";
//     return(                                  //props are read only props are not modify
//             <li>Task: {task}</li>
//     )
// }


//conditional rendering option-01
// export default function Todo({task, isDone}){              //Export Todo() function
//   if(isDone === true){
//       return(                                  //props are read only props are not modify
//               <li>Finished: {task}</li>
//       )
//   }
//   else{
//     return <li>work one: {task}</li>
//   }
// }


//conditional rendering option-02
// export default function Todo({task,isDone}){
//     if(isDone){
//         return <li>Finished: {task}.</li>
//     }
//     return <li>Work on: {task}.</li>
// }


//conditional rendering option-03 ternary operator
// export default function Todo({task,isDone}){
//     return (
//         <li>{isDone ? 'finished':'work on'}:{task}</li>
//     )
// }


// //conditional rendering option-04 condition-01:- &&(and)
//  export default function Todo({task,isDone}){                //Export Todo() function
//      return(                                                 //props are read only props are not modify
//              <li>{task} {isDone && ':Done'}</li>
//      )
//  }


//conditional rendering option-05 condition-02:- ||(Or)
//  export default function Todo({task,isDone}){                //Export Todo() function
//      return(                                                 //props are read only props are not modify
//              <li>{task} {isDone || ':Do it'}</li>
//      )
//  }



//conditional rendering option-06
 export default function Todo({task,isDone}){
  let listItem;
     if(isDone){
         listItem = <li>Finished: {task}.</li>
     }
    else{
        <li>Work on: {task}.</li>
    } 
    return listItem;
 }

