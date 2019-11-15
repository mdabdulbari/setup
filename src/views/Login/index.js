import React, { useContext } from "react";
import { Redirect } from 'react-router-dom';
import { Grid, withStyles } from "@material-ui/core";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import * as firebaseui from "firebaseui";
import { AuthContext } from "../../helpers/Auth";

import styles from "./styles";
import backgroundImg from "../../assets/login-background.jpg";
import alwarqaLogo from "../../assets/alwarqaLogo.png";
import InspectionsHeading from "../../components/InspectionsHeading";

const Login = props => {
    const { classes } = props;
    const uiConfig = {
        signInFlow: "popup",
        signInSuccessUrl: "/",
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
        credentialHelper: firebaseui.auth.CredentialHelper.NONE
    };

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }
    return (
        <Grid container style={{ overflow: "hidden" }} >
            <h1 className={classes.heading}>
                Data
                <br/>
                Collection
            </h1>
            <img
                src={alwarqaLogo}
                alt="alwarqa logo"
                className={classes.alwarqaLogo}
            />
            <img
                src={backgroundImg}
                alt="map inside a car"
                className={classes.loginBackgroundImg}
            />
            <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
                className={classes.loginComponent}
            />
        </Grid>
    );
};

export default withStyles(styles)(Login);
