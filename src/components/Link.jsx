import React, {PropTypes} from "react"
import equal from "deep-equal"
import NUI, {Base} from "numbat-ui"
import router from "../utils/router"


export default class Link extends Base {
  static contextTypes = {
    Actions: PropTypes.object,
    currentRoute: PropTypes.object,
  }

  static propTypes = {
    activeClassName: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    params: PropTypes.object,
  }

  static defaultProps = {
    activeClassName: "Link-active",
  }


  isActive() {
    const stateParts = this.context.currentRoute.name.split('.')
    const propsParts = this.props.to.split('.')

    return (
      equal(stateParts.slice(0, propsParts.length), propsParts) &&
      (!this.props.params || equal(this.context.currentRoute.params, this.props.params))
    )
  }

  render() {
    const activeClass = this.isActive() ? ' '+this.props.activeClassName : ''

    return (
      <a {...this.baseProps({omitKnownPropTypes: true})}
        href={'#'+router.makePath(this.props.to, this.props.params)}
        className={this.getComponentClasses() + activeClass}>
        {this.props.children}
      </a>
    )
  }
}
