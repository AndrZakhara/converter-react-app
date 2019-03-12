import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  withStyles,
  Card,
  CardContent,
  IconButton
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

import styles from "./styles";

const ProfileView = ({ user, classes, toggle }) => (
  <div className={classes.container}>
    <div className={classes.header}>
      <Typography variant="display1">Profile</Typography>
      <IconButton onClick={toggle} color="primary">
        <EditIcon />
      </IconButton>
    </div>
    <Card>
      <CardContent>
        <Typography variant="headline">{user.get("name")}</Typography>
        <Typography variant="subheading" color="primary">
          {user.get("email")}
        </Typography>
        <Typography variant="subheading">{user.get("phone")}</Typography>
      </CardContent>
    </Card>
  </div>
);

ProfileView.propTypes = {
  user: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired
};

export default withStyles(styles)(ProfileView);