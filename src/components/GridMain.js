import React from 'react'
import {Grid, Paper} from '@material-ui/core';
import {makeStyles}  from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100vw',
        margin: '0px',
        display: 'flex',
        justifyContent: 'center',
        
        left: '30',
        right: '0'


    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.secondary,
        background: theme.palette.success.light,
    }
}))








const GridMain = () => {
   const classes = useStyles();
    return (
        
        <div>
            <Grid className={classes.grid} container spacing={3} >
                <Grid item xs={12} sm={6} md={8}>
                    <Paper className={classes.paper} >xs=12</Paper>
                </Grid>
               
                <Grid item xs={12} sm={6} md={4}>
                    <Paper className={classes.paper} >xs=12</Paper>
                </Grid>
               
                <Grid item xs={12} sm={6} md={6}>
                    <Paper className={classes.paper} >xs=12</Paper>
                </Grid>
               
                <Grid item xs={12} sm={6} md={6}>
                    <Paper className={classes.paper} >xs=12</Paper>
                </Grid>
               









            </Grid>
            </div>
            
       
    )
}

export default GridMain


