import "./ButtonsPage.less"
import React from "react"
import NUI, {Base, FlatButton, RaisedButton} from "numbat-ui"

export default class ButtonsPage extends Base {
  render() {
    let counter = 1

    return (
      <div {...this.baseProps({omitKnownPropTypes: true})}>
        <div>
          <FlatButton label="Default Flat" tabIndex={counter++} />
          <FlatButton label="Primary Flat" tabIndex={counter++} type="primary" />
          <FlatButton label="Accent Flat" tabIndex={counter++} type="accent" />
          <FlatButton label="Disabled Flat" tabIndex={counter++} disabled />
        </div>

        <div>
          <RaisedButton label="Default Raised" tabIndex={counter++} />
          <RaisedButton label="Primary Raised" tabIndex={counter++} type="primary" />
          <RaisedButton label="Accent Raised" tabIndex={counter++} type="accent" />
          <RaisedButton label="Disabled Raised" tabIndex={counter++} disabled />
        </div>
      </div>
    )
  }
}
