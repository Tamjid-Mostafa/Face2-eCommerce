import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useUI } from '../ui/context'
import Input from '../ui/Input'
const LoginView = () => {
    // Form State
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [dirty, setDirty] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const { setModalView, closeModal } = useUI()



    return (
        <form
            className="w-80 flex flex-col justify-between p-3"
        >
            <div className="flex justify-center pb-12 ">
                {/* --- Logo Start--- */}

                <Image
                    src="/logo.png"
                    alt="face2.com.bd logo"
                    width="80"
                    height="80"
                    className="mr-2 rounded-sm"
                />

                {/* --- Logo End--- */}
            </div>
            <div className="flex flex-col space-y-3">
                {message && (
                    <div className="text-red border border-red p-3">
                        {message}. Did you {` `}
                        <a
                            className="text-accent-9 inline font-bold hover:underline cursor-pointer"
                            onClick={() => setModalView('FORGOT_VIEW')}
                        >
                            forgot your password?
                        </a>
                    </div>
                )}
                <Input type="email" placeholder="Email" onChange={setEmail} />
                <Input type="password" placeholder="Password" onChange={setPassword} />
                <button
                    variant="slim"
                    type="submit"
                    loading={loading ? true : false}
                    disabled={disabled}
                >
                    Log In
                </button>
                <div className="pt-1 text-center text-sm">
                    <span className="text-accent-7">Don&apos;t have an account?</span>
                    {` `}
                    <a
                        className="text-accent-9 font-bold hover:underline cursor-pointer"
                        onClick={() => setModalView('SIGNUP_VIEW')}
                    >
                        Sign Up
                    </a>
                </div>
            </div>
        </form>
    )
}

export default LoginView