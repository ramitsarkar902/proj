import { useState } from 'react';
import { Link } from 'react-router-dom';
import signupSvg from '../Assets/img/signup/signup.svg';
import useAuth from '../Hooks/useAuth';

function Signup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');

  const { handleSignIn } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = JSON.stringify({
      email,
      name,
      dob,
      country,
      city,
      state,
      address,
      pincode,
      password,
    });
    handleSignIn(body);
  };

  return (
    <div className="flex flex-row p-6">
      <div className="content-center w-1/2">
        <img src={signupSvg} alt="" srcSet="" />
      </div>
      <div className="max-w-md mx-auto rounded content-center w-1/2">
        <div className="flex justify-center min-h-screen p-6">
          <div className="w-full">
            <h1 className="text-2xl font-bold tracking-wider text-gray-800 font-sans">
              Sign up
            </h1>
            <h4>Enter details mentioned below</h4>
            <form className="pt-8" onSubmit={handleSubmit}>
              <div className="pr-2">
                <label className="block mb-2 text-sm">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter name"
                  className="h-10 block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="pt-4 pr-2">
                <label className="block mb-2 text-sm">Email ID</label>
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-10 block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700"
                />
              </div>

              <div className="pt-4 pr-2">
                <label className="block mb-2 text-sm">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-10 block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700"
                />
              </div>

              <div className="flex flex-row pt-4">
                <div className="pr-2">
                  <label className="block mb-2 text-sm">DOB</label>
                  <input
                    type="date"
                    placeholder="DD/MM/YY"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="h-10 block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700"
                  />
                </div>
                <div className="px-2">
                  <label className="block mb-2 text-sm">Country</label>
                  <input
                    type="text"
                    placeholder="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="h-10 block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700"
                  />
                </div>
              </div>

              <div className="flex flex-row pt-4">
                <div className="pr-2">
                  <label className="block mb-2 text-sm">City</label>
                  <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="h-10 block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700"
                  />
                </div>
                <div className="px-2">
                  <label className="block mb-2 text-sm">State</label>
                  <input
                    type="text"
                    placeholder="State"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="h-10 block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700"
                  />
                </div>
              </div>

              <div className="flex flex-row pt-4">
                <div className="w-3/4 pr-2">
                  <label className="block mb-2 text-sm">Address</label>
                  <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="h-10 block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700"
                  />
                </div>
                <div className="w-1/4 px-2">
                  <label className="block mb-2 text-sm">Pincode</label>
                  <input
                    type="text"
                    placeholder="Pin"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="h-10 block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700"
                  />
                </div>
              </div>

              <button className="mt-8 flex text-center items-center justify-center w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                <span>Let&apos;s Go</span>
              </button>
            </form>

            <h4 className="pt-4">
              Already have an account?{' '}
              <Link to="/login">
                {' '}
                <span className="text-blue-500">Log in </span>
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
