export type gameCardTypes = {
  id: number;
  title?: string;
  thumbnail: string;
  short_description?: string;
  game_url?: string;
  publisher?: string;
  freetogame_profile_url?: string;
  addToFavorites?: (id: any) => void;
  removeFromFavorites?: () => void;
  prefetch?: (id: any) => void;
  actionLabelText?: string;
  isInactiveButton?: boolean;
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

