import "./DemoPage.less"
import React, {Component} from "react"
import {base} from "../../utils/decorators"
import { AppBar,
         // FloatingActionButton,
         // FloatingActionButtonExpander, 
       } from "numbat-ui"


@base
class ContactCard extends Component {
  render() {
    return (
      <ui.CardLayout
        className="CardManager-card-layout"
        actions={cardActions}
        header={cardHeader}
        main={cardMain}
        footer={cardFooter}
      />
    )
  }
}


@base
export default class DemoPage extends Component {
  render() {
    const action = 
      <FloatingActionButtonExpander iconType="add">
        <FloatingActionButton iconType="edit" />
        <FloatingActionButton iconType="F" />
      </FloatingActionButtonExpander>

    return (
      <div {...this.base()}>
        <AppBar
          title="Demo"
          onToggleAppMenu={this.props.onToggleAppMenu}
          overhang="md-plus"
        />
      </div>
    )
  }
}



// # ListItem = React.createClass
// #   propTypes:
// #     record: React.PropTypes.object.isRequired

// #   onSelectMenuItem: (value) ->
// #     console.log("selected", value, "for", record.name)

// #   render: ->
// #     <ui.List.Avatar
// #       text={@record.name}
// #     >
// #       <ui.IconMenu
// #         iconType="details-menu"
// #         type="light"
// #         onSelectItem={@onSelectMenuItem}
// #       >
// #         <ui.MenuItem label="Delete" value="delete" />
// #       </ui.IconMenu>
// #     </ui.List.Avatar>



// Buttons = React.createClass

//   propTypes:
//     onToggleAppMenu: React.PropTypes.func.isRequired


//   onSelectMenuItem: (value) ->
//     console.log value, "menu item selected"


//   onSelectListItem: ->
//     console.log "list item clicked"


//   render: ->
//     records = [
//       {starred: true, name: "Takehiro"}
//       {starred: false, name: "James"}
//       {starred: false, name: "Yukiko"}
//     ]

//     cardActions = <div className="ContactCard-actions">
//       <ui.IconButton iconType="close" className="ContactCard-close" />
//       <ui.IconButton iconType="star" />
//       <ui.IconMenu iconType="details-menu" onSelectItem={@onSelectMenuItem}>
//         <ui.MenuItem label="Edit photo" value="edit" />
//         <ui.MenuItem label="View details" value="contact" />
//         <ui.MenuDivider />
//         <ui.MenuItem label="Delete" value="delete" />
//       </ui.IconMenu>
//     </div>
              
//     cardHeader = <header className="ContactCard-header">
//       <h1 className="ContactCard-display-name">Rhianna Nelson</h1>
//     </header>

//     cardMain = <div className="ContactCard-main">
//       <ui.List>
//         <ui.List.Tile>
//           <ui.List.Icon type="photos" />
//           <ui.List.Label label="Photos" />
//           <ui.List.IconButton iconType="add" />
//         </ui.List.Tile>
//         <ui.List.Divider type="no-keyline" />
//         <ui.List.Tile>
//           <ui.List.Icon type="cards" />
//           <ui.List.Label label="Cards" />
//           <ui.List.IconButton iconType="add" />
//         </ui.List.Tile>
//         <ui.List.Tile>
//           <ui.List.KeylineSpacer />
//           <ui.List.LabeledText label="Rhianna">Preferred Name</ui.List.LabeledText>
//           <ui.List.IconMenu iconType="details-menu" onSelectItem={@onSelectMenuItem}>
//             <ui.MenuItem label="Delete" value="delete" />
//           </ui.List.IconMenu>
//         </ui.List.Tile>

//         <ui.List.Tile>
//           <ui.List.KeylineSpacer />
//           <ui.List.LabeledText label="Wildest Weddings">Organization</ui.List.LabeledText>
//           <ui.List.IconMenu iconType="details-menu" onSelectItem={@onSelectMenuItem}>
//             <ui.MenuItem label="Delete" value="delete" />
//           </ui.List.IconMenu>
//         </ui.List.Tile>

//         <ui.List.Tile>
//           <ui.List.KeylineSpacer />
//           <ui.List.LabeledText label="Creative Director">Position</ui.List.LabeledText>
//           <ui.List.IconMenu iconType="details-menu" onSelectItem={@onSelectMenuItem}>
//             <ui.MenuItem label="Delete" value="delete" />
//           </ui.List.IconMenu>
//         </ui.List.Tile>

//         <ui.List.Divider type="no-keyline" />
//         <ui.List.Tile>
//           <ui.List.Icon type="notes" />
//           <ui.List.Label label="Notes" />
//         </ui.List.Tile>

//         <ui.List.Divider type="no-keyline" />

