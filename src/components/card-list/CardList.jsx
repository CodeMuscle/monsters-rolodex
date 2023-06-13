import { Component } from 'react';

import '../../styles/card.styles.css';
import '../../styles/card-list.styles.css';
import Card from '../card-component/Card';

class CardList extends Component{

    render(){
        const { monsters } = this.props;
        return(
            <div className="card-list">
                {monsters.map((monster) => {
                    return <Card monster={monster}/> 
                })}
            </div>
        )
    }
}

export default CardList;
