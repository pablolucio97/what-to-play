import 'regenerator-runtime/runtime';
import { useQuery, UseQueryOptions } from 'react-query'
import {api} from '../services/api'
import {gameTypes} from '../types/gameCardTypes'


export const getGames = async () => {
     const { data } = await api.get<gameTypes[]>('/games')
    const games = data.map(game => {
        return {
            id: game.id,
            thumbnail: game.thumbnail,
            freetogame_profile_url: game.freetogame_profile_url
        }
    })

    return games

}

export function useGamesList(options: UseQueryOptions){
    return useQuery('games', () => getGames(), {
        ...options
    })
}