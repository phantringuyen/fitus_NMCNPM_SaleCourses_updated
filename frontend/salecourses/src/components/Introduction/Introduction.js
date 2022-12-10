// introduction page
//
// Path: sellcourses/src/pages/about/about.js

import React from 'react';
// using muicss
import { Container, Row, Col } from 'muicss/react';
// using material-ui
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
// using react-icons
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Introduction() {
    // using material-ui
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        },
        main: {
            marginTop: theme.spacing(8),
            marginBottom: theme.spacing(2),
        },
    }));
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <Row>
                    <Col md="12">
                        <div className={classes.main}>
                            <Typography variant="h2" component="h1" gutterBottom>
                                SellCourses
                            </Typography>
                            <Typography variant="h5" component="h2" gutterBottom>
                                SellCourses is a platform for selling courses online.
                            </Typography>
                            <Typography variant="body1">
                                SellCourses is a platform for selling courses online. It is a website that allows you to sell your courses online. You can create your own courses and sell them online. You can also buy courses from other people. You can also create your own courses and sell them online. You can also buy courses from other people.
                            </Typography>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

