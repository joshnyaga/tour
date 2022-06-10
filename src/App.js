
import './App.css';
import Header from "./components/Header"
import Tours from "./components/Tours"
import data from "./data"

export default function App() {
  const tours= data.map(item=>{
    return(
      <Tours
        key={item.id}
        item ={item}
          />
    )
  })
  return (
   <div className='container'>
     <Header/>
     {tours}
   </div>
  );
}


