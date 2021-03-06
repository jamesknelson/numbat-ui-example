import "./NotFoundPage.less"
import React, {Component} from "react"
import {base} from "../../utils/decorators"
import {AppBar} from "numbat-ui"


@base
export default class NotFoundPage extends Component {
  render() {
    return (
      <div {...this.base()}>
        <AppBar
          title="Not Found"
          onToggleAppMenu={this.props.onToggleAppMenu}
        />
        <p>If you never viewed this page, would it ever have existed?</p>
      </div>
    )
  }
}
