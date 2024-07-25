import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import useCurrentUser from "../hooks/useCurrentUser";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CircularProgressIndicator from "../components/CircularProgressIndicator";

const SignUp = () => {
  const currentUser = useCurrentUser();
  const navigate = useNavigate();

  // Redirect if the user is already signed in
  if (currentUser) {
    toast.warning("Sign out first😉");
    navigate("/");
  }

  // Form fields states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Loading state
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true); // Set loading state to true

    // Check if email and password are provided
    if (!email || !password) {
      setLoading(false); // Set loading state to false if validation fails
      return;
    }

    try {
      // Attempt to create a new user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("User created successfully"); // Show success message
      navigate("/"); // Redirect to home page
    } catch (error) {
      toast.error(error.message); // Show error message if user creation fails
    } finally {
      // Reset form fields and loading state
      setEmail("");
      setPassword("");
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col w-full min-w-sm mt-4 gap-2 max-w-sm"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl text-green-700 mb-2 font-bold text-center">
          Register
        </h1>
        <label>Email</label>
        <input
          type="text"
          className="p-2 border-2 border-green-600 rounded-md focus:outline-none focus:border-green-700"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state on change
        />
        <label>Password</label>
        <input
          type="password"
          className="p-2 border-2 border-green-600 rounded-md focus:outline-none focus:border-green-700"
          placeholder="*************"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state on change
        />
        <button
          type="submit"
          className="flex bg-green-700 text-white p-2 rounded-md justify-center mb-2"
        >
          {loading ? <CircularProgressIndicator /> : "Sign Up"}{" "}
          {/* Show loading indicator or "Sign Up" text */}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
