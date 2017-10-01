// App
// Smart. Does data stuff.

import React from 'react';
import {Component} from 'react';

var h =  {
  getTime: function() {
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var d = new Date();
    var mon = month[d.getMonth()];
    var day = d.getDate();
    var year = d.getFullYear();
    var dateAll = mon + " " + day + ", " + year;

    return dateAll;
  }
}


export default class Comment extends Component {

  getInitialState() {
    return { 
      comments: {}
    }
  }
  
  addComment(commentData) {
    
    (foo, bar, ...args) => {
      
    }
    
    var timeStamp = (new Date()).getTime();
    
    this.state.comments['comment-id' + timeStamp] = commentData;
    this.setState({
      comments: this.state.comments
    });
  }
  
  
  render() {
    return (
	    <div className="row medium-8 large-7 columns">
        
	      <ol className="comment-list block-comments">
          
	      </ol>
        
	      <AddCommentForm addComment={this.addComment}/>
        
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        
	    </div>
    )
  }
};

/*
  Add comment Form
  <AddCommentForm />
*/
// Semi-Dumb

 class AddCommentForm extends Component {

  
  processComment(event) {
    event.preventDefault();
    
    // 1. Take data from from form
    var commentData = {
      commentName: this.refs.name.value,
      commentBody: this.refs.desc.value
    }
    
    // 2. Pass data back to App
    this.props.addComment(commentData);
    
    // 3. Reset the form
    this.refs.commentForm.reset();
    
  }
  
  render() {
    return (
      <div className="main">
        <div className="mainDiv">
          <h1 className="section-title">Comment Tool</h1>

          <hr className="key-points" />

          <p>lorem ipsum.</p>
          <ul>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
          </ul>

          <hr className="explanation" />

          <p>lorem ipsum.</p>


          <hr className="codepen" /> {/*change to something else, like example or project*/}


          <div className="callout secondary">
            <h4 className="leave-comment">Add a Comment</h4>
            <form className="post-edit" ref="commentForm" onSubmit={this.processComment}>
              <input className="commentInput" type="text" ref="name" placeholder="Your Name" required/>
              <textarea className="commentInput" ref="desc" placeholder="Add your comment here" required/>
              <button id="submit" type="submit" className="button button-outline comment-button action-button expand-right">Add Comment</button>
            </form>
          </div>

          <p>Now, let's look at the Life Cycle.</p>
          <button id="butn" className="button">Next</button>
        </div>
      </div>

    )
  }
};


/*
  Newcomment
  <NewComment />

*/
 class NewComment extends Component {
  render() {
    return ( 
      <div className="block-comment-content module text">
        <div className="comment-user">
          <div className="comment-user-avatar-wrap">
            <a>
              <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/3/profile/profile-512_29.jpg" className="comment-avatar" alt="" />
            </a>
          </div>
          <div className="comment-user-text">
            <a href="#0" data-username="cathbailh" className="comment-username">
                <span className="username">
                  {this.props.details.commentName}
                </span>
            </a>
            <span className="on"> on </span>
            <a href="#0">
              <time className="block-comment-time">
                {h.getTime()}
              </time>
            </a>
          </div>
        </div>

        <div className="comment-text">
          <p>{this.props.details.commentBody}</p>
        </div>
      </div>
      
    )
  }
};
