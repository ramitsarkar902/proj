import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { toggleTheme } from '../Redux/themeSlice';
import loginSvg from './../Assets/img/login/login.svg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin } = useAuth();
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    const body = JSON.stringify({
      email,
      password,
    });
    handleLogin(body);
  };

  return (
    <div className="flex flex-row p-10 h-screen">
      <div className="content-center w-1/2">
        <img src={loginSvg} alt="" srcSet="" />
      </div>

      <div className="max-w-md mx-auto rounded content-center w-1/2">
        <h2 className="font-bold text-4xl dark:text-white">Welcome!</h2>
        <h5 className="text-slate-500 pt-2 dark:text-white">
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
            <h4 className="pt-2 dark:text-white">
              Don’t have account yet?{' '}
              <Link to="/signup">
                {' '}
                <span className="text-blue-500 dark:text-red-200">
                  Sign up{' '}
                </span>
              </Link>{' '}
            </h4>
          </div>
        </form>
        <label
          htmlFor="theme-switch"
          className="flex items-center cursor-pointer">
          <div className="mr-3 text-gray-700 font-medium">Dark</div>
          <div className="relative">
            <input
              id="theme-switch"
              type="checkbox"
              className="sr-only"
              onChange={(e) => {
                e.preventDefault();
                dispatch(toggleTheme());
              }}
            />
            <div
              className={`block w-14 h-8 rounded-full ${
                theme === 'dark' ? 'bg-green-600' : 'bg-gray-200'
              }`}></div>
            <div
              className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
                theme === 'dark' ? 'translate-x-6' : ''
              }`}></div>
          </div>
        </label>
      </div>
    </div>
  );
}
