import "./AboutPage.less"
import React from "react"
import NUI, {Base, AppBar} from "numbat-ui"

export default class AboutPage extends Base {
  render() {
    return (
      <div {...this.baseProps({omitKnownPropTypes: true})}>
        <AppBar
          title="Numbat UI"
          onToggleAppMenu={this.props.onToggleAppMenu}
        />
      </div>
    )
  }
}
