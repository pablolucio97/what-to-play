import {FormEvent} from 'react'
export type gameCardTypes = {
  id?: number;
  title?: string;
  thumbnail: string;
  short_description?: string;
  game_url?: string;
  publisher?: string;
  freetogame_profile_url?: string;
  addToFavorites?: () => void;
  removeFromFavorites?: () => void;
  actionLabelText?: string;
  isInactiveButton?: boolean;
  show_favorite?: boolean;
};


export type gameTypes = {
  id?: number;
  title?: string;
  thumbnail?: string;
  short_description?: string;
  game_url?: string;
  publisher?: string;
  freetogame_profile_url?: string;
}

