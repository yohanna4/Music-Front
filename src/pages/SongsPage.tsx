import React, { useEffect } from 'react';
// import { Songs } from '../components/Songs';
// import { Songs } from '../components/Songs';
import { SongList } from '../components/SongList';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { songSelector } from '../redux/store';
import { getSongPending } from '../redux/songs/songSlice';

const SongsPage = () => {
    const { songs } = useAppSelector(songSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (songs.length === 0) {
            dispatch(getSongPending());
        }
    }, [dispatch, songs.length]);
    return (
        <div>
            <SongList />
        </div>
    );
};

export default SongsPage;
