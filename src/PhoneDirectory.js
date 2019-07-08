import React,{Component} from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscriber from './ShowSubscriber';
import {BrowserRouter as Router,Route} from 'react-router-dom';

class PhoneDirectory extends Component{

    constructor(){
        super();

        this.state={
            subscriberList:[
                {
                    id: 1,
                    name: "Sathwik Edupuganti",
                    phone: "9498054256"
              },
              {
                    id: 2,
                    name: "Srinivas",
                    phone: "9440154256"
              }
            ]
        }
    }

    addSubscriber=(newSub)=>{
        const subList=this.state.subscriberList;
        if(subList.length>0){
            newSub.id = this.state.subscriberList[this.state.subscriberList.length-1].id+1;
        }
        else
            newSub.id=1;

        subList.push(newSub);
        this.setState({subscriberList: subList});

        console.log(this.state.subscriberList);
    }

    deleteSubscriber=(subscriberID)=>{
        let subList=this.state.subscriberList;
        let subIndex=0;

        subList.forEach(function(subscriber,index){
            if(subscriberID===subscriber.id){
                subIndex=index;
            }
        },this);

        let newSubList=subList;
        newSubList.splice(subIndex,1);
        this.setState({subscriberList:newSubList});
    }

    render(){
        return(
            // <AddSubscriber addNewSubscriber={this.addSubscriber}/>
            // <ShowSubscriber subscriberList={this.state.subscriberList}/>
            <Router>
                <Route
                exact path="/"
                render={(props)=><ShowSubscriber{...props} deleteSubscriberHandler={this.deleteSubscriber} subscriberList={this.state.subscriberList}/>}
                />
                <Route
                exact path="/add"
                render={({history},props)=><AddSubscriber{...props} history={history} addNewSubscriber={this.addSubscriber}/>}
                />
            </Router>
        );
    }
}

export default PhoneDirectory;