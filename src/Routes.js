import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Home from './views/Home';
import Login from './views/Login';
import PrivateRoute from './PrivateRoute';

// import Home from './views/Home';
// import Login from './views/Login';
// import Admin from './views/Admin';
// import PrivateRoute from './PrivateRoute';
// import Projects from './views/Admin/Projects';

const styles = {
    root: {
        fontFamily: ['"Open Sans"', "sans-serif"]
    }
};

const Routes = (props) => {
    const { classes } = props;
    return (
        <BrowserRouter>
            <div className={classes.root}>
                <div className="page-content">
                    <Switch>
                        <PrivateRoute path="/" component={Home} exact />
                        {/* <PrivateRoute path="/admin" component={Admin} exact /> */}
                        {/* <PrivateRoute path="/admin/projects/:email" component={Projects} exact /> */}
                        <Route path="/login" component={Login} exact />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default withStyles(styles)(Routes);