import React, { Component } from "react";


class Reusable extends Component {
        state = {
          count: 0,
        };
      
        updateState = () => {
          this.setState({
          //  count: this.state.count + 1,
          });
        };
      
        componentDidMount() {
          console.log("Boom mount");
        }
      
        componentDidUpdate() {
          console.log("Boom update");
        }
      
        render() {
            console.log("Boom render");
          return (
              
            <div>
            {  console.log("Boom return")}
              <button onClick={this.updateState}>State: {this.state.count}</button>
            </div>
          );
        }
      }

export default Reusable;