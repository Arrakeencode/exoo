import React from "react";

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A Task was submitted: ' + this.state.value);
      event.preventDefault();
    }

  
    render() {
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Task
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <table>
            <tbody>
            {this.props.map((prop) => (
                        <tr>
                            <td>{prop.value}</td>
                        </tr>
            ))}
            </tbody>
        </table>
        </div>
      );
    }
  }
export default Home;