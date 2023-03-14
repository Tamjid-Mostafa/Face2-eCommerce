import { useRouter } from 'next/router'
import { memo, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import cn from 'clsx'
import s from './Searchbar.module.css'


const Searchbar = ({ className, id = 'search' }) => {
  const router = useRouter()

  useEffect(() => {
    router.prefetch('/search')
  }, [router])

  const handleKeyUp = (e) => {
    e.preventDefault()

    if (e.key === 'Enter') {
      const q = e.currentTarget.value

      router.push(
        {
          pathname: `/search`,
          query: q ? { q } : {},
        },
        undefined,
        { shallow: true }
      )
    }
  }

  return (
    <>
      {/* <div className={`relative bg-accent-0 text-base w-full transition-colors duration-150 border border-accent-2`}>
      <label className="hidden" htmlFor={id}>
        Search
      </label>
      
      <input
        id={id}
        className={`bg-transparent px-3 py-2 appearance-none w-full transition duration-150 ease-in-out pr-10 placeholder:text-accent-3 focus:outline-none shadow-outline-normal`}
        placeholder="Search for products..."
        defaultValue={router.query.q}
        onKeyUp={handleKeyUp}
      />
      <div className={`absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none`}>
        <svg className={`h-5 w-5`} fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
      </div>
    </div> */}
      <div className={cn(s.root, className)}>
        <label className="hidden" htmlFor={id}>
          Search
        </label>
        <input
          id={id}
          placeholder="Search for products..."
          defaultValue={router.query.q}
          onKeyUp={handleKeyUp}
          className=" px-3 py-2 appearance-none   ease-in-out  placeholder:text-accent-3  shadow-outline-normal
          focus:outline-none block w-full rounded-full placeholder-gray-500 border bg-gray-100 border-primary pl-12 pr-8 h-12 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-primary"
        />
        <div className="absolute right-1">
          <button
            type="submit"
            className="relative flex h-10 w-10 sm:w-max ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
          >
            <FaSearch className="relative" />
          </button>
        </div>
      </div>
    </>
  )
}

export default memo(Searchbar)
