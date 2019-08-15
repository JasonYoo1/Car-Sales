import React from 'react';
import { connect  } from 'react-redux'
import { dispatch } from 'rxjs/internal/observable/pairs';

const AdditionalFeature = props => {

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button"
      onClick={()=> dispatch({ type: 'UPDATE_FEATURE' })
      }
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


const mapStateToProps = state =>{
  console.log(state)
  return{

  }
}

export default connect(mapStateToProps, {})(AdditionalFeature);
