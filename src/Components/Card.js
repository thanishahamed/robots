import React from 'react';
// import React,{Component} from 'react';


// class Card extends Component{
//     render(){
//         return (
//             <div>
//                 <img alt = "robots" src = "" />
//                 <h2>Thanish Ahamed</h2>
//                 <p>muktharthanish@gmail.com</p>
//             </div>
//         );
//     }
// } 


const Card = ({name, email, id}) =>{
    // const {name, email, id} = props; //this is one way with passing the parameter "props"
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt = "robots" src = {`https://robohash.org/${id}?100x100`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;