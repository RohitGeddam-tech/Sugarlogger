import React from "react"

const Secondpart_art = ({ Secondarray }) => {
  return (
    <>
      <div className="first-text">
        <p>
          Wanting to be healthier and get into better shape physically are great
          goals to have. However, you won’t see much transformation if you think
          about it but don’t take any actions to change your ways.
        </p>
        <p>
          You’ll be glad to hear that there are four steps you can take starting
          today that will put you on track to living a healthier lifestyle.
          You’ll feel better and have more natural energy when you take proper
          care of yourself and cut out any bad or poor habits that may be
          keeping you from greatness. Let these ideas inspire you to continue to
          find ways to improve your wellbeing and health over time.
        </p>
      </div>
      <div className="second-part">
        {Secondarray.map(doc => {
          const stn = doc.image.length
          return (
            <ol>
              <li>
                <h1>
                  {doc.id}. {doc.title}
                </h1>
                <p>{doc.text}</p>
                {stn === 1 ? (
                  <>
                    <div className="images4">
                      {doc.image.slice(0, 1).map(mark => (
                        <img src={mark} alt="multiple" />
                      ))}
                    </div>
                  </>
                ) : null}
                {stn === 2 ? (
                  <>
                    <div className="images5">
                      {doc.image.slice(0, 2).map(mark => (
                        <img src={mark} alt="multiple" />
                      ))}
                    </div>
                  </>
                ) : null}
                {stn === 3 ? (
                  <>
                    <div className="images3">
                      {doc.image.slice(0, 3).map(mark => (
                        <img src={mark} alt="multiple" />
                      ))}
                    </div>
                  </>
                ) : null}
                {stn === 4 ? (
                  <>
                    <div className="images3">
                      {doc.image.slice(0, 3).map(mark => (
                        <img src={mark} alt="multiple" />
                      ))}
                    </div>
                    <div className="images4">
                      {doc.image.slice(3, 4).map(mark => (
                        <img src={mark} alt="multiple" />
                      ))}
                    </div>
                  </>
                ) : null}
                {stn === 5 ? (
                  <>
                    <div className="images3">
                      {doc.image.slice(0, 3).map(mark => (
                        <img src={mark} alt="multiple" />
                      ))}
                    </div>
                    <div className="images5">
                      {doc.image.slice(3, 5).map(mark => (
                        <img src={mark} alt="multiple" />
                      ))}
                    </div>
                  </>
                ) : null}
                {stn === 6 ? (
                  <>
                    <div className="images3">
                      {doc.image.slice(0, 3).map(mark => (
                        <img src={mark} alt="multiple" />
                      ))}
                    </div>
                    <div className="images3">
                      {doc.image.slice(3, 6).map(mark => (
                        <img src={mark} alt="multiple" />
                      ))}
                    </div>
                  </>
                ) : null}
                <span>{doc.meta}</span>
              </li>
            </ol>
          )
        })}
      </div>
    </>
  )
}

export default Secondpart_art
