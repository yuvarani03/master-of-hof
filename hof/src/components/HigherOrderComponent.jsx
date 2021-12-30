import React, { Component } from 'react';
export default class HigherOrderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
            ]
         }
    }
    // display all items
    renderItems = ()=> {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    }
    renderUserType =()=>{
        const data = this.state.userData;
        const mapRows = data.filter(item=>{
            if(item.user_type == 'Designer')
            return item;
        })
        .map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    }
    renderStartingChar =()=>{
        const data = this.state.userData;
        const mapRows = data.filter(item=>{
            if(item.name.startsWith('J'))
            return item;
        })
        .map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    }
    renderAge =()=>{
        const data = this.state.userData;
        const mapRows = data.filter(item=>{
            if(item.age > 28 && item.age <= 50)
            return item;
        })
        .map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    }
    renderExperience =()=>{
        const data = this.state.userData;
        const mapRows = data.filter(item=>{
            if(item.user_type == 'Designer')
            return item;
        })
        .map(item => {
            return item.years;
        }).reduce((initial,item)=>{
            initial += item;
            return initial;
        },0);
        return mapRows;
    }
    render() { 
        return ( 
        // instead of a parent div tag we can also use React.Fragment
          <React.Fragment>
          <h1>Display all items</h1>
          <div className="display-box"><ul>{this.renderItems()}</ul></div>
          <h1>Display based on User Type</h1>
          <div className="display-box"><ul>{this.renderUserType()}</ul></div>
          <h1>Filter all Data starting with J</h1>
          <div className="display-box"><ul>{this.renderStartingChar()}</ul></div>
          <h1>Filter all data based on age greater than 28 and less than or equal to 50</h1>
          <div className="display-box"><ul>{this.renderAge()}</ul></div>
          <h1>Find the total years of the designers</h1>
          <div className="display-box">{this.renderExperience()}</div>
        </React.Fragment>
         );
    }
} 