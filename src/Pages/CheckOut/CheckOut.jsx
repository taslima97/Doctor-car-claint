
import Swal from 'sweetalert2'
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const CheckOut = () => {
    const service = useLoaderData();
// eslint-disable-next-line no-unused-vars
const {_id, title, price, img} = service;
const {user} = useContext(AuthContext);
const handelBookService = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
        customerName: name,
        email,
        date,
        img,
        service:title,
        service_id: _id,
        price:price
    }
    console.log(booking)
    fetch('http://localhost:5000/bookings',{
     method:'POST',
     headers:{
      'content-type':'application/json'
     } ,
     body: JSON.stringify(booking) 
    })
    .then(res=>res.json())
    .then(data=>{
        if (data.insertedId) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
}
    return (
        <form onSubmit={handelBookService}>
            <div className="card-body">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" name="date" defaultValue={user?.displayName} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Deu amount</span>
                    </label>
                    <input type="text" defaultValue={'$'+ price} className="input input-bordered" />
                </div>
               </div>

                <div className="form-control mt-6">
                  
                    <button className="btn btn-block btn-error">submit</button>
                </div>
            </div>

        </form>

    );
};

export default CheckOut;