import {DisneyCharacter} from '../DisneyCharacter';
import { FcPrevious, FcNext } from "react-icons/fc";
import { RiMickeyFill } from 'react-icons/ri';
import { useDisneyHook } from '../../hooks/useDisneyHook';
export const ItemListSearch = () => {
    const {isLoading, error, characters, nextPageHandler, previousPageHandler, currentPage, resultsPerPage, totalResults } = useDisneyHook(); 
    let content, perPageStats;
    if(isLoading){
        content = <div className='flex justify-around'><RiMickeyFill className='text-9xl text-blue-500'/></div>;
    } else if(error){
        content =  <div>{error.message}</div>;
    } else if(characters){
        const startIndex = (resultsPerPage * currentPage);
        const endIndex = startIndex + resultsPerPage;
        const charactersToShow = characters.slice(startIndex, endIndex);
        perPageStats = `Showing ${startIndex + 1} - ${endIndex} of ${totalResults} results`;
        content = charactersToShow.map((character) => {
            return <DisneyCharacter key={character._id} character={character} />
        })
    }
    
    const disablePreviousButton = (currentPage === 1 || currentPage === 0) ? true : false;
    
    
    return (
        <div className="flex flex-col">
            <div id="search-box" className="justify-end my-1">
                <input type="search" className="p-1 border rounded" placeholder="Search by Name" onFocus={(e) => e.currentTarget.select()} />
            </div>
            <div className="flex flex-row justify-between w-1/2 my-1">
            
        <button type="button" onClick={previousPageHandler} className={`text-xl ${disablePreviousButton ? `text-gray-500` : `text-blue-500`} cursor-pointer`} ><FcPrevious title="Previous" /></button>
        <button type="button" onClick={nextPageHandler}><FcNext className="text-xl text-blue-500 disabled:text-gray-500 cursor-pointer" title="Next"/></button>
        
            </div>
            <div id="item-listing" className="border overflow-y-auto h-[28rem] w-1/2">
                {content}
            </div> 
            {totalResults && <div>{perPageStats}</div>}
        </div>
    )
}