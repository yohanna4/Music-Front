import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { genreSelector } from '../redux/store';
import { getGenrePending } from '../redux/genre/genreSlice';
import { GenreStatistic } from '../components/GenreStatistic';

export const GenrePage = () => {
    const { genres } = useAppSelector(genreSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (genres.length === 0) {
            dispatch(getGenrePending());
        }
    }, [dispatch, genres.length]);
    return (
        <div>
            <GenreStatistic />
        </div>
    );
};
