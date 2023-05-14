import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useEffect } from "react";
import TableRow from "./TableRow";


const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const handelDelete = id => {
        const proceed = confirm('aer you sure you');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successful')
                        const remaining = bookings.filter(booking=>booking._id !== id)
                        setBookings(remaining)
                    }
                   
                })
        }
    }

    const handelBookingConfirm = id =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({status:'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if (data.modifiedCount > 0) {
            const remaining = bookings.filter(booking=>booking._id !== id);
            const updated = bookings.find(booking=>booking._id === id)
            updated.status = 'confirm'
            const newBooking = [updated,...remaining];
            setBookings(newBooking)
            }
        })
    }

    return (
        <div>
            <h1 className="text-5xl">your bookings:{bookings.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>image</th>
                            <th>service</th>
                            <th>price</th>
                            <th>date</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          bookings.map(booking=><TableRow booking={booking} handelBookingConfirm={handelBookingConfirm} handelDelete={handelDelete} key={booking._id}></TableRow>)  
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;