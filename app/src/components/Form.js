
import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
          done: true,
          text: 'linhchi',
       };    
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
          [name]: value
        });
      }
      handleSubmit(event) {
        let item = {
          text : this.state.text,
          done : this.state.done,
        };
        this.props.onSubmitAdd(item);
        event.preventDefault();
      }
    render(){

  return (
    <div>
          <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input name="text" className="form-control" onChange={this.handleInputChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
      
        <div className="mb-3 form-check">
        <div className="radio">
          <label className="form-check-label" htmlFor="flexRadioDefault2">
          <input
            name="done"
            type="checkbox"
            checked={this.state.done}
            onChange={this.handleInputChange} />
            True
          </label>
        </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
  );
}
}

export default Form;


