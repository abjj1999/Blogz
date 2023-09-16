"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';



const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading,setLoading] = useState(false);

  
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('submitting form', name, email, password);

  }
  
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body p-5">
              <h1 className="mb-4 text-center">Register</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" value={name} className="form-control" id="name" name="name" onChange={(e) => setName(e.target.value)} required />
                  <div className="invalid-feedback">
                    Please enter a name.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" value={email} className="form-control" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
                  <div className="invalid-feedback">
                    Please enter a valid email address.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" value={password} className="form-control" id="password" name="password" onChange={(e)=> setPassword(e.target.value)} required />
                  <div className="invalid-feedback">
                    Please enter a password.
                  </div>
                </div>
                <button type="submit" className=" fw-semibold btn text-light bg-primary w-100 ">
                  {loading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true">
                  </span> : 'Register'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;