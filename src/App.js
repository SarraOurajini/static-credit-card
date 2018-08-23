import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
           <h1 className="App-title">CREDIT CARD</h1>
           <div className="sim"><img src="http://static.wixstatic.com/media/996704_49ab193947ac49019975a030d3f5aa28.png_srz_200_150_85_22_0.50_1.20_0.00_png_srz" width="25%"/></div>
           <div className="card-info">

             <div className="num-valid-thru">
                 <div className="num-card">7253 3256 7895 1245</div>
                 <div className="num">
                     <div className="num-date">5422</div>
                     <div className="valid-thru-date">
                        <div className="valid-thru">
                         <div>VALID THRU</div>
                         <img className="Valid-thru-img"src="http://www.icône.com/images/icones/6/6/media-playback-start-5.png" width="20%" height="40%"/>
                        </div>
                        <div className="month-year">
                        <div className="month" >MONTH/YEAR </div>
                        <div className="num-date">11/50 </div>
                        </div>
                     </div>
                 </div>
                 <div className="cardholder">CARDHOLDER</div>
             </div>

             <img className="visa" src="https://www.lowestrates.ca/sites/default/files/creditcardlogos.jpg" width="15%"/>

          </div>
       
      </div>
    );
  }
}

export default App;
