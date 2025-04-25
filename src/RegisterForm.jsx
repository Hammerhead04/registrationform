import { useState } from "react";

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
    fathername: "",
    mothername: "",
    city: "",
    state: "",
    country: "",
    college: "",
    semester: "",
    skills: ""
  });

  const handlingChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted! Check console for data.");
  };

  return (
    <div className="RegisterForm">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handlingChange}
            required
          />
        </div>
        <div>
          <label>Gender:</label><br />
          <select
            name="gender"
            value={formData.gender}
            onChange={handlingChange}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Age:</label><br />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handlingChange}
            required
            min="0"
          />
        </div>
        <div>
          <label>Father's Name:</label><br />
          <input
            type="text"
            name="fathername"
            value={formData.fathername}
            onChange={handlingChange}
          />
        </div>
        <div>
          <label>Mother's Name:</label><br />
          <input
            type="text"
            name="mothername"
            value={formData.mothername}
            onChange={handlingChange}
          />
        </div>
        <div>
          <label>City:</label><br />
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handlingChange}
          />
        </div>
        <div>
          <label>State:</label><br />
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handlingChange}
          />
        </div>
        <div>
          <label>Country:</label><br />
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handlingChange}
          />
        </div>
        <div>
          <label>College:</label><br />
          <input
            type="text"
            name="college"
            value={formData.college}
            onChange={handlingChange}
          />
        </div>
        <div>
          <label>Semester:</label><br />
          <input
            type="text"
            name="semester"
            value={formData.semester}
            onChange={handlingChange}
          />
        </div>
        <div>
          <label>Skills:</label><br />
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handlingChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegisterForm;