import React from 'react';

const InnovatorItem = ({stakeholder}) => {
    const {logo, name, locationName, location} = stakeholder;
    const mapImage = `https://www.mapquestapi.com/staticmap/v4/getplacemap?key=HkQT4BGfQ9clGrwhLknjPxeF08UZ3k9K&location=${location.coordinates.reverse().join(',')}&size=400,200&type=map&zoom=13&imagetype=jpg&scalebar=false&`;
    
    return (
        <div className="bg-gray-800 mt-4 flex flex-col rounded-md overflow-hidden border-2 border-gray-700">
            <div className="mb-4 bg-white pt-16 bg-cover bg-center" style={{backgroundImage: `url(${mapImage})`}}>
                <div className="bg-white ml-4 mt-4 -mb-8 w-16 h-16 rounded-full border-8 border-gray-800 overflow-hidden mr-4 flex-shrink-0 relative">
                    <img className="absolute w-full h-full inset-0 object-cover" src={logo} alt="Innovator Logo" />
                </div>
            </div>

            <div className="p-4">
                <h3 className="text-sm font-semibold">
                    { name }
                </h3>
                <p className="mt-1 capitalize text-sm leading-snug opacity-75">
                    { locationName }
                </p>
            </div>
        </div>
    );
}

export default InnovatorItem;