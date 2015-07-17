import React, {Component, PropTypes} from "react"
import { AppCanvas,
         NavMenu,
         NavMenuItem,
         NavMenuDivider,
         StandardLayout,
         Util
       } from "numbat-ui"
import {base} from "../utils/decorators"
import Link from "./Link"
import AboutPage from "./AboutPage/AboutPage"
import ButtonsPage from "./ButtonsPage/ButtonsPage"
import DemoPage from "./DemoPage/DemoPage"
import InputsPage from "./InputsPage/InputsPage"
import NotFoundPage from "./NotFoundPage/NotFoundPage"


function linkTo(to) {
  return function(props, children) {
    return React.createElement(
      Link,
      Object.assign(props, {to}),
      children
    )
  }
}


@base
export default class Application extends Component {
  static childContextTypes = {
    Actions: PropTypes.object,
    currentRoute: PropTypes.object
  }


  constructor(props) {
    super(props)
    this.state = {menuOpen: Util.MediaQueries.lg.matches}
  }


  getChildContext() {
    return {
      Actions: this.props.Actions,
      currentRoute: this.props.route
    }
  }


  toggleAppMenu() {
    this.setState({menuOpen: !this.state.menuOpen})
  }


  changeMenuOpen(menuOpen) {
    this.setState({menuOpen})
  }
    

  render() {
    let page

    //
    // Create a component based on the current route
    //
    
    switch (this.props.route.name) {
      case "about":
        page = <AboutPage onToggleAppMenu={this.toggleAppMenu.bind(this)} />
        break

      case "buttons":
        page = <ButtonsPage onToggleAppMenu={this.toggleAppMenu.bind(this)} />
        break

      case "inputs":
        page = <InputsPage onToggleAppMenu={this.toggleAppMenu.bind(this)} />
        break

      case "demo":
        page = <DemoPage onToggleAppMenu={this.toggleAppMenu.bind(this)} />
        break

      default: 
        page = <NotFoundPage onToggleAppMenu={this.toggleAppMenu.bind(this)} />
    }

    const menu = 
      <NavMenu>
        <NavMenuItem
          iconType="help"
          label="About"
          targetFactory={linkTo('about')}
          selected={this.props.route.name == "about"}
        />
        <NavMenuItem
          iconType="star"
          label="Buttons"
          targetFactory={linkTo('buttons')}
          selected={this.props.route.name == "buttons"}
        />
        <NavMenuItem
          iconType="star"
          label="Inputs"
          targetFactory={linkTo('inputs')}
          selected={this.props.route.name == "inputs"}
        />
        <NavMenuItem
          iconType="menu"
          label="Demo"
          targetFactory={linkTo('demo')}
          selected={this.props.route.name == "demo"}
        />
      </NavMenu>

    return (
      <AppCanvas {...this.base()}>
        <StandardLayout
          view={page}
          menu={menu}
          menuOpen={this.state.menuOpen}
          onChangeMenuOpen={this.changeMenuOpen.bind(this)}
        />
      </AppCanvas>
    )
  }
}
