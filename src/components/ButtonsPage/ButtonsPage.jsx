import "./ButtonsPage.less"
import React, {Component} from "react"
import {base} from "../../utils/decorators"
import { AppBar,
         FlatButton,
         FloatingActionButton,
         FloatingActionButtonExpander,
         IconButton,
         IconMenu,
         MenuDivider,
         MenuItem,
         RaisedButton} from "numbat-ui"


@base
export default class ButtonsPage extends Component {
  static propTypes = {
    onToggleAppMenu: React.PropTypes.func.isRequired,
  }


  onSelectMenuItem(value) {
    console.log(value, "menu item selected")
  }


  render() {
    let counter = 1

    const onPress = () => console.log('button pressed')

    return (
      <div {...this.base()}>
        <AppBar
          title="Buttons"
          onToggleAppMenu={this.props.onToggleAppMenu}
        />

        <div>
          <FlatButton label="Default Flat" tabIndex={counter++} onPress={onPress} />
          <FlatButton label="Primary Flat" tabIndex={counter++} type="primary" onPress={onPress} />
          <FlatButton label="Accent Flat" tabIndex={counter++} type="accent" onPress={onPress} />
          <FlatButton label="Disabled Flat" tabIndex={counter++} onPress={onPress} disabled />
        </div>

        <div>
          <RaisedButton label="Default Raised" tabIndex={counter++} onPress={onPress} />
          <RaisedButton label="Primary Raised" tabIndex={counter++} type="primary" onPress={onPress} />
          <RaisedButton label="Accent Raised" tabIndex={counter++} type="accent" onPress={onPress} />
          <RaisedButton label="Disabled Raised" tabIndex={counter++} onPress={onPress} disabled />
        </div>

        <div>
          <FloatingActionButton iconType="star" tooltip="Set as favourite" tabIndex={counter++} type="primary" onPress={onPress} />
          <FloatingActionButton iconType="star-open" tabIndex={counter++} type="accent" onPress={onPress} />
          <FloatingActionButton iconType="star-open" tabIndex={counter++} type="primary" onPress={onPress} disabled />
          <FloatingActionButton iconType="star" tooltip="Set as favourite" tabIndex={counter++} type="accent" size="mini" onPress={onPress} />
          <FloatingActionButton iconType="star-open" tabIndex={counter++} type="primary" size="mini" onPress={onPress} />
          <FloatingActionButton iconType="star-open" tabIndex={counter++} type="accent" size="mini" onPress={onPress} disabled />
        </div>

        <div>
          <FloatingActionButtonExpander iconType="add" tabIndex={counter++}>
            <FloatingActionButton iconType="edit" onPress={onPress} />
            <FloatingActionButton iconType="F" onPress={onPress} />
          </FloatingActionButtonExpander>
        </div>

        <div>
          <div style={{display: 'inline-block', marginRight: '15px'}}>
            <IconButton onPress={onPress} iconType="edit" tooltip="Edit" tabIndex={counter++} type="light" />
            <IconButton onPress={onPress} iconType="star" tooltip="Set as favourite" tabIndex={counter++} type="light" disabled />
            <IconButton onPress={onPress} iconType="details-menu" tooltip="Other Options" tabIndex={counter++} type="light" />
          </div>
          <div style={{display: 'inline-block', marginRight: '15px'}}>
            <IconButton onPress={onPress} iconType="edit" tooltip="Edit" tabIndex={counter++} type="light-primary" />
            <IconButton onPress={onPress} iconType="star" tooltip="Set as favourite" tabIndex={counter++} type="light-primary" disabled />
            <IconButton onPress={onPress} iconType="details-menu" tooltip="Other Options" tabIndex={counter++} type="light-primary" />
          </div>
          <div style={{display: 'inline-block', marginRight: '15px'}}>
            <IconButton onPress={onPress} iconType="edit" tooltip="Edit" tabIndex={counter++} type="light-accent" />
            <IconButton onPress={onPress} iconType="star" tooltip="Set as favourite" tabIndex={counter++} type="light-accent" disabled />
            <IconButton onPress={onPress} iconType="details-menu" tooltip="Other Options" tabIndex={counter++} type="light-accent" />
          </div>
        </div> 

        <div style={{backgroundColor: "#333333"}}>
          <div style={{display: 'inline-block', marginRight: '15px'}}>
            <IconButton onPress={onPress} iconType="edit" tooltip="Edit" tabIndex={counter++} type="dark" />
            <IconButton onPress={onPress} iconType="star" tooltip="Set as favourite" tabIndex={counter++} type="dark" disabled />
            <IconButton onPress={onPress} iconType="details-menu" tooltip="Other Options" tabIndex={counter++} type="dark" />
          </div>
          <div style={{display: 'inline-block', marginRight: '15px'}}>
            <IconButton onPress={onPress} iconType="edit" tooltip="Edit" tabIndex={counter++} type="dark-primary" />
            <IconButton onPress={onPress} iconType="star" tooltip="Set as favourite" tabIndex={counter++} type="dark-primary" disabled />
            <IconButton onPress={onPress} iconType="details-menu" tooltip="Other Options" tabIndex={counter++} type="dark-primary" />
          </div>
          <div style={{display: 'inline-block', marginRight: '15px'}}>
            <IconButton onPress={onPress} iconType="edit" tooltip="Edit" tabIndex={counter++} type="dark-accent" />
            <IconButton onPress={onPress} iconType="star" tooltip="Set as favourite" tabIndex={counter++} type="dark-accent" disabled />
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
