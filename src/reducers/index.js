import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        { title: 'Enjoy Enjami', duration: '02:10' },
        { title: 'Maroon 5', duration: '03.01' },
        { title: 'Badhri', duration: '05:10' },
        { title: 'Billie', duration: '06.01' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {

    if(action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})