import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class SongList extends Component {
  render() {
    return <div>
     <h1>React Redux Setup</h1> 
    <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Song Name</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Button</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.songs.map((song) => (
              <TableRow key={song.title}>
                <TableCell component="th" scope="row">
                  {song.title}
                </TableCell>
                <TableCell>{song.duration}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => this.props.selectSong(song)}>
                    Select
              </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer></div>;
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    songs: state.songs
  }
}

export default connect(mapStateToProps, { selectSong })(SongList);
