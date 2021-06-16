import React from 'react';
import './BeDonor.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from 'react';

const BeDonor = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const [beDonor, setBeDonor] = useState(false);

    const onSubmit = data => {
        // console.log(data);
        const donorData = {
            nid: data.nid,
            name: data.name,
            age: data.age,
            gender: data.gender,
            bloodGroup: data.bloodGrp,
            city: data.city,
            phnNo: data.phn,
            email: data.email,
            imageUrl: imageURL
        }

        const url = `http://localhost:5055/beDonor`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(donorData)
        })
            .then(res => {
                console.log('server side response', res);
            })

    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '9ab2328cdf5063bfa594a8f1d0a27125');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className='all-component text-light'>
            <h4 className='text-center pt-5 mt-5 text-success'>Enter Your Detail Information to Be A Donor</h4>
            <div className='donor-form'>
                <div className='bg-dark m-3 p-5 col-sm-10 col-md-8 col-lg-6 donor-form2'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" name="nid" placeholder='NID No.' {...register("nid")} className='form-control bg-dark text-light' /> <br />
                        <input type="text" name="name" placeholder='Enter Your Name' {...register("name")} required className='form-control bg-dark text-light' /> <br />
                        <input type="text" name="age" placeholder='Your Age' {...register("age")} required className='form-control bg-dark text-light' /> <br />
                        <input type="text" name="gender" placeholder='Your Gender' {...register("gender")} required className='form-control bg-dark text-light' /> <br />
                        {/* <input type="text" name="bloodGrp" placeholder='Your Blood Group' {...register("bloodGrp")} required className='form-control bg-dark text-light' /> <br /> */}
                        <div className='col-md-4 col-lg-4'>
                            <select name="bloodGrp"  {...register("bloodGrp")} className="form-control bg-dark text-light">
                                <option defaultValue>select blood group</option>
                                <option value="A negative">A-</option>
                                <option value="A positive">A+</option>
                                <option value="B negative">B-</option>
                                <option value="B positive">B+</option>
                                <option value="AB negative">AB-</option>
                                <option value="AB positive">AB+</option>
                                <option value="O negative">O-</option>
                                <option value="O positive">O+</option>
                            </select> <br />
                        </div>
                        <input type="text" name="city" placeholder='Your City' {...register("city")} required className='form-control bg-dark text-light' /> <br />
                        <input type="text" name="phn" placeholder='Mobile No.' {...register("phn")} className='form-control bg-dark text-light' /> <br />
                        <input type="text" name='email' placeholder='Your Email Address' {...register("email")} required className='form-control bg-dark text-light' /> <br />
                        <label><small>Attach Your Image</small></label>
                        <input type="file" name="photo" onChange={handleImageUpload} className='form-control bg-dark text-light' /> <br />
                        <input type="submit" className='form-control btn btn-success text-light' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BeDonor;

