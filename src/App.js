import React, { Component } from 'react';
import './App.css';
import Posts from './Posts';
import AddPost from './AddPost';
import './superhero.css';
import firer from './getDataFromOutside/Firer';
import  { createAction } from './getDataFromOutside/ActionCreator';
import store2 from './getDataFromOutside/Store2';

class App extends Component {
  state = {
    /*posts:
      [{ hero: "Superman", name: "Clark kent", power: "fly", id: 1 },
      { hero: "Batman", name: "Bruce Wayne", power: "Jump", id: 2 },
      { hero: "Spiderman", name: "Pitter Parker", power: "spiddy", id: 3 }]
      */
     posts: [],
     status : "loading...",
     

  }

   

  componentDidMount() {
    firer('https://jsonplaceholder.typicode.com/posts', 10)
    .then(res => {
      this.setState({
        posts: res,
        status: 'Done!',
        idsArr: []
      });
    })
    .catch(err => {alert(`cauth as firer result in App:\n${JSON.stringify(err)}`)});

  }

    // will fire after change- like deleting hero
    componentDidUpdate(prevProps, prevState){
      console.log('State after updating:');
      console.log(this.state.posts);
    }

  addPostFunc = (new_hero) => {

	const new_posts_list = [...this.state.posts, new_hero];

	  const c = new_posts_list.length;
	const action = createAction({c});
    store2.dispatch(action);

    

	//console.log(`In App - addPostFunc, id: ${id}`);
    new_hero.id = store2.getState()[0];
    this.setState({ posts: new_posts_list });
  }





  deletePostFunc = (id) => {
    const new_posts_list = this.state.posts.filter(hiro => hiro.id != id)
    this.setState({ posts: new_posts_list });
  }



   render() {

    return (
      <div className="App">

        <br/><hr/>
        { this.state.status }
      <hr />
        <Posts posts={this.state.posts} delete_func={this.deletePostFunc}  />
        <AddPost example_post_url={'https://jsonplaceholder.typicode.com/posts/1'} add_func={this.addPostFunc} className="hero1" />
      </div>
    );
  }
}

export default App;