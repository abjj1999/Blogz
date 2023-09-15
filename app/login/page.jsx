"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const page = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleChange = (event) => {
      switch (event.target.name) {
        case 'email':
          setEmail(event.target.value);
          break;
        case 'password':
          setPassword(event.target.value);
          break;
        default:
          break;
      }
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle the submit event and validate the form
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
                    <input type="email" className="form-control" id="email" name="email" onChange={handleChange} required />
                    <div className="invalid-feedback">
                      Please enter a valid email address.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={handleChange} required />
                    <div className="invalid-feedback">
                      Please enter a password.
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default page
