import React from 'react';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { CustomerServiceOutlined  } from '@ant-design/icons';
import { Button,Input  } from "antd";
import {AddToList} from '../../action/list';
import MYNavigationbar from '../MYNavigationbar';


class MyTable extends React.Component {

    constructor(props){
            super(props);
        this.state={
            mydata:"",
            hname:''
        }
    }

componentDidMount(){
    var allList=this.props.Mylist;
   this.setState({ mydata: allList });
}

SongName=(event)=>{
  var val=event.target.value
  var name=event.target.name

  this.setState({hname:val})
this.props.dispatch(AddToList(val))
  
}


    render(){
        //created all <tr> dynamically from data
        var allList=this.props.Mylist;
      
        if(!allList.loading){
            var mydata=allList.api_data
            console.log("mydata",allList)
        var list=mydata.map((item)=>
            <div key={item.artistName} className="list" >
                <div style={{color:"white"}}>
                <div><span>Artist Name:</span><span> {item.artistName}</span></div>
                <div><span>Collection Censored Name:</span><span> {item.collectionCensoredName}</span></div>
                <div><span>Collection Name:</span><span> {item.collectionName}</span></div>
                <div><span>Collection Price:</span><span> {item.collectionPrice}</span></div>
                </div>
            </div>
            )
       }
        
    return(
        <div className="sec_div">
         <MYNavigationbar/>
            <h1 style={{textAlign: 'center',padding:'20px',color:'#e74c3c'}}>Search your Song...</h1>
            
            <div className="table_sec">
             <Input
              size="large" 
              placeholder="search here..." 
              suffix={<CustomerServiceOutlined fill="#e74c3c" />}
              onChange={this.SongName} 
              type="text" 
              value={this.state.hname} 
              className="input_design" />
              
             {!allList.loading &&  <div className="list_sec"> <div className="list_sec_div" >{list}</div> </div>} 
              
            </div>

        
        </div>
    )
    }
}

const mapStateToProps=(state)=>{
    return{
        Mylist:state.DrDataList
    }
}
export default connect(mapStateToProps)(MyTable);
