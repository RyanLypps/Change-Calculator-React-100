import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      due: Number(null),
      received: Number(null),
      changeDue: Number(null),
      twenties: Number(null),
      tens: Number(null),
      fives: Number(null),
      dollars: Number(null),
      quarters: Number(null),
      dimes: Number(null),
      nickels: Number(null),
      pennies: Number(null),
    };
    this.handleClick = this.handleClick.bind(this)
    this.calculate = this.calculate.bind(this)
  }

  handleClick(e) {
    this.setState(
      { [e.target.name]: e.target.value }
    );
  }

  calculate() {
    let d = (this.state.due);
    let r = (this.state.received);
    let result = r - d;
    let changeValue = [20.00, 10.00, 5.00, 1.00, 0.25, 0.10, 0.05, 0.01];
    let storageForChange = [];

    // If statement checks to see if there is change.
    if (Math.sign(result) == 1) {
      // Iterates thru to calculate change from inputed amount.
      for (var i = 0; i < changeValue.length; i++) {
        let changeAmount = result / changeValue[i];
        result = result % changeValue[i];
        storageForChange.push(changeAmount);
      }
    }


    this.setState(
      {
        changeDue: (r - d).toFixed(2),
        twenties: Math.floor(storageForChange[0]),
        tens: Math.floor(storageForChange[1]),
        fives: Math.floor(storageForChange[2]),
        dollars: Math.floor(storageForChange[3]),
        quarters: Math.floor(storageForChange[4]),
        dimes: Math.floor(storageForChange[5]),
        nickels: Math.floor(storageForChange[6]),
        pennies: Math.round(storageForChange[7]),
      }
    );
  }

  render() {
    console.log(this.state)
    return (
      <div className="container">
        <header><h1 className="text-center">Change Calculator</h1></header>
        <div className="panel panel-default">
          <div className="row panel-body">
            <div className="panel-body col-md-4 info-panel">
              <div>
                <div>
                  <div>
                    Enter Information
                  </div>
                  <div>
                    <label>DUE:
                    <input name="due" type="number" value={this.state.due} onChange={this.handleClick} placeholder="DUE" />
                    </label>
                  </div>
                  <div>
                    <label>REC:
                    <input name="received" type="number" value={this.state.received} onChange={this.handleClick} placeholder="RECEIVED" />
                    </label>
                  </div>
                  <div>
                    <button name="changeDue" onClick={this.calculate}>Calculate</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="panel-body col-md-7 info-panel">
              <div className="row">
                  <div className="col-md-12">
                    <div className='alert alert-success text-center lead' role='alert'>
                      Change Due: {this.state.changeDue}
                    </div>
                </div>
                <div className="col-md-3">
                  <h5>Twenties</h5>
                  <div>{this.state.twenties}</div>
                </div>
                <div className="col-md-3">
                  <h5>Tens</h5>
                  <div>{this.state.tens}</div>
                </div>
                <div className="col-md-3">
                  <h5>Fives</h5>
                  <div>{this.state.fives}</div>
                </div>
                <div className="col-md-3">
                  <h5>Dollars</h5>
                  <div>{this.state.dollars}</div>
                </div>
                <div className="col-md-3">
                  <h5>Quarters</h5>
                  <div>{this.state.quarters}</div>
                </div>
                <div className="col-md-3">
                  <h5>Dimes</h5>
                  <div>{this.state.dimes}</div>
                </div>
                <div className="col-md-3">
                  <h5>Nickels</h5>
                  <div>{this.state.nickels}</div>
                </div>
                <div className="col-md-3">
                  <h5>Pennies</h5>
                  <div>{this.state.pennies}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
