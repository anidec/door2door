import react from 'react'
import reactDom from 'react-dom'

import '../styles/search.css'
import cards from './cards'
function Cards() {
    return (
        <section className='cards'>
            {/* <Search /> */}
            {cards.map((card,index)=>{
                return <Card key={index} card={card}></Card>;
            })}
        </section>
    );
}
// const Search = () => {
//     return (
//         <section>
//             <input 
//                 type = 'text' 
//                 nmae='search' 
//                 value={} 
//                 }
//                 >

//             </input>
//         </section>
//     );
// }
const Card = (props) => {
    const {names, location , phoneNo , price} = props.card;
    return (
        <div className='card'>
            Name: {names}<br />
            Location: {location}<br />
            PhoneNo: {phoneNo}<br />
            Price: {price}<br />
        </div>
    );
}
export default Cards;