//         <ui.List.Tile>
//           <ui.List.KeylineSpacer type="notes" />
//           <ui.List.Label label="Lorem Ipsum" />
//         </ui.List.Tile>
//         <ui.List.Tile>
//           <ui.List.KeylineSpacer type="notes" />
//           <ui.List.Label label="Lorem Ipsum" />
//         </ui.List.Tile>
//         <ui.List.Tile>
//           <ui.List.KeylineSpacer type="notes" />
//           <ui.List.Label label="Lorem Ipsum" />
//         </ui.List.Tile>
//         <ui.List.Tile>
//           <ui.List.KeylineSpacer type="notes" />
//           <ui.List.Label label="Lorem Ipsum" />
//         </ui.List.Tile>
//         <ui.List.Tile>
//           <ui.List.KeylineSpacer type="notes" />
//           <ui.List.Label label="Lorem Ipsum" />
//         </ui.List.Tile>
//         <ui.List.Tile>
//           <ui.List.KeylineSpacer type="notes" />
//           <ui.List.Label label="Lorem Ipsum" />
//         </ui.List.Tile>
//         <ui.List.Tile>
//           <ui.List.KeylineSpacer type="notes" />
//           <ui.List.Label label="Lorem Ipsum" />
//         </ui.List.Tile>
//         <ui.List.Tile>
//           <ui.List.KeylineSpacer type="notes" />
//           <ui.List.Label label="Lorem Ipsum" />
//         </ui.List.Tile>
//         <ui.List.Tile>
//           <ui.List.KeylineSpacer type="notes" />
//           <ui.List.Label label="Lorem Ipsum" />
//         </ui.List.Tile>
//         <ui.List.Tile>
//           <ui.List.KeylineSpacer type="notes" />
//           <ui.List.Label label="Lorem Ipsum" />
//         </ui.List.Tile>
//         <ui.List.Tile>
//           <ui.List.KeylineSpacer type="notes" />
//           <ui.List.Label label="Lorem Ipsum" />
//         </ui.List.Tile>
//         <ui.List.Tile>
//           <ui.List.KeylineSpacer type="notes" />
//           <ui.List.Label label="Lorem Ipsum" />
//         </ui.List.Tile>

//       </ui.List>
//     </div>

//     cardFooter =
//       <div />

//     <div>
//       
//       <div className="CardManager">

//         <div className="CardManager-list ContactList">
//           <div className="toolbarSpacer" />
//           <ui.Paper className="ContactList-paper" shape="square">
//             <ui.ScrollBox className="ContactList-scrollbox">
//               <ui.List>
//                 <ui.List.IconGroupTile onClick={@onSelectListItem} firstInGroup="star" className="selected">
//                   <ui.List.Avatar placeholderIcon="user" />
//                   <ui.List.LabeledText label="Rhianna Nelson">Wildest Weddings</ui.List.LabeledText>
//                   <ui.List.IconMenu iconType="details-menu" onSelectItem={@onSelectMenuItem}>
//                     <ui.MenuItem label="Delete" value="delete" />
//                   </ui.List.IconMenu>
//                 </ui.List.IconGroupTile>

//                 <ui.List.IconGroupTile onClick={@onSelectListItem} firstInGroup="B">
//                   <ui.List.Avatar src="/images/bill-gates-40.jpg" placeholderIcon="user" />
//                   <ui.List.LabeledText label="Bill Gates">Microsoft</ui.List.LabeledText>
//                   <ui.List.IconMenu iconType="details-menu" onSelectItem={@onSelectMenuItem}>
//                     <ui.MenuItem label="Delete" value="delete" />
//                   </ui.List.IconMenu>
//                 </ui.List.IconGroupTile>

//                 <ui.List.IconGroupTile onClick={@onSelectListItem} firstInGroup="E">
//                   <ui.List.Avatar src="/images/elon-musk-40.jpg" placeholderIcon="user" />
//                   <ui.List.LabeledText label="Elon Musk">SpaceX</ui.List.LabeledText>
//                   <ui.List.IconMenu iconType="details-menu" onSelectItem={@onSelectMenuItem}>
//                     <ui.MenuItem label="Delete" value="delete" />
//                   </ui.List.IconMenu>
//                 </ui.List.IconGroupTile>

//                 <ui.List.IconGroupTile onClick={@onSelectListItem} firstInGroup="J">
//                   <ui.List.Avatar src="/images/jeff-bezos-40.jpg" placeholderIcon="user" />
//                   <ui.List.LabeledText label="Jeff Bezos">Amazon</ui.List.LabeledText>
//                   <ui.List.IconMenu iconType="details-menu" onSelectItem={@onSelectMenuItem}>
//                     <ui.MenuItem label="Delete" value="delete" />
//                   </ui.List.IconMenu>
//                 </ui.List.IconGroupTile>

