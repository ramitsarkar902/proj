import { useState } from 'react';
import { Link } from 'react-router-dom';
import loginSvg from './../assets/img/login/login.svg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = JSON.stringify({
      email,
      password,
    });
    console.log(data);
  };

  return (
    <div className="flex flex-row p-10 h-screen">
      <div className="content-center w-1/2">
        <img src={loginSvg} alt="" srcSet="" />
      </div>

      <div className="max-w-md mx-auto rounded content-center w-1/2">
        <h2 className="font-bold text-4xl">Welcome!</h2>
        <h5 className="text-slate-500 pt-2 ">
          It’s great to see you here again.
        </h5>
        <form className="mt-10 space-y-8" onSubmit={handleSubmit}>
          <input
            className="w-full border rounded h-12 px-4 focus:outline-none"
            placeholder="Email adress "
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="flex items-center ">
            <input
              className="w-full h-{40} border rounded h-12 px-4 focus:outline-none -mr-7"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <input
                className="w-full h-{40} bg-blue-400 text-sm active:bg-gray-700 cursor-pointer font-regular text-white px-4 py-2 rounded uppercase"
                type="submit"
                value="Login"
              />
            </div>
            <h4 className="pt-2">
              Don’t have account yet?{' '}
              <Link to="/signup">
                {' '}
                <span className="text-blue-500">Sign up </span>
              </Link>{' '}
            </h4>
          </div>
        </form>
      </div>
    </div>
  );
}
