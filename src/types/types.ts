
/**
 * Interface para tipar los datos de los servicios 
 */
export interface GetPopularMoviesParams {
      category: string
      language?: string
      page?: number
}

/**
 * Interfaz para los estados del custom hooks
 */
export interface MoviesState {
      movies: Movie[];
      loading: boolean;
      error: boolean;
}


export interface MovieDTO {
      adult: boolean;
      backdrop_path: string | null;
      genre_ids: number[];
      id: number;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path: string | null;
      release_date: string;
      title: string;
      video: boolean;
      vote_average: number;
      vote_count: number;
}



export interface Movie {
      backdropUrl: string;
      genres: string[];
      id: number;
      originalLanguage: string;
      originalTitle: string;
      overview: string;
      posterUrl: string;
      year: string;
      title: string;
      scoreAverage: number;
}

export interface MovieSection {
      title: string
      loading: boolean
      error: boolean
      movies: Movie[]
}

export interface Genre {
      id: number;
      name: string
}

export type GetGerne = {
      genre: Genre[],
      isLoading: boolean,
      isError: boolean
      fetchGenre: () => Promise<void>
}

export interface MovieSelectionState {
      selectedMovie: Movie | null;
      setSelectedMovie: (movie: Movie) => void;
      clearSelectedMovie: () => void;
}


export interface SearchQuery {
      movieResults: Movie[]
      setMovieResults: (movies: Movie[]) => void
      searchQuery: string
      setSearchQuery: (query: string) => void
      fetchQuery: () => Promise<void>
}
