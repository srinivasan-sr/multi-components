import {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import {GET_DISNEY_CHARACTERS_LIST} from '../constants/http_links';
import { ZERO, RESULTS_PER_PAGE } from '../constants/textconstants';
import { DisneyCharacterList } from '../components/ItemListSearch/disney_character.types';
export const useDisneyHook = () => {

    const [characters, setCharacters] = useState<DisneyCharacterList>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(ZERO);
    const [maxPagesLoaded, setMaxPagesLoaded] = useState<number>(ZERO);
    const [resultsPerPage] = useState<number>(RESULTS_PER_PAGE['DEFAULT']);
    const [totalResults, setTotalResults] = useState<number>();
const fetchData = async () => {
    setIsLoading(true);
    await axios.get(`${GET_DISNEY_CHARACTERS_LIST}?page=${maxPagesLoaded+1}&pageSize=${resultsPerPage}`)
    .then((response)=> {
        setCharacters(charList => [...charList, ...response.data.data]);
        const {count, totalPages} = response.data.info;
        setTotalResults(count * totalPages);
        setMaxPagesLoaded(maxPagesLoaded+1);
    })
    .catch((error)=>{
        console.error(error);
        setError(error);
    })
    .finally(() => {
        setIsLoading(false);
    })
    
}
useEffect(useCallback(() => {fetchData()}, [fetchData]),[]);
const previousPageHandler = () => {
    if(currentPage === 0){
        console.log('Already on initial page');
        return;
    } else {
        setCurrentPage(currentPage => currentPage-1);
    }
}
const nextPageHandler = () => {
    if(currentPage+1 >= maxPagesLoaded){
        fetchData();
        setCurrentPage(currentPage => currentPage + 1);
    } else {
        setCurrentPage(currentPage => currentPage + 1);
    }
}

return {characters, isLoading, nextPageHandler, previousPageHandler, error, totalResults, currentPage, resultsPerPage}
}