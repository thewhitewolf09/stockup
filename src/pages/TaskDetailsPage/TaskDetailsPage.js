import React, { useEffect, useState } from "react";
import { FaComment, FaPaperclip, FaTrashAlt, FaUser } from "react-icons/fa";
import { BsChatQuote } from "react-icons/bs";
import Header from "..//..//components/header/header";
import Footer from "..//..//components/footer/footer";
import taskImage from "..//../assets/svg/personal goals checklist-bro.svg";
import commentSectionImage from "..//../assets/svg/Messaging-amico.svg";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./TaskDetailsPage.scss";
import {
  addComments,
  addCommentsReplies,
  deleteCommentsById,
  deleteCommentsRepliesById,
  getTaskById,
  updateTaskById,
} from "../../api/apiFunctions";

const TaskDetailsPage = () => {
  const location = useLocation();
  const taskId = location.state;
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const [task, setTask] = useState({});
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [activeCommentId, setActiveCommentId] = useState(null);
  const [attachments, setAttachments] = useState([]);
  const [newAttachment, setNewAttachment] = useState("");
  const [taskStatus, setTaskStatus] = useState("In Progress");

  useEffect(() => {
    getTaskById(taskId)
      .then((res) => {
        setTask(res.data.data);
        setComments(res.data.data.comments);
        setTaskStatus(res.data.data.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [taskId]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      const data = {
        taskId: taskId,
        newComment: JSON.stringify({
          user: user.user,
          content: comment,
        }),
      };
      addComments(data)
        .then((res) => {
          console.log(res);
          setComments(res.data.data.comments);
        })
        .catch((err) => {
          console.log(err);
        });
      setComment("");
    }
  };

  const handleDeleteComment = (commentId) => {
    deleteCommentsById({ taskId, commentId })
      .then((res) => {
        console.log(res);
        setComments(res.data.data.comments);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleReplySubmit = (e, commentId) => {
    e.preventDefault();
    const replyText = e.target.elements.reply.value;
    e.target.reset();
    if (replyText.trim() !== "") {
      addCommentsReplies({
        taskId,
        commentId,
        newReply: JSON.stringify({
          user: user.user,
          content: replyText,
        }),
      })
        .then((res) => {
          console.log(res);
          setComments(() =>
            res.data.data.comments.map((comment) => {
              if (comment._id === commentId) {
                return { ...comment, replies: [...comment.replies] };
              }
              return comment;
            })
          );
        })
        .catch((err) => {
          console.log(err);
        });
      setActiveCommentId(null);
    }
  };

  const handleDeleteReply = (commentId, replyId) => {
    deleteCommentsRepliesById({
      taskId,
      commentId,
      replyId,
    })
      .then((res) => {
        console.log(res);
        setComments((prevComments) =>
          prevComments.map((comment) => {
            if (comment._id === commentId) {
              return {
                ...comment,
                replies: comment.replies.filter(
                  (reply) => reply._id !== replyId
                ),
              };
            }
            return comment;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddAttachment = () => {
    if (newAttachment) {
      setAttachments([...attachments, newAttachment]);
      setNewAttachment("");
    }
  };

  const handleDeleteAttachment = (index) => {
    const updatedAttachments = [...attachments];
    updatedAttachments.splice(index, 1);
    setAttachments(updatedAttachments);
  };

  const handleUpdateTask = () => {
    // Update task status
    const newStatus =
      taskStatus === "In Progress" ? "Completed" : "In Progress";
    setTaskStatus(newStatus);

    const data = {
      taskId: taskId,
      data: {
        status: taskStatus === "In Progress" ? "Completed" : "In Progress",
      },
    };

    updateTaskById(data)
      .then((res) => {
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header />
      <div className="task-details-page">
        <div className="task-info">
          <div className="task-image">
            <img src={taskImage} alt="Task" />
          </div>
          <div className="task-details">
            <h2>{task.name}</h2>
            <p className="description">{task.description}</p>
            <div className="task-status">
              <span className={`status ${taskStatus.toLowerCase()}`}>
                {taskStatus}
              </span>
              <button className="update-button" onClick={handleUpdateTask}>
                {taskStatus === "In Progress" ? "Complete Task" : "Reopen Task"}
              </button>
            </div>
          </div>
        </div>
        <div className="attachments-section">
          <h3>Attachments</h3>
          <ul className="attachment-list">
            {attachments.map((attachment, index) => (
              <li key={index} className="attachment">
                {attachment}
                <button
                  className="delete-button"
                  onClick={() => handleDeleteAttachment(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>

          <div className="file-upload">
            <label htmlFor="attachment" className="attach-button">
              <FaPaperclip />
            </label>
            <input
              type="file"
              id="attachment"
              onChange={(e) => setNewAttachment(e.target.files[0].name)}
            />
            <p>{newAttachment}</p>
            <button className="add-button" onClick={handleAddAttachment}>
              Add Attachment
            </button>
          </div>
        </div>

        {/* Comments Section */}
        <div className="comments-section">
          <div>
            <h3>Comments</h3>
            <ul className="comment-list">
              {comments.map((comment) => {
                console.log(comment.replies);
                return(
                <li key={comment._id} className="comment">
                  <div className="comment-icon">
                    <BsChatQuote />
                  </div>
                  <div className="comment-details">
                    <span className="comment-text">{comment.content}</span>
                    <div className="comment-actions">
                      <button
                        className="reply-button"
                        onClick={() => setActiveCommentId(comment._id)}
                      >
                        Reply
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => handleDeleteComment(comment._id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                    {activeCommentId === comment._id && (
                      <form
                        className="reply-form"
                        onSubmit={(e) => handleReplySubmit(e, comment._id)}
                      >
                        <input
                          type="text"
                          name="reply"
                          placeholder="Reply..."
                        />
                        <button type="submit">Submit</button>
                      </form>
                    )}

                    {comment.replies.length > 0 && (
                      <ul className="reply-list">
                        {comment.replies.map((reply) => (
                          <li key={reply._id} className="reply">
                            <div className="reply-icon">
                              <BsChatQuote />
                            </div>
                            <p className="reply-text">{reply.content}</p>
                            <button
                              className="delete-button"
                              onClick={() =>
                                handleDeleteReply(comment._id, reply._id)
                              }
                            >
                              <FaTrashAlt />
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              )})}
            </ul>
            <form className="comment-form" onSubmit={handleCommentSubmit}>
              <input
                type="text"
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button type="submit">Comment</button>
            </form>
          </div>
          <div className="comment-section-image">
            <img src={commentSectionImage} alt="Task" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TaskDetailsPage;
