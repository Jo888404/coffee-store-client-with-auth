

import { AiOutlineDelete } from "react-icons/ai";
import { IoEyeOutline } from 'react-icons/io5';
import { MdEdit } from 'react-icons/md';
import { Link } from "react-router";
import Swal from 'sweetalert2';


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { name, quantity, supplier, photo } = coffee;
  

    const handleDelete = (_id) => {
        console.log('Please delete', _id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                        const remaining = coffees.filter(coffee => coffee._id !== _id)
                        setCoffees(remaining);
                    })
            }
        });



    }
    return (
        <div className=''>
            <div className="card card-side bg-gray-500 shadow-sm ">
                <div>
                    <figure>
                        <img
                            src={photo}
                            alt="Movie" />
                    </figure>
                </div>
                <div className="card-body ">
                    <div>
                        <h2 className="card-title">Name: <span className='text-sm'>{name}</span></h2>
                        <h2 className="card-title">Chef: <span className='text-sm'>{supplier}</span></h2>
                        <h2 className="card-title">Price: <span className='text-sm'>{quantity}</span></h2>
                    </div>

                    <div className="card-actions justify-end grid grid-rows-1 items-center -mt-16">
                        <button className="btn border-none bg-[#D2B48C]"><IoEyeOutline className='text-2xl' /></button>
                       <Link to={`/updateCoffee/${coffee._id}`}>
                             <button className="btn  border-none"><MdEdit className='text-2xl' /></button>
                       </Link>
                        <button onClick={() => handleDelete(coffee._id)} className="btn btn-active border-none bg-[#EA4744]"><AiOutlineDelete className='text-2xl' /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;