import React,{Component} from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscriber from './ShowSubscriber';

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

    render(){
        return(
            // <AddSubscriber addNewSubscriber={this.addSubscriber}/>
            <ShowSubscriber subscriberList={this.state.subscriberList}/>
        );
    }
}

export default PhoneDirectory;