import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoIcon, user_fallback } from "../lib/assets";
import AuthContext from "../../context/AuthContextProvider";

const ProfilePage = () => {
  const {authUser, updateProfile} = useContext(AuthContext); 

  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const [name, setName] = useState(authUser.fullName);
  const [bio, setBio] = useState(authUser.bio);

  const handleSubmit = async(event) => {
    event.preventDefault();

    if(!selectedImage) {
      await updateProfile({fullName: name, bio});
      navigate('/');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(selectedImage);
    reader.onload = async() => {
      const base64image = reader.result;
      await updateProfile({profilePic: base64image, fullName: name, bio});
      navigate("/");
    }
  }

  return (
    <div className="min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
      <div className="w-5/6 max-w-2xl backdrop-blur-xl text-gray-300 border-2 border-gray-600 flex items-center justify-between max-sm:flex-col-reverse rounded-lg">
        <form  onSubmit={handleSubmit} className="flex flex-col gap-5 p-10 flex-1">
          <h3 className="text-2xl ">Profile Details</h3>
          <hr className="-mt-2.5 text-zinc-500 w-full"/>
          <label
            htmlFor="avatar"
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              onChange={(e) => setSelectedImage(e.target.files[0])}
              type="file"
              id="avatar"
              accept=".png, .jpg, .jpeg"
              hidden
            />
            <img
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage)
                  : user_fallback
              }
              alt=""
              className={`w-12 h-12 ${selectedImage && "rounded-full"}`}
            />
            Upload Image
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            required
            placeholder="Your name"
            className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-300"
          />
          <textarea
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            placeholder="Your bio"
            rows={4}
            className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-300 resize-none"
            required
          ></textarea>

          <button type="submit" className="bg-gradient-to-r from-purple-400 to-violet-600 text-white p-2 rounded-full text-lg cursor-pointer">Update</button>
        </form>
        <img className={`max-w-44 aspect-square  mx-10 max-sm:mt-10 ${selectedImage && 'rounded-full'}`} src={authUser?.profilePic || logoIcon} alt="" />
      </div>
    </div>
  );
};

export default ProfilePage;
