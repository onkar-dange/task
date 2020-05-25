import React from 'react';
import {connect} from 'react-redux';
import MYNavigationbar from '../MYNavigationbar';
import { Row,Col } from 'react-bootstrap';



class MySongs extends React.Component {

    constructor(props){
            super(props);
        this.state={
            mydata:"",
        }
    }

    render(){
        
    return(
        <div className="sec_div">
          
            <MYNavigationbar/>
            <h1 style={{textAlign:"center",color:"white",marginTop:"5%"}}>My Songs</h1>
        </div>
    )
    }
}

const mapStateToProps=(state)=>{
    return{
        Mylist:state.DrDataList
    }
}
export default connect(mapStateToProps)(MySongs);
