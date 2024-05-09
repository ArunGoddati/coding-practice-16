import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'
const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
const initialCommentsList = []
class Comments extends Component {
  state = {comentsList: initialCommentsList, name: '', comment: ''}
  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isDelete: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.comentsList, newComment],
      name: '',
      comment: '',
    }))
  }
  onChangeName = event => {
    this.setState({
      name: event.target.value,
    })
  }
  onChangeComment = event => {
    this.setState({
      comment: event.target.value,
    })
  }
  render() {
    const {comentsList, name, comment} = this.state
    return (
      <div className="big-container">
        <h1 className="main-heading">Comments</h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="comments-image"
          />
          <div>
            <p className="main-description">
              Say something about 4.O Technologies
            </p>
            <form onSubmit={this.onAddComment}>
              <input
                className="name-imput-element"
                placeholder="Your Name"
                value={name}
                onChange={this.onChangeName}
              />
              <textarea
                rows="8"
                cols="30"
                placeholder="Your Comment"
                className="comments-textarea"
                value={comment}
                onChange={this.onChangeComment}
              ></textarea>
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
        </div>
        <hr className="seperator" />
        <ul className="comments-container">
          <li className="fixed-list-item">
            <span className="comments-count">{comentsList.length}</span>{' '}
            Comments
          </li>
          {comentsList.map(eachComment => (
            <CommentItem commentDetails={eachComment} key={eachComment.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
