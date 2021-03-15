import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';

export function App() {
  return (
    <div>
    <Reservations/>
    <Days/>
    </div>
  );
}

function Days(props) {

  const getDays = (num) => {
    const array = []

    for(var i = 1; i <= num; i++){
      array.push(<button onClick={ () => props.toggleReserv } >{i}</button>)
    }
    return array
  }
    return(
      <div>
        <h4>January</h4>
        {getDays(30)}
      </div>
    )
  }                                                                                    //// chyba żle przekazuję propsa :(

function Reservations() {
  const [show, setShow] = useState(false);
  const [days, setDays] = useState([{dayId: 1, dayLabel: "1",  reservations:  "Jan Kowalski"}, 
  { dayId: 2, dayLabel: "2", reservations:  "Bartek Bojanek" }]);
  const toggleReserv = () => setShow({show: !show});
 return (
 <div>
   
   <button  onClick={ () => toggleReserv() }>1</button> 
   <ul>
     {show
     ? days.map(day => (<li key={day.dayId}>{day.dayLabel} {day.reservations}</li>)) 
     : "" }
  </ul>
 </div>
 )                                                                                     //Rezerwacje nie znikają po kolejnym clicku                                               
}



export default App;