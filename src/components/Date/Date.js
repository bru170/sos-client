import React from "react"
import Moment from "react-moment"

const Date = ({date}) => {
  return (
    <Moment format="MMMM D, YYYY" withTitle>
      {date}
    </Moment>
  )
}

export default Date
