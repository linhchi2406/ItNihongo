import React from 'react';

class Table extends React.Component {
    constructor(props) {
        super (props);
    }

    render(){
    // let element = this.props.items.map((item, index)=>
    // {
    //     return 
    //     <TodoItem item = {item}
    //                 index = {index} 
    //                 onSubmitDelete = {this.props.onSubmitDelete}
    //               />

    // });
  return (
    <table className="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>
        <button type="button"class="btn btn-danger">Delete</button>
        <button type="button" class="btn btn-primary">Edit</button>
      </td>
    </tr>
    </tbody>
  </table>

  );
}
}

export default Table;
