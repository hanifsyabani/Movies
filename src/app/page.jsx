import Image from 'next/image'
import logo from '../assets/palette.svg'
import Link from 'next/link'
import ListMovie from './section/ListMovie'
import Modal from './components/Modal'

export default function Home() {
  return (
    <>
      <nav className='py-2 shadow-md shadow-gray-600'>
        <div className='flex justify-between items-center px-5 py-2'>
          <Image src={logo} alt='/' width={100} height={100}/>
          <div>
            <input type="text" placeholder='Searching...' className='outline-none border border-gray-600 p-2 rounded-md'/>
          </div>
          <div>
            {/* <Link href='/signin'>Sign In</Link> */}
            <Modal/>
          </div>

        </div>
      </nav>
      <main className='container mt-10 mx-auto px-6'>
       
        <ListMovie/>
      </main>
    </>
  )
}
