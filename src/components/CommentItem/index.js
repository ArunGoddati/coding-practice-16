import './index.css'
const CommentItem = props => {
  const {commentDetails, key} = props
  const {id, name, comment, isDelete} = commentDetails
  return (
    <li>
      <h1>{name}</h1>
      <p>{comment}</p>
    </li>
  )
}

export default CommentItem
