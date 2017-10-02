import React, { Component } from 'react';
import schools from './schoolinfo';
import School from './School';

export default class schoolContainer extends Component {
  render(){
    return(
      { schools.map((school,index) => {
          return(
            <School school={school}/>
          )
        })
      }
    )
  }
}
