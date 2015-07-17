import "./InputsPage.less"
import React, {Component} from "react"
import {base} from "../../utils/decorators"
import {AppBar} from "numbat-ui"


@base
export default class InputsPage extends Component {
  render() {
    return (
      <div {...this.base()}>
        <AppBar
          title="Inputs"
          onToggleAppMenu={this.props.onToggleAppMenu}
        />
      </div>
    )
  }
}
