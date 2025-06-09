import ButtonPrimary from "./Button";

const Hero = () => {
    return (
        <section className ="pt-28 lg:pt-36"
                id="home"
        >
            <div 
            className="
            container lg:grid lg:grid-cols-2 items-center
            lg:gap-10 min-h-[80vh]
            ">
                <div className = "fade-in">
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img src="/Dim-avatar.png" 
                            width={40}
                            height={40}
                            alt = "Troph Roblox Avatar"
                            className="img-cover"
                            />
                        </figure>
                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-red-400">
                                <span className="absolute inset-0 rounded-full bg-red-600 animate-ping"></span>
                            </span>
                            Available for work

                        </div>
                    </div>
                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                        Building Scalable Modern Roblox Maps for the Future
                    </h2>
                    <div className="flex items-center gap-3">
                        <ButtonPrimary label="Download Resume" icon="" />
                        
                        

                    </div>
                </div>

                <div className="fade-in hidden lg:block">
                    <figure className="w-full max-w-[656px] ml-auto
                    bg-gradient-to-t rounded-[60px] overflow-hidden">
                        <img src="/roblox-cool-logo.jpeg" 
                        width={656}
                        height={800}
                        alt="Dimitrjie Pesic" 
                        className="w-full transition duration-300 hover:scale-105" />
                    </figure>
                </div>
            </div>


        </section>
    )
}
export default Hero