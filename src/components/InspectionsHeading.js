import React from 'react';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = {
    inspectionsHeading: {
        fontSize: '32px',
        color: '#1a73ba',
        margin: 0,
        textDecoration: 'none !important',
    },
}

const InspectionsHeading = (props) => {
    return (<h1 className={props.classes.inspectionsHeading}>
        <Link to="/" >
            Data Collection
        </Link>
    </h1 >);
}

export default withStyles(styles)(InspectionsHeading);