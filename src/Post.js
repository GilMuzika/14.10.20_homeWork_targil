import React, { Component } from 'react';

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {};
        for(const s in props.one_post) {
            this.state[s] = props.one_post[s];
        }



    }

    render() {
        const ret_val = [];
        const key_ret_div = Math.random() * 1000;
        let count = 0;
        for(const s in this.state) {
            ret_val.push(<div key={count}>
                 {s}: {this.state[s]}
                  </div>);
            count++;
        }
        return(
            <div key={key_ret_div}>
                {ret_val}
            </div>
        );
    }


}

export default Post;