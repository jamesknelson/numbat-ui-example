import "./AboutPage.less"
import React, {Component} from "react"
import {base} from "../../utils/decorators"
import {AppBar} from "numbat-ui"


@base
export default class AboutPage extends Component {
  render() {
    return (
      <div {...this.base()}>
        <AppBar
          title="Numbat UI"
          onToggleAppMenu={this.props.onToggleAppMenu}
        />
      </div>
    )
  }
}
