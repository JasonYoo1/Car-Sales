import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { couldStartTrivia } from 'typescript';



const App = () => {

  return (
    <div className="boxes">
      <div className="box">
      {/* car={state.car} */}
        <Header />
        <AddedFeatures  />
      </div>
      <div className="box">
      {/* store={state.store} */}
        <AdditionalFeatures  />
        {/* car={state.car} additionalPrice={state.additionalPrice} */}
        <Total  />
      </div>
    </div>
  );
};

export default App;
