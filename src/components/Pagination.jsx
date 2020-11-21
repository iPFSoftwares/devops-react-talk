import React from 'react';

const Pagination = () => {
    return(
        <div class="ml-auto flex items-center">
            <button disabled id="prevPageButton"
                class="text-xs bg-transparent py-1 leading-none px-3 text-gray-500 hover:text-gray-100 border border-gray-600 hover-border-gray-400 hover:bg-gray-800 rounded-full flex items-center"
                onclick="gotToPrevPage()">
                <svg class="w-4 -ml-2 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                    Prev
                </button>

            <span class="mx-5 text-xs opacity-75">
                Page <span id="pageNumber">1</span> of <span id="totalPages">20</span>
            </span>

            <button disabled id="nextPageButton"
                class="text-xs bg-transparent py-1 leading-none px-3 text-gray-500 hover:text-gray-100 border border-gray-600 hover-border-gray-400 hover:bg-gray-800 rounded-full flex items-center"
                onclick="gotToNextPage()">
                Next
                    <svg class="w-4 -mr-2 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
        </div>
    );
}
 
export default Pagination;