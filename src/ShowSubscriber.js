import React,{Component} from 'react';
import Header from './Header';
import './ShowSubscriber.css';
import './common/common.css';

class ShowSubscriber extends Component{
    render(){
        let subscribers = [
            
          ];      

        return (
            <div>
                <Header headerText="phone directory"/>
                <div className="component-body-container">
                    <button className="custom-btn add-btn">Add</button>
    
                    <div className="grid-container heading-container">
                        <span className="grid-item name-heading">Name</span>
                        <span className="grid-item phone-heading">Phone</span>
                    </div>

                    {
                        this.props.subscriberList.map((sub)=>{
                            return (
                                <div key = {sub.id} className="grid-container">
                                    <span className="grid-item">{sub.name}</span>
                                    <span className="grid-item">{sub.phone}</span>
                                    <span className="grid-item action-btn-container">
                                        <button className="custom-btn delete-btn">Delete</button>
                                    </span>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
    
        );
    }
}

export default ShowSubscriber;