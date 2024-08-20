import Link from 'next/link'

const HomePage = () => {
  return (
    <>
      <div className="text-3xl">Home Page</div>
      <Link href={{
        pathname: '/properties',
        query: { id: '1' }
      }} className='hover:text-blue-500'>Properties Page</Link>
    </>
  )
}

export default HomePage