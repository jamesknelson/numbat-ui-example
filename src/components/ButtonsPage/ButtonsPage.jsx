import "./ButtonsPage.less"
import React from "react"
import NUI,
       {Base,
        AppBar,
        FlatButton,
        FloatingActionButton,
        FloatingActionButtonExpander,
        IconButton,
        RaisedButton} from "numbat-ui"

export default class ButtonsPage extends Base {
  render() {
    let counter = 1

    return (
      <div {...this.baseProps({omitKnownPropTypes: true})}>
        <AppBar
          title="Buttons"
          onToggleAppMenu={this.props.onToggleAppMenu}
        />

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

        <div>
          <FloatingActionButton iconType="star" tooltip="Set as favourite" tabIndex={counter++} type="primary" />
          <FloatingActionButton iconType="star-open" tabIndex={counter++} type="accent" />
          <FloatingActionButton iconType="star-open" tabIndex={counter++} type="primary" disabled />
          <FloatingActionButton iconType="star" tooltip="Set as favourite" tabIndex={counter++} type="accent" size="mini" />
          <FloatingActionButton iconType="star-open" tabIndex={counter++} type="primary" size="mini" />
          <FloatingActionButton iconType="star-open" tabIndex={counter++} type="accent" size="mini" disabled />
        </div>

        <div>
          <FloatingActionButtonExpander iconType="add">
            <FloatingActionButton iconType="edit" />
            <FloatingActionButton iconType="F" />
          </FloatingActionButtonExpander>
        </div>
      </div>
    )
  }
}
