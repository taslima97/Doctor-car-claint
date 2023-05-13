
import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="mt-8">
            <div className="text-center">
                <h4 className="text-orange-500 font-bold text-3xl">Service</h4>
                <h2 className="text-5xl font-bold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
          <div className="grid grid-cols-3 gap-4">
          {
            services.map(service=><ServicesCard service={service} key={service._id}></ServicesCard>)
           }
          </div>
        </div>
    );
};

export default Services;