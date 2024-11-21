import Image from 'next/image'

const HeroSection = () => {
    return (
        <section className='relative w-full h-screen bg-gray-100'>
            <div className='flex flex-col lg:flex-row items-center justify-between px-6 py-20 h-full'>
            {/* left side */}
                <div className='w-full lg:w-1/2 text-center lg:text-left'>
                <h1 className='text-4xl lg:text-5xl font-bold text-gray-800 mb-4'>
                    Discover Your Future With Us
                </h1>
                <p className='text-lg text-gray-600 mb-6'>Join thousands of people who are transforming their lives with our platform.</p>
                <button className='px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700'>Get Started</button>
                </div>

            {/* right side  */}
            <div className='w-full lg:w-1/2 h-full mt-10 lg:mt-0'>
                <div className='relative w-full h-full'>
                    <Image src="/background.jpg" alt="forest" layout="fill" objectFit="cover" className="rounded-lg"></Image>
                </div>
            </div>
            </div>
        </section>
    )
}

export default HeroSection;