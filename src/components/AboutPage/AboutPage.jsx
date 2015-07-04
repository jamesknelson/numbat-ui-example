import "./AboutPage.less"
import React from "react"
import NUI, {Base} from "numbat-ui"

export default class AboutPage extends Base {
  render() {
    return (
      <div {...this.baseProps({omitKnownPropTypes: true})}>
        <h1>About</h1>
      </div>
    )
  }
}
