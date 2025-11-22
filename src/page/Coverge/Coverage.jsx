import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import { useLoaderData } from 'react-router';
import { FaSearch } from 'react-icons/fa';

const Coverage = () => {
    const position = [23.6850, 90.3563]
    const data = useLoaderData()
    // console.log(data);
    const mapRef = useRef()

    // "region": "Dhaka",
    // "district": "Dhaka",
    // "city": "Dhaka",
    // "covered_area": ["Uttara", "Dhanmondi", "Mirpur", "Mohammadpur"],
    // "status": "active",
    // "flowchart": "https://example.com/dhaka-flowchart.png",
    // "longitude": 90.4125,
    // "latitude": 23.8103

    const handleSearch = (e) => {
        e.preventDefault()
        const location = e.target.location.value
        const district = data.find( c => c.district.toLowerCase().includes(location.toLowerCase()))
        if(district){
            const cordinates = [district.latitude, district.longitude]
            console.log(cordinates);
            mapRef.current.flyTo(cordinates, 14)
        }
    }

    return (
        <div className='my-10'>
            <div className="flex items-center justify-between my-10">
                <div className="font-bold text-3xl text-secondary">
                    <h1>We Are Available At {data.length} District</h1>
                </div>
                <div className="">
                    <form onSubmit={handleSearch}>
                    <label className="input">
                        <FaSearch></FaSearch>
                    <input name='location' className='focus:w-60 transition-all duration-300 focus:outline-0 focus:border-none border-none' type="search" placeholder="Search" />
                    </label>
                    </form>
                </div>
            </div>
            <div className="">
                <MapContainer className='w-11/12 h-[800px] mx-auto' center={position} zoom={8} scrollWheelZoom={false} ref={mapRef}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        data.map((mark, index) =>
                            <Marker key={index} position={[mark.latitude, mark.longitude]}>
                                <Popup>
                                    <strong className='text-secondary'>City: {mark.city} <br />Covered-Area: {mark.covered_area.join(', ')}</strong>
                                </Popup>
                            </Marker>)
                    }
                </MapContainer>,
            </div>
        </div>
    );
};

export default Coverage;
