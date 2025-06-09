
const SkillCard = ({imgSrc, label, desc, classes}) => {
    return (
        <div className={'flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors ' + classes}>
            <figure className="">
                <img src={imgSrc} alt={label} width={32} height={32} className="" />
            </figure>

            <div>
                <h3>{label}</h3>
                <p className="text-zinc-400 text-sm">
                    {desc}
                </p>
            </div>
        </div>
    )
}
export default SkillCard