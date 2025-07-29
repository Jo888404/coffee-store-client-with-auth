import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import Header from './Header';

const UpdateCoffee = () => {
    const loadedCoffee = useLoaderData();

    const { _id } = loadedCoffee;



    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(updatedCoffee);




        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success',
                        text: 'Coffee updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                }
            })




        form.reset();
    }
    return (
        <div className='bg-gray-500 max-w-9/12 m-auto' >
           
            <div className='text-center p-12'>
                <h2 className='text-[#374151] md:text-5xl text-3xl font-medium'>Update New Coffee</h2>
                <p className='md:w-9/12 m-auto mt-5 md:text-2xl font-normal text-black'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            
            <form className='max-w-9/12 m-auto' onSubmit={handleUpdateCoffee}>

                {/* form-1, */}

                <div className='md:flex gap-4 '>
                    <div className='w-full'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend font-semibold md:text-2xl">Name</legend>
                            <input type="text" className="input w-full " name='name' defaultValue={loadedCoffee.name} placeholder="Americano Coffee" />

                        </fieldset>
                    </div>
                    <div className='w-full'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend font-semibold md:text-2xl">Chef</legend>
                            <input type="text" className="input w-full" name='quantity' defaultValue={loadedCoffee.quantity} placeholder="Mr. Matin Paul" />

                        </fieldset>
                    </div>
                </div>
                {/* form-2, */}

                <div className='md:flex gap-4 '>
                    <div className='w-full'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend font-semibold md:text-2xl">Supplier</legend>
                            <input type="text" className="input w-full " defaultValue={loadedCoffee.supplier} name='supplier' placeholder="Cappu Authorizer" />

                        </fieldset>
                    </div>
                    <div className='w-full'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend font-semibold md:text-2xl">Taste</legend>
                            <input type="text" className="input w-full" defaultValue={loadedCoffee.taste} name='taste' placeholder="Sweet and hot" />

                        </fieldset>
                    </div>
                </div>
                {/* form-3, */}

                <div className='md:flex gap-4 '>
                    <div className='w-full'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend font-semibold md:text-2xl">Category</legend>
                            <input type="text" className="input w-full " defaultValue={loadedCoffee.category} name='category' placeholder="Americano" />

                        </fieldset>
                    </div>
                    <div className='w-full'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend font-semibold md:text-2xl">Details</legend>
                            <input type="text" className="input w-full" defaultValue={loadedCoffee.details} name='details' placeholder="Espresso with hot water" />

                        </fieldset>
                    </div>

                </div>
                <div className='w-full'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold md:text-2xl">Photo</legend>
                        <input type="text" className="input w-full" defaultValue={loadedCoffee.photo} name='photo' placeholder="https://i.ibb.co/PGqMPr9/11.png" />

                    </fieldset>
                </div>

                <input type="submit" className="btn btn-block mb-20 mt-6 bg-[#D2B48C] text-[#331A15]" value="Update Coffee Details" />
            </form>
        </div>
    );
};

export default UpdateCoffee;