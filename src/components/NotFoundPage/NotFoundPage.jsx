import "./NotFoundPage.less"
import React from "react"
import Base from "../Base"
import {AppBar} from "numbat-ui"

export default class NotFoundPage extends Base {
  render() {
    return (
      <div {...this.baseProps()}>
        <AppBar
          title="Not Found"
          onToggleAppMenu={this.props.onToggleAppMenu}
        />
        <p>If you never viewed this page, would it ever have existed?</p>
      </div>
    )
  }
}
