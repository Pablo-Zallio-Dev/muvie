import type { Genre, MovieDTO } from "../types/types"
import imageError from '../assets/images/image_error.webp'

export const movieAdapter = (movie: MovieDTO, genre: Genre[]) => {



      return {
            backdropUrl: movie.backdrop_path ? `${import.meta.env.VITE_BASE_URL_IMAGE}${movie.backdrop_path}` : imageError,
            genres: movie.genre_ids.map((id) =>
                  genre.find(g => g.id === id)?.name || 'Género Desconocido'
            ),
            id: movie.id,
            originalLanguage: movie.original_language,
            originalTitle: movie.original_title,
            overview: movie.overview,
            posterUrl: movie.poster_path ? `${import.meta.env.VITE_BASE_URL_IMAGE}${movie.poster_path}` : imageError,
            year: movie.release_date ? movie.release_date.slice(0, 4) : '',
            title: movie.title,
            scoreAverage: Number(movie.vote_average.toFixed(1)),

      }



}

