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
      <div className="callout secondary">
        <h4 className="leave-comment">Add a Comment</h4>
        <form className="post-edit" ref="commentForm" onSubmit={this.processComment}>
          <input type="text" ref="name" placeholder="Your Name" required/>
          <textarea ref="desc" placeholder="Add your comment here" required/>
          <button id="submit" type="submit" className="button button-outline comment-button action-button expand-right">Add Comment</button>
        </form>
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
