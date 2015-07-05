import "./ButtonsPage.less"

import React from "react"
import {Base,
        AppBar,
        FlatButton,
        FloatingActionButton,
        FloatingActionButtonExpander,
        IconButton,
        IconMenu,
        MenuDivider,
        MenuItem,
        RaisedButton} from "numbat-ui"

export default class ButtonsPage extends Base {
  static propTypes = {
    onToggleAppMenu: React.PropTypes.func.isRequired,
  }


  onSelectMenuItem(value) {
    console.log(value, "menu item selected")
  }


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

        <div>
          <div style={{display: 'inline-block', marginRight: '15px'}}>
            <IconButton iconType="edit" tooltip="Edit" tabIndex={counter++} type="light" />
            <IconButton iconType="star" tooltip="Set as favourite" tabIndex={counter++} type="light" disabled />
            <IconButton iconType="details-menu" tooltip="Other Options" tabIndex={counter++} type="light" />
          </div>
          <div style={{display: 'inline-block', marginRight: '15px'}}>
            <IconButton iconType="edit" tooltip="Edit" tabIndex={counter++} type="light-primary" />
            <IconButton iconType="star" tooltip="Set as favourite" tabIndex={counter++} type="light-primary" disabled />
            <IconButton iconType="details-menu" tooltip="Other Options" tabIndex={counter++} type="light-primary" />
          </div>
          <div style={{display: 'inline-block', marginRight: '15px'}}>
            <IconButton iconType="edit" tooltip="Edit" tabIndex={counter++} type="light-accent" />
            <IconButton iconType="star" tooltip="Set as favourite" tabIndex={counter++} type="light-accent" disabled />
            <IconButton iconType="details-menu" tooltip="Other Options" tabIndex={counter++} type="light-accent" />
          </div>
        </div> 

        <div style={{backgroundColor: "#333333"}}>
          <div style={{display: 'inline-block', marginRight: '15px'}}>
            <IconButton iconType="edit" tooltip="Edit" tabIndex={counter++} type="dark" />
            <IconButton iconType="star" tooltip="Set as favourite" tabIndex={counter++} type="dark" disabled />
            <IconButton iconType="details-menu" tooltip="Other Options" tabIndex={counter++} type="dark" />
          </div>
          <div style={{display: 'inline-block', marginRight: '15px'}}>
            <IconButton iconType="edit" tooltip="Edit" tabIndex={counter++} type="dark-primary" />
            <IconButton iconType="star" tooltip="Set as favourite" tabIndex={counter++} type="dark-primary" disabled />
            <IconButton iconType="details-menu" tooltip="Other Options" tabIndex={counter++} type="dark-primary" />
          </div>
          <div style={{display: 'inline-block', marginRight: '15px'}}>
            <IconButton iconType="edit" tooltip="Edit" tabIndex={counter++} type="dark-accent" />
            <IconButton iconType="star" tooltip="Set as favourite" tabIndex={counter++} type="dark-accent" disabled />
            <IconMenu iconType="details-menu" tabIndex={counter++} type="dark-accent" onSelectItem={this.onSelectMenuItem}>
              <MenuItem label="Edit photo" value="edit" />
              <MenuItem label="View details" value="contact" />
              <MenuDivider />
              <MenuItem label="Delete" value="delete" />
            </IconMenu>
          </div>
        </div>
      </div>
    )
  }
}
