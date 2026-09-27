import HeroImg from '../assets/banner-stack.png'

export function Hero() {
    
    return (
        <section className='container mx-auto'>
            <div className=' flex justify-between items-center '>
                <div className=''>
                    <h1 className=' font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl'>Build Your Ideal</h1>
                    <h1 className='bg-linear-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl'>Development Stack</h1>
                    <p className='mt-6 text-black/80'>
                    Explore frontend, backend, database, and tooling options,<br></br>compare them side by side, and put together the stack that fits your<br/> next project.
                    </p>
                </div>
                    <img src={HeroImg} alt="Hero_Image"/>
            </div>
            <div className='flex gap-4 '>
                <button className="btn  rounded-xl py-0 p-7  bg-linear-to-r from-orange-400 via-red-400 to-pink-500">Explores Technologies</button>
                <button className="btn border border-gray-300 rounded-xl  p-13 py-2 text-black/80">Learn More</button>
            </div>
            <div></div>
        </section>

        
    )
}
                

