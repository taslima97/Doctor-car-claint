


const TableRow = ({ booking, handelDelete, handelBookingConfirm }) => {
    const { _id, img, service, date, price, status } = booking;

   

    return (
        <tr>
            <th>
                <button onClick={() => handelDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="mask w-24 rounded">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>
                {service}

            </td>
            <td>${price}</td>
            <td>{date}</td>
            <th>
                {
                    status==='confirm' ? <span className="font-semibold">confirmed</span>:<button onClick={()=>handelBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                }
            </th>
        </tr>
    );
};

export default TableRow;