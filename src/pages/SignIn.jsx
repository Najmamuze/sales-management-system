import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useCurrentUser from "../hooks/useCurrentUser";
import CircularProgressIndicator from "../components/CircularProgressIndicator";

const SignIn = () => {
  const currentUser = useCurrentUser();
  const navigate = useNavigate();

  if (currentUser) {
    toast.warning("First sign out😉");
    navigate("/");
  }

  // Create form field states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  // Create loading state
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if user filled form fields
    if (!email || !password) return;

    // Start loading
    setLoading(true);
    try {
      // Sign ini
      await signInWithEmailAndPassword(auth, email, password);
      // Show success message
      toast.success("Signed In Successfully");
      // Go to home page
      navigate("/");
    } catch (error) {
      // Show error message
      toast.error(error.message);
    } finally {
      // Reset sign in form
      setEmail("");
      setPassword("");
      // Stop loading
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center">
      <form
        className="flex  flex-col w-full min-w-sm  mt-4 gap-2 max-w-sm"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl text-green-700 mb-2 font-bold text-center ">
          Sign In
        </h1>
        <label>Email</label>
        <input
          type="text"
          className="p-2 border-2 border-green-600 rounded-md focus:outline-none  focus:border-green-700"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Passowrd</label>
        <input
          type="password"
          className="p-2 border-2 border-green-600 rounded-md focus:outline-none  focus:border-green-700 mb-2"
          placeholder="*************"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="flex bg-green-700 text-white p-2 rounded-md justify-center"
        >
          {loading ? <CircularProgressIndicator /> : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default SignIn;
