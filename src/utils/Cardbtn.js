import React from "react"

const Cardbtn = ({ activebtn, page, setPage, prevClick, handleClick }) => {
  return (
    <div className="cardbtn">
      {page === 0 ? (
        <>
          <button
            className="activebtn"
            onClick={() => {
              setPage(page)
            }}
          >
            {page + 1}
          </button>
          <button
            onClick={() => {
              setPage(page + 1)
            }}
          >
            {page + 2}
          </button>
          <button
            onClick={() => {
              setPage(page + 2)
            }}
          >
            {page + 3}
          </button>
          <button
            onClick={() => {
              setPage(page + 3)
            }}
          >
            {page + 4}
          </button>
          <button className="btnnext" onClick={handleClick}>
            <i className="large angle right icon"></i>
          </button>
        </>
      ) : (
        <>
          {page === 6 ? (
            <button
              className="btnprev"
              onClick={() => {
                setPage(0)
              }}
            >
              <i className="large angle left icon"></i>
            </button>
          ) : (
            <>
              <button className="btnprev" onClick={prevClick}>
                <i className="large angle left icon"></i>
              </button>
              <button
                className={activebtn}
                onClick={() => {
                  setPage(page)
                }}
              >
                {page + 1}
              </button>
              <button
                onClick={() => {
                  setPage(page + 2)
                }}
              >
                {page + 2}
              </button>
              <button
                onClick={() => {
                  setPage(page + 3)
                }}
              >
                {page + 3}
              </button>
              <button
                onClick={() => {
                  setPage(page + 4)
                }}
              >
                {page + 4}
              </button>
              <button className="btnnext" onClick={handleClick}>
                <i className="large angle right icon"></i>
              </button>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default Cardbtn
