import React, { Component } from 'react';
import Post from './Post';


class Posts extends Component {

  state = {
    mystyle: {
      backgroundColor: '#ffffff',
      padding: '12px',
      borderRadius: '2px',
      width: '100%'
    }
  }
  componentDidMount(){
    console.log('super heros mounted');
  }
  render() {

    const { posts, delete_func } = this.props

    // since we don't have props we get the data as a parameter!
    // const { posts } = this.props

    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    const style1 = {
      backgroundColor: '#FFFFFF',
      padding: '12px',
      borderRadius: '2px',
      width: '100%'
    }

    var index = 0
    const posts_list = posts.map(one_post => {
	  const {  id } = one_post;
      return (
        <div key={id} style={this.state.mystyle}>
            <Post one_post={one_post}	/>
			<button onClick={() => { this.props.delete_func(id); }}>X</button>
        </div >
      )
    })
    return (
      <div>
        {posts_list}
      </div>
    )
  }
}


export default Posts;