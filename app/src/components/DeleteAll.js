import React from 'react';

class DeleteAll extends React.Component {
    constructor(props) {
        super (props);
        // this.onDeleteAll = this.onDeleteAll.bind(this);
    }
    onDeleteAll(){
        // this.props.onDelete();
        alert("Delete Success");

    }
    render(){

  return (
    <div className="box">
        <button onClick={this.onDeleteAll} className="vrn btn-warning">Delete ALL</button>
    </div>

  );
}
}

export default DeleteAll;


