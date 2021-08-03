import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const SongDetail = props => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    console.log(props);
    return <div>
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {props.selectedSong ? props.selectedSong.title : null}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {props.selectedSong ? props.selectedSong.duration : null}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card></div>
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        selectedSong: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail);
