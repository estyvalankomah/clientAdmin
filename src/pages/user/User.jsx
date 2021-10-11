import "./user.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { carRows } from "../../dummyData";
import { useState, useRef } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';  
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const options = ['Monthly', 'Annual'];

export default function User() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(carRows);
  const [openSplit, setOpenSplit] = useState(false);
  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpenSplit(false);
  };

  const handleToggle = () => {
    setOpenSplit((prevOpen) => !prevOpen);
  };

  const handleCloseSplit = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const columns = [   
    {
      field: "carPlate",
      headerName: "Car Plate",
      width: 130,
    },
    {
      field: "expiryDate",
      headerName: "Expiry Date",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ]

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit</h1>
      </div>
      <div className="userContainer">
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit User</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Firstname</label>
                <input
                  type="text"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Lastname</label>
                <input
                  type="text"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
        <div className="userCars">
          <div className="carShowTop">
            <span className="userUpdateTitle">User Cars</span>
          </div>
          <div className="userShowBottom">
            <DataGrid
              autoHeight
              rows={data}
              disableSelectionOnClick
              columns={columns}
              pageSize={3}
            />
            <div style={{display: "flex", alignItems: "center", justifyContent: "flex-end", marginTop: "20px"}}>
              <button className="userAddButton1" onClick={handleClickOpen}>Add Car</button>
              <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
                <Button>Renew Subscription</Button>
                <Button
                  color="primary"
                  size="small"
                  aria-controls={openSplit ? 'split-button-menu' : undefined}
                  aria-expanded={openSplit ? 'true' : undefined}
                  aria-label="select merge strategy"
                  aria-haspopup="menu"
                  onClick={handleToggle}
                >
                  <ArrowDropDownIcon />
                </Button>
              </ButtonGroup>
              <Popper open={openSplit} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleCloseSplit}>
                        <MenuList id="split-button-menu">
                          {options.map((option, index) => (
                            <MenuItem
                              key={option}
                              disabled={index === 2}
                              selected={index === selectedIndex}
                              onClick={(event) => handleMenuItemClick(event, index)}
                            >
                              {option}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Car to Subscription</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Car Plate"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
