import './Book.css'
export default function Singers({singer}){
    return(
    <div className='book'>
        <h3>Singer:{singer.name}</h3>
        <p>Id:{singer.id}</p>
        <p>age:{singer.age}</p>
    </div>
    ) 
}