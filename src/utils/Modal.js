import React, { useState } from "react"
import G from "../images/button.png"
import GoogleLogin from "react-google-login"

const Modal = ({ title, setReplybtn }) => {
  const [comment, setComment] = useState("")
  const [submit, setSubmitted] = useState(false)

  const commentsresult = comment

  const responseGoogle = response => {
    console.log(response)
  }

  const handlechange = e => {
    setComment(e.target.value)
  }

  return (
    <form
      className="reply"
      onSubmit={e => {
        e.preventDefault()
        setReplybtn(false)
        console.log("comment", commentsresult)
      }}
    >
      <div className="modal-align">
        <h1>
          Replying to <h2>{title}</h2>{" "}
        </h1>
        <button
          onClick={() => {
            setReplybtn(false)
          }}
        >
          <i className="close icon"></i>
        </button>
      </div>
      <textarea
        type="text"
        placeholder="Share your thoughts here..*"
        name="comment"
        onChange={handlechange}
      />
      <GoogleLogin
        clientId="887546326439-jplpchgjsp872d0o335iijt1q2k2t1ei.apps.googleusercontent.com"
        render={renderProps => (
          <button
            className="commentmobbtn"
            type="submit"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <img src={G} alt="g" />
          </button>
        )}
        buttonText="sign in with google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </form>
  )
}

export default Modal