//                 <ui.List.IconGroupTile onClick={@onSelectListItem} firstInGroup="L">
//                   <ui.List.Avatar src="/images/larry-ellison-40.jpg" placeholderIcon="user" />
//                   <ui.List.LabeledText label="Larry Ellison">Oracle</ui.List.LabeledText>
//                   <ui.List.IconMenu iconType="details-menu" onSelectItem={@onSelectMenuItem}>
//                     <ui.MenuItem label="Delete" value="delete" />
//                   </ui.List.IconMenu>
//                 </ui.List.IconGroupTile>

//                 <ui.List.IconGroupTile onClick={@onSelectListItem}>
//                   <ui.List.Avatar src="/images/larry-page-40.jpg" placeholderIcon="user" />
//                   <ui.List.LabeledText label="Larry Page">Google</ui.List.LabeledText>
//                   <ui.List.IconMenu iconType="details-menu" onSelectItem={@onSelectMenuItem}>
//                     <ui.MenuItem label="Delete" value="delete" />
//                   </ui.List.IconMenu>
//                 </ui.List.IconGroupTile>

//                 <ui.List.IconGroupTile onClick={@onSelectListItem} firstInGroup="M">
//                   <ui.List.Avatar src="/images/marissa-mayer-40.jpg" placeholderIcon="user" />
//                   <ui.List.LabeledText label="Marissa Mayer">Yahoo!</ui.List.LabeledText>
//                   <ui.List.IconMenu iconType="details-menu" onSelectItem={@onSelectMenuItem}>
//                     <ui.MenuItem label="Delete" value="delete" />
//                   </ui.List.IconMenu>
//                 </ui.List.IconGroupTile>

//                 <ui.List.IconGroupTile onClick={@onSelectListItem}>
//                   <ui.List.Avatar src="/images/mark-zuckerberg-40.jpg" placeholderIcon="user" />
//                   <ui.List.LabeledText label="Mark Zuckerberg">Facebook</ui.List.LabeledText>
//                   <ui.List.IconMenu iconType="details-menu" onSelectItem={@onSelectMenuItem}>
//                     <ui.MenuItem label="Delete" value="delete" />
//                   </ui.List.IconMenu>
//                 </ui.List.IconGroupTile>

//                 <ui.List.IconGroupTile onClick={@onSelectListItem}>
//                   <ui.List.Avatar src="/images/masayoshi-son-40.jpg" placeholderIcon="user" />
//                   <ui.List.LabeledText label="Masayoshi Son">Softbank</ui.List.LabeledText>
//                   <ui.List.IconMenu iconType="details-menu" onSelectItem={@onSelectMenuItem}>
//                     <ui.MenuItem label="Delete" value="delete" />
//                   </ui.List.IconMenu>
//                 </ui.List.IconGroupTile>

//                 <ui.List.IconGroupTile onClick={@onSelectListItem} firstInGroup="P">
//                   <ui.List.Avatar src="/images/paul-graham-40.jpg" placeholderIcon="user" />
//                   <ui.List.LabeledText label="Paul Graham">Y Combinator</ui.List.LabeledText>
//                   <ui.List.IconMenu iconType="details-menu" onSelectItem={@onSelectMenuItem}>
//                     <ui.MenuItem label="Delete" value="delete" />
//                   </ui.List.IconMenu>
//                 </ui.List.IconGroupTile>

//                 <ui.List.IconGroupTile onClick={@onSelectListItem} firstInGroup="T">
//                   <ui.List.Avatar src="/images/terry-gou-40.jpg" placeholderIcon="user" />
//                   <ui.List.LabeledText label="Terry Gou">Foxconn</ui.List.LabeledText>
//                   <ui.List.IconMenu iconType="details-menu" onSelectItem={@onSelectMenuItem}>
//                     <ui.MenuItem label="Delete" value="delete" />
//                   </ui.List.IconMenu>
//                 </ui.List.IconGroupTile>

//                 <ui.List.IconGroupTile onClick={@onSelectListItem}>
//                   <ui.List.Avatar src="/images/tim-cook-40.jpg" placeholderIcon="user" />
//                   <ui.List.LabeledText label="Tim Cook">Apple</ui.List.LabeledText>
//                   <ui.List.IconMenu iconType="details-menu" onSelectItem={@onSelectMenuItem}>
//                     <ui.MenuItem label="Delete" value="delete" />
//                   </ui.List.IconMenu>
//                 </ui.List.IconGroupTile>

//               </ui.List>
//             </ui.ScrollBox>
//           </ui.Paper>
//         </div>
//         <div className="CardManager-card">
//           <ui.CardLayout
//             className="CardManager-card-layout"
//             actions={cardActions}
//             header={cardHeader}
//             main={cardMain}
//             footer={cardFooter}
//           />
//         </div>
//         <div className="CardManager-action">
//           <ui.FloatingActionButtonExpander iconType="add">
//             <ui.FloatingActionButton iconType="edit" />
//             <ui.FloatingActionButton iconType="F" />
//           </ui.FloatingActionButtonExpander>
//         </div>
//       </div>
//     </div>


// module.exports = Buttons
