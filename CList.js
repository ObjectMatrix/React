
import React from 'react';

export default class CommentList extends React.Component 
{
  constructor( props ) {
    super( props );
  
  }


  render() {
    return (
			<ul>
		    {
		      this.props.items && this.props.items.map((item, index) => <li key={index}>{item}</li>)
		    }
		  </ul>
    );
  }

}

