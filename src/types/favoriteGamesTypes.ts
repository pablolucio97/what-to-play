import {Dispatch, SetStateAction} from 'react'

export type favoriteGamesTypes = {
    id?: number;
    title?: string;
    thumbnail: string;
    freetogame_profile_url?: string;
    isFavoriteState?: boolean;
    removeFromFavorites?: () => void;
}

export type favoritesGamesListType = {
    favoritesList: favoriteGamesTypes[];
    setFavoritesList: Dispatch<SetStateAction<any[]>>;
}