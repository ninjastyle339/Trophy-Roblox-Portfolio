import SkillCard from "./SkillCard"

const skillItem = [
    {
        imgSrc: '/roblox-studio-logo.png',
        label: 'Roblox Studio',
        desc: 'Implementation'
    },
    {
        imgSrc: '/Adobe_Substance_3D_Painter_icon.svg',
        label: 'Substance 3D Painter',
        desc: 'Texturing'
    },
    {
        imgSrc: '/blender-logo.png',
        label: 'Blender',
        desc: 'Models/Modeling'
    },
    {
        imgSrc: '/Medibang-logo.png',
        label: 'Medibang Paint Pro',
        desc: 'Art'
    },
    {
        imgSrc: '/Clip_Studio_Paint_app_logo.png',
        label: 'Clip Studio Paint',
        desc: 'Art'
    }
]


const Skills = () => {
    return (
        <section id = "section" className="section">
            <div className="container">
                <h2 className="headline-2">
                    Essential Tools I use
                </h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[80ch]">
                    Below are the core tools I use to bring my Roblox environments to life. From terrain sculpting to asset optimization, each tool plays a key role in streamlining my workflow and ensuring every map is both visually engaging and performance-ready.
                </p>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({imgSrc, label, desc}, key) => (
                            <SkillCard 
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills