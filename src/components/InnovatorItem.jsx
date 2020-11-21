import React from 'react';

const InnovatorItem = ({stakeholder}) => {
    const {logo, name, locationName, location} = stakeholder;

    return (
        <div class="bg-gray-800 mt-4 flex flex-col rounded-md overflow-hidden border-2 border-gray-700">
            <div class="bg-white ml-4 mt-4 w-12 h-12 rounded overflow-hidden mr-4 flex-shrink-0 relative">
                <img class="absolute w-full h-full inset-0 object-cover" src={logo} alt="Logo" />
            </div>

            <div class="p-4">
                <h3 class="text-sm font-semibold">
                    { name }
                </h3>
                <p class="mt-1 capitalize text-sm leading-snug opacity-75">
                    { locationName }
                </p>
            </div>
        </div>
    );
}

export default InnovatorItem;