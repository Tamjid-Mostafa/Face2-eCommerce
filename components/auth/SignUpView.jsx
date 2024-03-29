import { AuthContext } from '@/context/AuthProvider'
import { validate } from 'email-validator'
import Image from 'next/image'
import { FC, useEffect, useState, useCallback, useContext } from 'react'
import Info from '../layout/icons/Info'
import Button from '../ui/Button'
import hitToast from '../ui/Button/Toast/hitToast'
import { useUI } from '../ui/context'
import Input from '../ui/Input'


const SignUpView = () => {
  // Form State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [dirty, setDirty] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const { signUpUser } = useContext(AuthContext)
  const { setModalView, closeModal } = useUI()

  const handleSignup = async (e) => {
    e.preventDefault()

    if (!dirty && !disabled) {
      setDirty(true)
      handleValidation()
    }
    try {
      setLoading(true)
      setMessage('')
      const result = await signUpUser(email, password)
      console.log(result);
      closeModal()
      hitToast('success', `Hi! ${firstName}, Welcome to Face2`)
    } catch ({ errors }) {
      console.error(errors)
      if (errors) {
        setMessage(errors.map((e) => e.message).join('<br/>'))
      } else {
        setMessage('Unexpected error')
      }
      setDisabled(false)
    } finally {
      setLoading(false)
    }
  }

  const handleValidation = useCallback(() => {
    // Test for Alphanumeric password
    const validPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)

    // Unable to send form unless fields are valid.
    if (dirty) {
      setDisabled(!validate(email) || password.length < 7 || !validPassword)
    }
  }, [email, password, dirty])

  useEffect(() => {
    handleValidation()
  }, [handleValidation])

  return (
    <form
      onSubmit={handleSignup}
      className="w-80 flex flex-col justify-between p-3"
    >
      <div className="flex justify-center pb-12 ">
        {/* --- Logo Start--- */}

        <Image
          src="/logo.png"
          alt="Face2"
          width={80}
          height={100}
          className=""
          priority
        />

        {/* --- Logo End--- */}
      </div>
      <div className="flex flex-col space-y-4">
        {message && (
          <div
            className="text-red border border-red p-3"
            dangerouslySetInnerHTML={{
              __html: message,
            }}
          ></div>
        )}
        <Input placeholder="First Name" onChange={setFirstName} />
        <Input placeholder="Last Name" onChange={setLastName} />
        <Input type="email" placeholder="Email" onChange={setEmail} />
        <Input type="password" placeholder="Password" onChange={setPassword} />
        <span className={`${!dirty ? "text-accent-8" : "text-red"}`}>
          <span className="inline-block align-middle ">
            <Info width="15" height="15" />
          </span>{' '}
          <span className="leading-6 text-sm">
            <strong>Info</strong>: Passwords must be longer than 7 chars and
            include numbers.{' '}
          </span>
        </span>
        <div className="pt-2 w-full flex flex-col">
          <Button
            variant="slim"
            type="submit"
            className="bg-accent-9"
            loading={loading}
            disabled={disabled}
          >
            Sign Up
          </Button>
        </div>

        <span className="pt-1 text-center text-sm">
          <span className="text-accent-7">Do you have an account?</span>
          {` `}
          <a
            className="text-accent-9 font-bold hover:underline cursor-pointer"
            onClick={() => setModalView('LOGIN_VIEW')}
          >
            Log In
          </a>
        </span>
      </div>
    </form>
  )
}

export default SignUpView
