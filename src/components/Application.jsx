import React, {PropTypes} from "react"
import {Base, AppCanvas, StandardLayout, Util} from "numbat-ui"
import Link from "./Link"
import ButtonsPage from "./ButtonsPage/ButtonsPage"
import AboutPage from "./AboutPage/AboutPage"
import NotFoundPage from "./NotFoundPage/NotFoundPage"


const LinkFactory = React.createFactory(Link)


export default class Application extends Base {
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

      default: 
        page = <NotFoundPage onToggleAppMenu={this.toggleAppMenu.bind(this)} />
    }

    // const menu = 
    //   <NUI.NavMenu>
    //     <NUI.NavMenuItem
    //       iconType="star"
    //       label="Buttons"
    //       targetFactory={LinkFactory}
    //       selected={this.props.route.name == "buttons"}
    //     />
    //     <NUI.NavMenuDivider />
    //     <NUI.NavMenuItem
    //       iconType="help"
    //       label="Help &amp; Feedback"
    //       targetFactory={LinkFactory}
    //       selected={this.props.route.name == "about"}
    //     />
    //   </NUI.NavMenu>

    const menu = <div />

    return (
      <AppCanvas {...this.baseProps({omitKnownPropTypes: true})}>
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
