import React from 'react';
import Loader from './Loader';
import InnovatorItem from './InnovatorItem';

const InnovatorList = ({data, loading}) => {
    return (
        <>
            { loading && <Loader /> }
            <div class="mt-5">
                <div id="innovatorList" class="grid grid-cols-3 gap-3">
                    { data.map((stakeholder, index) => (
                        <InnovatorItem key={index} stakeholder={stakeholder} />
                    )) }
                </div>
            </div>
        </>
    );
}

export default InnovatorList;