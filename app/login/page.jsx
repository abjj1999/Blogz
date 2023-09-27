"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const page = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading,setLoading] = useState(false);
    const router = useRouter();
   
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      // console.log(email, password)
      // Handle the submit event and validate the form
      try {
        const res = await fetch(`${process.env.API}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });

        if (!res.ok) {
          const data = await res.json();
          toast.error(data.err);
          return;
        }

        const data = await res.json();
        toast.success(data.success);
        // router.push('/dashboard');
        
      } catch (error) {
        console.log(error);
        toast.error("Error logging in");
      }
    }
  
    return (
      <div className="container py-5" >
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card shadow">
              <div className="card-body p-5">
                <h1 className="mb-4 text-center">Login</h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
                    <div className="invalid-feedback">
                      Please enter a valid email address.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required />
                    <div className="invalid-feedback">
                      Please enter a password.
                    </div>
                  </div>
                  <button type="submit" className="btn text-light bg-primary w-100">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default page
