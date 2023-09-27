"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import Link from "next/link";
// import { set } from 'mongoose';
const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    // console.log(email, password)
    // Handle the submit event and validate the form
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      setLoading(false);

      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success("Login Success");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error logging in");
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body p-5">
              <h1 className="mb-4 text-center">Login</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter a password.
                  </div>
                </div>
                <button type="submit" disabled={ loading} className="  btn text-dark fw-semibold bg-warning w-100 ">
                  {loading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true">
                  </span> : 'Register'}
                </button>
              </form>
            </div>

            <div className="row justify-content-center mt-3">
              <div className="col-12 col-md-8 col-lg-6">
                <div className="card shadow">
                  <div className="card-body p-5">
                    <p className="text-center">
                      Not a user yet? <Link href="/signup">Sign up</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* not a user yet */}
    </div>
  );
};

export default page;
