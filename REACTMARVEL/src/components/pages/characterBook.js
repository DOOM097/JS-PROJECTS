import React, {Component} from 'react'; 
import ItemList from '../itemList';
import ItemDetails from '../itemDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';
import { Field } from '../itemDetails/itemDetails';


export default class CharapterPage extends Component{
    gotService = new gotService();

    state={
        selectedChar:null;
        error:false
    }

    onItemSelected=(id)=>{
        this.setState({
            selectedChar:id
        })
    }
    
    componentDidCatch(){
        this.setState({
            error:true
        })
    }

    render(){
        if(this.state.error){
            return<ErrorMessage/>
        }

        const itemList=(
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllChatacter}
                renderItem={({name, gender})=>`${name}(${gender})`}/>
        )

        const itemDetails=(
            <ItemDetails
            itemDetails={this.state.selectedChar}
            getData={this.gotService.getAllChatacter}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        )

        return(
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }

}