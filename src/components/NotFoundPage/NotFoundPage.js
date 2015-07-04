import "./NotFoundPage.less"
import React from "react"
import NUI, {Base} from "numbat-ui"

export default class NotFoundPage extends Base {
  render() {
    return (
      <div {...this.baseProps({omitKnownPropTypes: true})}>
        <h1 className={this.c("title")}>404</h1>
      </div>
    )
  }
}
