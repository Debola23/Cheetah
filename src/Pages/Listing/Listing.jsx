import { Footer } from '../../Components/Footer/Footer'
import { Navv } from '../../Components/Navv/Navv'
import Styles from './Listing.module.css'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


  // Default marker icon fix for Leaflet in React
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"
  });

  // Map click component
  function LocationPicker({ setValue }) {
    const [position, setPosition] = useState(null);

    useMapEvents({
      click(e) {
        setPosition(e.latlng);
        setValue("location", e.latlng); // store in form
      }
    });

    return position ? <Marker position={position} /> : null;
  }


export const Listing = () => {


const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [imagePreviews, setImagePreviews] = useState([]);

  const onSubmit = async (data) => {
    // Convert FileList to array for sending
    const formData = new FormData();
    for (let key in data) {
      if (key === "images") {
        for (let file of data.images) {
          formData.append("images", file);
        }
      } else if (key === "location") {
        formData.append("location", JSON.stringify(data.location));
      } else {
        formData.append(key, data[key]);
      }
    }

    // Send to backend
    try {
      const res = await fetch("https://your-backend.com/api/rentals", {
        method: "POST",
        body: formData
      });

      if (!res.ok) throw new Error("Failed to submit");

      alert("Listing submitted successfully!");
    } catch (err) {
      console.error(err);
      alert("Error submitting listing");
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImagePreviews(files.map(file => URL.createObjectURL(file)));
  };

  return (
    <div className={Styles.listing} >
      <Navv/>
      <h3 className='text-center text-[2.5rem] font-bold pt-4.5'>Add Listing</h3>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 p-4 max-w-[68rem] mx-auto">
          {/* Category */}
          <div>
            <label className="block font-semibold text-[1.3rem] pb-3">1 .Category</label>
            <p className="text-gray-600 text-[14px] pb-2">These fields are mandatory</p>
            <select {...register("category", { required: "Category is required" })} className="w-full border border-[#dee2e6] p-2 rounded">
              <option value="">Select a category</option>
              <option value="">Electronics</option>
              <option value="apartment">Sports</option>
              <option value="villa">Film & Photography</option>
              <option value="cabin">Garden</option>
              <option value="studio">Home Tools</option>
              <option value="studio">Others</option>
            </select>
            {errors.category && <p className="text-red-500">{errors.category.message}</p>}
          </div>
          {/* Description */}
          <div>
            <label className="block font-semibold text-[1.3rem] pb-3">2 .Description</label>
            <input {...register("title", { required: "Title is required" })} className="w-full border border-[#dee2e6] p-2 rounded" placeholder="Name of item" />
            {errors.title && <p className="text-red-500">{errors.title.message}</p>}
          </div>
          <div>
            <textarea {...register("description", { required: "Description is required" })} className="w-full border border-[#dee2e6] p-2 rounded" placeholder="Describe your item..." />
            {errors.description && <p className="text-red-500">{errors.description.message}</p>}
          </div>
          {/* Price */}
          <div>
            <label className="block font-semibold text-[1.3rem] pb-3">3. Price</label>
            <div className={Styles.row} id={Styles.rowX}>
              <div className="col-lg-4 col-md-6">
                <input type="number" {...register("price", { required: "Price is required" })} 
                  className="w-full border  border-[#dee2e6]  p-2 rounded" 
                  placeholder="For 1 day" 
                />
              </div>
              <div className="col-lg-4 col-md-6">
                <input type="number" {...register("price", { required: "Price is required" })} 
                  className="w-full border  border-[#dee2e6]  p-2 rounded" 
                  placeholder="For 3 days" />
              </div>
              <div className="col-lg-4 col-md-6">
                <input type="number" {...register("price", { required: "Price is required" })} 
                  className="w-full border  border-[#dee2e6]  p-2 rounded" 
                  placeholder="For 4 days" />
              </div>
              <div className="col-lg-4 col-md-6">
                <input type="number" {...register("price", { required: "Price is required" })} 
                  className="w-full border  border-[#dee2e6]  p-2 rounded"
                  placeholder="For 7 days" />
              </div>   
            </div>
            {errors.price && <p className="text-red-500">{errors.price.message}</p>}
          </div>
          {/* Image upload */}
          <div>
            <label className="block font-semibold text-[1.3rem] pb-3">4. Images</label>
            <div className={Styles.row} id={Styles.rowX}>
              <div className="col-lg-4 col-md-6">
                <input type="file" {...register("images", { required: "At least one image is required" })}
                  onChange={handleImageChange} multiple 
                  className="w-full cursor-pointer p-6 bg-[#e1e1e1]"
                />
                {errors.images && <p className="text-red-500">{errors.images.message}</p>}
                <div className="flex gap-2 mt-2 flex-wrap">
                  {imagePreviews.map((src, i) => (
                    <img key={i} src={src} alt="Preview" className="w-24 h-24 object-cover rounded bg-[#e1e1e1]" />
                  ))}
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <input type="file" {...register("images", { required: "At least one image is required" })}
                  onChange={handleImageChange} multiple 
                  className="w-full cursor-pointer p-6 bg-[#e1e1e1]"
                />
                {errors.images && <p className="text-red-500">{errors.images.message}</p>}
                <div className="flex gap-2 mt-2 flex-wrap">
                  {imagePreviews.map((src, i) => (
                    <img key={i} src={src} alt="Preview" className="w-24 h-24 object-cover rounded bg-[#e1e1e1]" />
                  ))}
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <input type="file" {...register("images", { required: "At least one image is required" })}
                  onChange={handleImageChange} multiple 
                  className="w-full cursor-pointer p-6 bg-[#e1e1e1]"
                />
                {errors.images && <p className="text-red-500">{errors.images.message}</p>}
                <div className="flex gap-2 mt-2 flex-wrap">
                  {imagePreviews.map((src, i) => (
                    <img key={i} src={src} alt="Preview" className="w-24 h-24 object-cover rounded bg-[#e1e1e1]" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/*Handover location*/}
          <div>
            <label className="block font-semibold text-[1.3rem] pt-[2rem] pb-3">5. Handover Location</label>
            <div className="inline-block pt-2.5 px-4 py-2 bg-[#D6A95A] text-white rounded hover:bg-[#c18c32] cursor-pointer transition-colors">
              <p className="m-0">Add Location</p>
            </div>
            <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "300px", width: "100%" }}>
              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <LocationPicker setValue={setValue} />
            </MapContainer>
            {errors.location && <p className="text-red-500">Location is required</p>}
          </div>
          {/**/}

          <button type="submit" className="bg-amber-400 text-white pt-3.5 px-4 py-2 rounded hover:bg-amber-600">
            Post Listing
          </button>
        </form>
    </div>
      <Footer/>
    </div>
  )
}
