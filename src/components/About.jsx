
const aboutItems = [
    {
        label: 'Project done',
        number: 10
    },
    {
        label: 'Years of Experience',
        number: 3
    }
]


const About = () => {
    return (
        <section id="about" className="section">

            <div className="container">

                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                    <p className="text-zinc-300  mb-4 md:mb-8 md:text-xl md:max-w-[60ch] lg:max-w-[100ch]">
                        Welcome! I'm a Roblox game designer focused on building immersive, scalable environments tailored for gameplay and community engagement. Whether it's competitive arenas, roleplay cities, or open-world landscapes, I combine strong layout design with performance optimization to bring unique worlds to life. Every map I create is built with both player experience and scripting compatibility in mind.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7 ">
                        {
                            aboutItems.map(({label, number}, key) => (
                                <div key = {key} className="">
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-bold md:text-4xl">{number}</span>
                                        <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                    </div>
                                    <p className="text-sm text-zinc-400 font-semibold">{label}</p>
                                </div>
                            ))
                        }

                        <img src="/roblox-icon.png" 
                        width={30}
                        height={30}
                        alt="Logo" 
                        className="ml-auto md:w-[40px] md:h-[40px]" />

                    </div>
                </div>
            </div>

        </section>
    )
}

export default About