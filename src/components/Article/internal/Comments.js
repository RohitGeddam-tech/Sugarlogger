import React, { useState } from "react"
import G from "../../../images/button.png"
import GoogleLogin from "react-google-login"

const Comments = () => {
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
    <>
      <form
        onSubmit={e => {
          e.preventDefault()
          setSubmitted(!submit)
          console.log("comment", commentsresult)
        }}
      >
        <textarea
          type="text"
          placeholder="Share your thoughts here..*"
          name="comment"
          className="comment"
          onChange={handlechange}
        />
        <GoogleLogin
          clientId="887546326439-jplpchgjsp872d0o335iijt1q2k2t1ei.apps.googleusercontent.com"
          // render={renderProps => (
          //   <button
          //     className="commentmobbtn"
          //     type="submit"
          //     onClick={renderProps.onClick}
          //     disabled={renderProps.disabled}
          //   >
          //     <img src={G} alt="g" />
          //   </button>
          // )}
          buttonText="sign in with google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </form>
    </>
  )
}

export default Comments
