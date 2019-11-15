import React from 'react';
import { Button, AppBar, withStyles, Toolbar, Grid } from '@material-ui/core';
import Icon from "@material-ui/icons/PowerSettingsNew"

import styles from './styles';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <AppBar position="static">
                <Toolbar className="nav-bar">
                    <Grid item xs={9} >
                        <h2 className={classes.appBarHeading}>Data Collection</h2>
                    </Grid>
                    <Grid item xs={3} alignContent="flex-end">
                        <Button variant="contained" color="danger" className={classes.button} onClick={this.logout}>
                            <Icon className={classes.powerIcon} />
                            LOG OUT
                        </Button>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(Home);