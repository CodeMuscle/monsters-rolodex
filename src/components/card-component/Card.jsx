import { Component } from 'react';

import '../../styles/card.styles.css'


class Card extends Component{
    render(){
        const { id, name, email } = this.props.monster;

        return(
            <div className="card-container text-center" key={id}>
                <img className="mb-4" src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`Monster ${name}`} />
                <h1 className="font-bold text-[30px] text-black text-center" key={id}>{name}</h1>
                <p className="font-normal text-black text-[15px]">{email}</p>
            </div>
        )
    }
    
}

export default Card