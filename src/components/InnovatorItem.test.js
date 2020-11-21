import { render, screen } from '@testing-library/react';
import InnovatorItem from './InnovatorItem';

test('Shows image with alt', () => {
    const stakeholder = {
        logo: "https://tzinnovationmap.s3-us-west-2.amazonaws.com/innovators/magilach.png",
        name: "Dephics Company Limited",
        locationName: "Mabatini, Lake Zone, 33214",
        location: {
            type: "Point", 
            coordinates: [39.2411961, -6.774539]
        }
    };
    
    render(<InnovatorItem stakeholder={stakeholder} />);
    const imageWithAlt = screen.getByAltText("Innovator Logo");
    expect(imageWithAlt).toBeInTheDocument();
});
