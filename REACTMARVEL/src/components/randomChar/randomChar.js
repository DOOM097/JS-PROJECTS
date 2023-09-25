import React,{Component} from "react";
import './randomChar.css';
import Spinner from "../spinner";
import useMarvelService from '../../services';
import ErrorMessage from "../errorMessage";

export default class RandomChar extends Component{

    gotService=new this.gotService();
    state={
        char:{},
        loading:true,
        error:false
    }

    componentDidMount(){
        this.updateChar();
        this.timerId=setInterval(this.updateChar, 15000);
    }

    onCharLoaded=(char)=>{
        clearInterval(this.timerId);
    }
    onCharLoaded=(char)=>{
        this.setState({
            char,
            loading:false
        })
    }

    onError =(err)=>{
        this.setState({
            error:true,
            loading:false
        })
    }

    updateChar=()=>{
        const id =Math.floor(Math.random()*140+25);
        this.gotService.getCharapter(id)
        .then(this.onCharLoaded)
        .cath(this.onError);
    }

    render(){
        const{char,loading,error}=this.state;

        const errorMessage=error ?<ErrorMessage/>:null;
        const spinner = loading?<Spinner/>:null;
        const content =!(loading|| error)? <View char={char}/>:null;

        return(
            <div className="random-block rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}
const View=({char})=>{
    const{name, gender, born, died, culture}=char;
    return(
        <>
            <h4>Random Character:{name}</h4>
            <ul className ="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">gender</span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">born</span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">died</span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">culture</span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}