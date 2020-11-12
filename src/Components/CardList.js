import React from 'react';
import Card from './Card';


const CardList = ({robots}) =>{
    
    // if(true){
    //     return (new Error());
    // }
    const getUsers = robots.map((user,i)=>{
        return (
        <Card 
            key={i}
            id={robots[i].id} 
            name = {robots[i].name} 
            username = {robots[i].username} 
            email = {robots[i].email} 
        />
        );
    });

    return(
        <div>
            {getUsers};
        </div>
        );
    }

    export default CardList;