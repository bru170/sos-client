import React from "react"
import Moment from "react-moment"

const Date = ({format, date}) => {
  return (
    <Moment format={`${format}`} withTitle>
      {date}
    </Moment>
  )
}

export default Date
