import React, { useState } from 'react';

const maskPassword = (password) => {
  return '*'.repeat(password.length);
};

const PersonalInformation = () => {
  const [editingField, setEditingField] = useState(null);
  const [formData, setFormData] = useState({
    name: 'John Doe',
    address: '123 Main St Metropolis Countryland',
    contactNumber: '+91 1234567890',
    email: 'john.doe@example.com',
    password: 'secret123', // Example plaintext password (should be handled securely in real applications)
    vehiclePlate: 'CG 04 9990',
  });
  const [originalData, setOriginalData] = useState({ ...formData });
  const [profileImage, setProfileImage] = useState("https://cdn-icons-png.flaticon.com/128/1999/1999625.png");
  const [notification, setNotification] = useState("");

  const handleEditClick = (field) => {
    setOriginalData({ ...formData });
    setEditingField(field);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveClick = () => {
    setEditingField(null);
    setNotification("Changes saved successfully!");
    setTimeout(() => setNotification(""), 3000);
  };

  const handleCancelClick = () => {
    setFormData({ ...originalData });
    setEditingField(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white w-4/5 max-w-screen-lg p-5 shadow-md rounded-lg m-auto "> {/* Increased mt-8 for more top margin */}
      <header className="flex justify-between items-center border-b pb-3">
        <h1 className="text-xl font-bold">Your Account</h1>
        <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
          Sign out
        </button>
      </header>
  
      {notification && (
        <div className="bg-green-100 text-green-800 p-2 rounded mb-4">
          {notification}
        </div>
      )}
  
      <div className="flex flex-col md:flex-row items-start mt-5">
        <div className="flex flex-col items-start p-5">
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={handleImageChange}
              title="Change profile picture"
            />
          </div>
          <div className="mt-3">
            <h2 className="text-lg">{formData.name}</h2>
            <p className="text-gray-600">{formData.email}</p>
          </div>
        </div>
        <div className="mt-5 pt-5">
          <h2 className="text-lg mb-3 font-bold">Personal information</h2>
          <p className="mb-5">
            Manage your personal information, including phone numbers and email
            addresses where you can be contacted.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {['name', 'address', 'contactNumber', 'email', 'password','vehiclePlate' ].map((field, index) => (
              <div
                key={index}
                className="bg-gray-100 p-5 border border-gray-300 rounded relative text-left"
              >
                <h3 className="text-md font-semibold capitalize">
                  {field.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                {editingField === field ? (
                  <div>
                    <input
                      type={field === 'password' ? 'password' : 'text'}
                      name={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      className="mt-2 w-full p-2 border border-gray-300 rounded"
                    />
                    <div className="mt-2">
                      <button
                        onClick={handleSaveClick}
                        className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 mr-2"
                        title="Save changes"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancelClick}
                        className="bg-gray-300 text-gray-700 py-1 px-3 rounded hover:bg-gray-400"
                        title="Cancel"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p>{field === 'password' ? maskPassword(formData[field]) : formData[field]}</p>
                    <button
                      onClick={() => handleEditClick(field)}
                      className="absolute top-2 right-2 text-blue-500 hover:text-blue-600"
                      title="Edit"
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default PersonalInformation;
