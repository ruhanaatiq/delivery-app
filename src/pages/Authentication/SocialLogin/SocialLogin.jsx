import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxios from '../../../hooks/useAxiosSecure';
import { useLocation, useNavigate } from 'react-router-dom'; // ✅ Correct import

const SocialLogin = () => {
    const { signInWithGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const axiosInstance = useAxios();

    const from = location.state?.from || '/';

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithGoogle();
            const user = result.user;

            const userInfo = {
                email: user.email,
                name: user.displayName || 'Anonymous',
                photoURL: user.photoURL || '',
                role: 'user',
                created_at: new Date().toISOString(),
                last_log_in: new Date().toISOString(),
            };

            await axiosInstance.post('/users', userInfo); // ✅ Saves to DB if not already
            navigate(from, { replace: true });
        } catch (error) {
            console.error('Google Sign-In Error:', error);
        }
    };

    return (
        <div className='text-center'>
            <p className='mb-4'>OR</p>
            <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <g>
                        <path d="m0 0H512V512H0" fill="#fff" />
                        <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                        <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                        <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                        <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
                    </g>
                </svg>
                Login with Google
            </button>
        </div>
    );
};

export default SocialLogin;
