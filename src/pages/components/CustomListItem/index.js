import React from "react"
import {withStyles} from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import useBaseUrl from "@docusaurus/useBaseUrl"

const GenericListItem = withStyles({
  root: {
    paddingLeft:'20px',
    paddingRight: 0,
    borderLeft: 'solid 5px white',
    '&$selected': {
      backgroundColor: 'rgb(25, 175, 84, 0.08)',
    }
  },
  selected: {
    borderLeft: 'solid 5px #19af54',
  }
})((props) => <ListItem {...props} />);

const GenericListItemIcon = withStyles({
    root: {
      color:'black',
      minWidth:'20px',
      opacity: .5,
      width:'20px',
      marginRight:'15px',
    },
})((props) => <ListItemIcon {...props} />);

const GenericListItemText = withStyles({
  primary: {
    fontFamily:'Lato',
    fontSize: 15,
    fontWeight:'bold',
    color: 'black',
  },
})((props) => <ListItemText {...props} />);


const CustomListItem = ( {label, href, target, icon, isSelected}) => {
  return (
    <Link href={href} target={target} style={{textDecoration: 'none'}}>
      <GenericListItem button selected={isSelected}>
        <GenericListItemIcon >
          <img src={useBaseUrl(icon)} alt={label} />
        </GenericListItemIcon>
        <GenericListItemText primary={label} />
      </GenericListItem>
    </Link>
  )
}

export default CustomListItem;
