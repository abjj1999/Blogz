"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading,setLoading] = useState(false);
  
  const router = useRouter();
  
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body p-5">
              <h1 className="mb-4 text-center">Register</h1>
              <form onSubmit="">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" name="name" onChange="" required />
                  <div className="invalid-feedback">
                    Please enter a name.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" name="email" onChange="" required />
                  <div className="invalid-feedback">
                    Please enter a valid email address.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" name="password" onChange="" required />
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

export default RegisterPage;