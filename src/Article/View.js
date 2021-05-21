import React, { useState } from "react"
import { Modal } from "semantic-ui-react"
import Popup from './Modal'

const commentsArray = [
  {
    id: 1,
    title: "Alok shenoy",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    replies: [
      {
        id: 1,
        title: "Jeet Khandelwal",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      },
      {
        id: 2,
        title: "Rohit Geddam",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      },
    ],
  },
  {
    id: 2,
    title: "Kiran Patil",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    replies: [
      {
        id: 1,
        title: "Jeet Khandelwal",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      },
    ],
  },
  {
    id: 3,
    title: "RajKumar Remalli",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    replies: [
      {
        id: 1,
        title: "Jeet Khandelwal",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      },
      {
        id: 2,
        title: "Rohit Geddam",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      },
    ],
  },
  {
    id: 4,
    title: "Anand Pawar",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    replies: [
      {
        id: 1,
        title: "Jeet Khandelwal",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      },
      {
        id: 2,
        title: "Rohit Geddam",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      },
    ],
  },
]

const View = ({ id, title, comment, replies }) => {
  const [replybtn, setReplybtn] = useState(false)
  return (
    <div className="reply-comment">
      <div className="first-comment">
        <div key={id} className="first-commentbox">
          <h1>{title}</h1>
          <p>{comment}</p>
        </div>
        <>
          {replies
            .sort((a, b) => (a.comments > b.comments ? 1 : -1))
            .map(newer => (
              <div key={newer.id} className="reply-commentbox">
                <h1>{newer.title}</h1>
                <p>{newer.comment}</p>
              </div>
            ))}
        </>
        <Modal
          onClose={() => setReplybtn(false)}
          onOpen={() => setReplybtn(true)}
          open={replybtn}
          trigger={
            <button
              onClick={() => {
                setReplybtn(!replybtn)
              }}
            >
              reply to {title}
            </button>
          }
        >
          <div className="modal-container">
            <div className="modal-mobContainer">
              <Popup title={title} setReplybtn={setReplybtn} />
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}

const ViewComments = () => {
  const [page, setPage] = useState(0)
  const perPage = 2

  const pageVisited = page * perPage

  return (
    <div className="all-comment">
      {commentsArray.slice(0, pageVisited + perPage).map(doc => (
        <>
          <View
            id={doc.id}
            title={doc.title}
            comment={doc.comment}
            replies={doc.replies}
          />
        </>
      ))}
      <button
        className="all-commentbtn"
        onClick={() => {
          setPage(page + 1)
        }}
      >
        Load more comments
      </button>
    </div>
  )
}

export default ViewComments