import React from "react"

const CourseInfo = props => {
  console.log(props)
  return (
    <div style={{ marginBottom: "20px" }}>
      <div dangerouslySetInnerHTML={{ __html: props.message }} />
      {/* {props.title === "Driver's Manual Course" ||
      props.title === "Curso Manual de Conductores" ? (
        " "
      ) : (
        <Link to="/registration" className="waves-effect waves-light btn">
          Register
        </Link>
      )} */}
    </div>
  )
}

export default CourseInfo
