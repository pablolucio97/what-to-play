import 'regenerator-runtime/runtime';
import { useQuery, UseQueryOptions } from 'react-query'
import {gameTypes} from '../types/gameCardTypes'


export const getGames = async () => {
     const response = await fetch('https://www.freetogame.com/api/games')
     const data = await response.json()
    const games = data.map(game => {
        return {
            id: game.id,
            thumbnail: game.thumbnail,
            freetogame_profile_url: game.freetogame_profile_url,
            title: game.title,
        }
    })

    return games

}

export function useGamesList(options: UseQueryOptions){
    return useQuery('games', () => getGames(), {
        ...options
    })
}