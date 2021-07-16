import style from './Nav.module.scss';
import Button from '@material-ui/core/Button';
import {useState} from "react";
import {withStyles} from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const Nav = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);

    };

    return (
        <div className={style.nav}>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                Open Menu
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                    <ListItemText onClick={handleClose} primary={<a href="#skills">Skills</a>} />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemText onClick={handleClose} primary={<a href="#projects">Projects</a>} />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemText onClick={handleClose} primary={<a href="#contacts">Contacts</a>} />
                </StyledMenuItem>
            </StyledMenu>

    );
    {/*// return (*/}
    {/*//     <div className={style.nav}>*/}
    {/*//         <a href="#main">Main</a>*/}
    {/*//         <a href="#skills">Skills</a>*/}
    {/*//         <a href="#projects">Projects</a>*/}
    {/*//         <a href="#contacts">Contacts</a>*/}
     </div>
    )

}

export default Nav;
