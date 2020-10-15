import React, { Component } from 'react';
import firer from './getDataFromOutside/Firer';
import store from './getDataFromOutside/Store'
import { createAction } from './getDataFromOutside/ActionCreator';



class AddPost extends Component {
  constructor(props) {
  super(props);
  const { example_post_url } = props;
	this.state = {
    example_post_url,
    example_post_fields: {},
    field: {}
  }

  }


  handleChange = (e) => {
        //console.log('In AddPost - HandleChange');
        //console.log(`${e.target.id} - ${e.target.value}`);
        
        this.state.field[e.target.id] = e.target.value; 

  }
  handleSubmit = (e) => {
    e.preventDefault();

    let field_ = Object.assign({}, this.state.field);
    this.setState({ field: {} });
    const action  = createAction({field_});
    store.dispatch(action);

    //alert(JSON.stringify(store.getState()));
    this.props.add_func(store.getState()[0]);

	for(const s in this.state.example_post_fields) {
		document.getElementById(s).value = ''
	}


  }

 componentDidMount() {
   firer(this.state.example_post_url)
   .then(arr => {
    for(const s in arr[0]) {
      this.state.example_post_fields[s] = arr[0][s];
    }
   })
   .catch(err => {alert(`Cauth in  AddPost:\n ${JSON.stringify(err)}`)});

   
 }

  render() {

	const ret_val = [];
	for(const s in this.state.example_post_fields) {
		ret_val.push(
			<p key={s}>{s} <input type="text" id={s} onChange={this.handleChange} /></p>
    );
    //console.log('In AddPosts:');
    //console.log(this.state.example_post_fields);
	}

    return (
      <div className="hero1">
        <form onSubmit={this.handleSubmit}>
				{ret_val}
          <button>Submit</button>
        </form>
      </div>)
  }
}
export default AddPost;