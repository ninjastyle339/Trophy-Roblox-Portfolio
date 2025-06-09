import ProjectCard from "./ProjectCard"

const works = [
    {
        imgSrc: '/JoeStarMansion.webp',
        title: 'JoeStar Mansion',
        tags: ['Development ', 'Models'],
        projectLink: ''
    },
    {
        imgSrc: '/SquidGame.webp',
        title: 'Squid Game Lobby',
        tags: ['Models ', 'Optimized'],
        projectLink: 'https://x.com/TR0PHYA/status/1879804405769527644'
    },
    {
        imgSrc: '/MegaCity.webp',
        title: 'Mega City',
        tags: ['Open World'],
        projectLink: ''
    },
    {
        imgSrc: '/ninja-battleground-img.webp',
        title: 'Ninja Battlegrounds',
        tags: ['Vfx ', 'Inspired Design'],
        projectLink: ''
    },
    {
        imgSrc: '/RoKarts-img.webp',
        title: 'Vfx Artist For RoKarts',
        tags: ['Vfx ', 'Modeling'],
        projectLink: 'https://www.roblox.com/games/5078237550/WIP-RoKarts-Alpha-1-8-5'
    },
    {
        imgSrc: '/Bushido-img.png',
        title: 'Clothing & Weapon Designer',
        tags: ['Vfx ', 'Model ', 'Designer'],
        projectLink: 'https://www.roblox.com/games/7434581762/Bushido'
    }


]
const Work = () => {
    return (
        <section id = "work" className="section">
            <div className="container">
                <h2 className="headline-2 mb-8">
                    My PortFolio Highlights
                </h2>
                <div className="grid gap-x-4 gap-y-5 
                grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]">
                    {
                        works.map(({imgSrc, title, tags, projectLink}, key) => (
                            <ProjectCard 
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            key={key} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Work