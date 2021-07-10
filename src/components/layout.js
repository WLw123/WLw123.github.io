import React from "react"
//import { css } from "@emotion/core"
import { Link } from "gatsby"

export default ({ children }) => (
  <div style={{ margin:'3rem auto', maxWidth: 600}}>
    <Link to={`/`}>
      <h3 style={{ display:'inline-block',fontStyle: 'normal'}}>
        Home
      </h3>
    </Link>
    {children}
  </div>
)