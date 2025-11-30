import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';

const Parcel = () => {
    const { register, handleSubmit, watch } = useForm()
    const regions = useLoaderData()
    const unfilteredRegion = regions.map(d => d.region)
    console.log(unfilteredRegion);
    const filteredRegion = [...new Set(unfilteredRegion)]
    console.log(filteredRegion);
    const senderRegion = watch('senderRegion')
    const reciverRegion = watch("reciverRegion")

    const regionDistricts = (region) => {
        const districtsRegion = regions.filter(d => d.region === region)
        const districts = districtsRegion.map(district => district.district)
        return districts
    }
    const axiosInstence = useAxiosSecure()
    const {user} = useAuth()




    const handleFormData = (data) => {
        console.log(data);
        const isDocument = data.radiotype === 'document'
        const isSameDistrict = data.senderDistrict === data.reciversDistrict
        const parcelWeight = parseFloat(data.Parcel_Weigth)

        let cost = 0;
        if (isDocument) {
            cost = isSameDistrict ? 60 : 80;
        }
        else {
            if (parcelWeight < 3) {
                cost = isSameDistrict ? 110 : 150;
            }
            else {
                const minCharge = isSameDistrict ? 110 : 150;
                const extraWeight = parcelWeight - 3;
                const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40;
                cost = minCharge + extraCharge;
            }
        }
        console.log(cost);
        Swal.fire({
            title: "Confirm The Request?",
            text: `You Delivary Would cost ${cost}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm"
        })
        .then((result) => {
            if (result.isConfirmed) {

                axiosInstence.post("/parcelInfo", data)
                .then(res => {
                    console.log(res.data);
                    
                })
                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
            }
        });


    }

    return (
        <div className='space-y-5 my-20'>
            <h1 className='text-3xl text-secondary font-bold'>Send A Parcel</h1>
            <div className="">
                <h1 className='text-xl text-secondary font-bold'>Enter Your Parcel Detail</h1>
            </div>
            <div className="w-full h-0 border-2 border-gray-600"></div>
            {/* Form */}
            <form onSubmit={handleSubmit(handleFormData)}>
                {/* radio button */}
                <div className="space-x-3">
                    <label className="label">
                        <input type="radio" {...register("rediotype")} value="document" class="radio text-primary" checked="checked" />
                        <span className='text-black'>Document</span>
                    </label>
                    <label className="label">
                        <input type="radio" {...register("rediotype")} value="Non-document" class="radio text-primary" checked="checked" />
                        <span className='text-black'>Non-Document</span>
                    </label>
                </div>
                {/* parcel information */}
                <div className="flex justify-between gap-5">
                    <fieldset class="fieldset w-full">
                        <label class="label text-lg font-bold text-secondary">Parcel Name</label>
                        <input {...register('Parcel_Name')} type="text" class="input w-full" placeholder="Parcel Name" />
                    </fieldset>
                    <fieldset class="fieldset w-full">
                        <label class="label text-lg font-bold text-secondary">Parcel Weigth (KG)</label>
                        <input {...register('Parcel_Weigth')} type="number" class="input w-full" placeholder="Parcel Weigth" />
                    </fieldset>
                </div>
                {/* Detail section */}

                {/* Sender-detail */}
                <div className="flex items-center justify-between gap-5 mt-10">
                    <fieldset class="fieldset w-full space-y-2">
                        <h1 className='text-secondary font-bold text-2xl'>Senders Details</h1>
                        <div className="">
                            <label class="label text-lg font-bold text-secondary">Sender Name</label>
                            <input {...register('Sender_Name')} defaultValue={user.displayName} type="text" class="input w-full" placeholder="Sender Name" />
                        </div>
                        <div className="">
                            <label class="label text-lg font-bold text-secondary">Sender Email</label>
                            <input {...register('Sender_Email')} defaultValue={user.email} type="text" class="input w-full" placeholder="Sender Email" />
                        </div>
                        <div className="">
                            <label class="label text-lg font-bold text-secondary">Adress</label>
                            <input {...register('Adress')} type="text" class="input w-full" placeholder="Adress" />
                        </div>
                        <div className="">
                            <label class="label text-lg font-bold text-secondary">Phone Number</label>
                            <input {...register('Phone_Number')} type="tel" class="input w-full" placeholder="Phone Number" />
                        </div>

                        <div className="">
                            <h1 className="text-lg text-secondary font-bold">Region</h1>
                            <select {...register('senderRegion')} defaultValue="Pick a Region" className="select w-full">
                                <option disabled={true}>Pick a Region</option>
                                {
                                    filteredRegion.map((f, i) => <option key={i} value={f}>{f}</option>)
                                }
                            </select>
                        </div>

                        <div className="">
                            <h1 className="text-secondary text-lg font-bold">District</h1>
                            <select {...register("senderDistrict")} defaultValue="Pick a District" className="select w-full">
                                <option disabled={true}>Pick a District</option>
                                {
                                    regionDistricts(senderRegion).map((f, i) => <option key={i} value={f}>{f}</option>)
                                }
                            </select>
                        </div>

                        <div className="">
                            <label class="label text-lg font-bold text-secondary">Pick-Up Instruction</label>
                            <textarea {...register('Pick-Up_Description')} className="textarea w-full" placeholder='Pick-Up Descriptions'></textarea>
                        </div>
                    </fieldset>

                    {/* Recivers-Details */}
                    <fieldset class="fieldset w-full space-y-2">
                        <h1 className='text-secondary font-bold text-2xl'>Recivers Details</h1>
                        <div className="">
                            <label class="label text-lg font-bold text-secondary">Reciver Name</label>
                            <input {...register('Reciver_Name')} type="text" class="input w-full" placeholder="Reciver Name" />
                        </div>
                        <div className="">
                            <label class="label text-lg font-bold text-secondary">Reciver Email</label>
                            <input {...register('Reciver_Email')} type="text" class="input w-full" placeholder="Reciver Email" />
                        </div>
                        <div className="">
                            <label class="label text-lg font-bold text-secondary">Adress</label>
                            <input {...register('Adress')} type="text" class="input w-full" placeholder="Adress" />
                        </div>
                        <div className="">
                            <label class="label text-lg font-bold text-secondary">Phone Number</label>
                            <input {...register('Phone_Number')} type="tel" class="input w-full" placeholder="Phone Number" />
                        </div>

                        <div className="">
                            <h1 className="text-secondary text-lg font-bold">Region</h1>
                            <select {...register("reciverRegion")} defaultValue="Pick a Region" className="select w-full">
                                <option disabled={true}>Pick a Region</option>
                                {
                                    filteredRegion.map((f, i) => <option value={f} key={i}>{f}</option>)
                                }
                            </select>
                        </div>

                        <div className="">
                            <h1 className="text-secondary text-lg font-bold">District</h1>
                            <select {...register('reciversDistrict')} defaultValue="Pick a District" className="select w-full">
                                <option disabled={true}>Pick a District</option>
                                {
                                    regionDistricts(reciverRegion).map((f, i) => <option value={f} key={i}>{f}</option>)
                                }
                            </select>
                        </div>

                        <div className="">
                            <label class="label text-lg font-bold text-secondary">Delivery Instructions</label>
                            <textarea {...register('Delivery_Instruction')} className="textarea w-full" placeholder='Delivery Instruction'></textarea>
                        </div>
                    </fieldset>
                </div>
                <input type="submit" className="btn btn-primary text-black mt-3" />
            </form>
        </div>
    );
};

export default Parcel;