import "./AboutPage.less"
import React from "react"
import Base from "../Base"
import {AppBar} from "numbat-ui"

export default class AboutPage extends Base {
  render() {
    return (
      <div {...this.baseProps()}>
        <AppBar
          title="Numbat UI"
          onToggleAppMenu={this.props.onToggleAppMenu}
        />
      </div>
    )
  }
}
