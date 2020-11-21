import React from 'react';

const Pagination = () => {
    return (
        <div class="mt-8 flex flex-col items-center justify-center">
            <svg stroke="red" strokeWidth="3" width="40" height="40" viewBox="0 0 100 100" role="progressbar"
                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" fill="none" r="35" strokeDasharray="164.93361431346415 56.97787143782138"
                    transform="rotate(269.874 50 50)">
                    <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50"
                        keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
                </circle>
            </svg>
            <p class="mt-2 text-sm tracking-wider opacity-75">Fetching innovators...</p>
        </div>
    );
}

export default Pagination;