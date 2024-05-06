type GridFilterTypeEnum = 'search' | 'range' | 'values';

type GridFilterValue<T> = {
    type: GridFilterTypeEnum;
    filter: T;
    filterTo?: T;
};

type GridFilterSetValues<T> = {
    values: T[];
};

interface IMovie {
    name: string;
    year: number;
    rating: number;
    awards: string[];
}

class MoviesList {
    movies: IMovie[] = [];

    applySearchValue(filter: GridFilterValue<string>): IMovie[] {
        return this.movies;
    }

    applyFiltersValue(filter: GridFilterSetValues<string | number>): IMovie[] {
        return this.movies;
    }

}

interface ICategoryList {
    name: string;
    filmList: IMovie[];
}

class MoviesCategory {
    сategoryList: ICategoryList[] = [];

    applySearchValue(filter: GridFilterValue<string>): ICategoryList[] {
        return this.сategoryList;
    }

    applyFiltersValue(filter: GridFilterSetValues<string | number>): ICategoryList[] {
        return this.сategoryList;
    }

}

