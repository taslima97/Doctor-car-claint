import { Link } from "react-router-dom";



const ServicesCard = ({service}) => {
    
    const {_id, img, price, title} = service;
    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img}  className="rounded-xl h-[220px]"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className="text-xl text-orange-500 font-bold">Price: ${price}</p>
    <Link to={`checkout/${_id}`}>
    <button className="btn btn-error">book now</button></Link>
    <div className="card-actions">
   
    </div>
  </div>
</div> 
        </div>
    );
};

export default ServicesCard;