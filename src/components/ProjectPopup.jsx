
const ProjectPopup = ({setProjectPopup, projectInfo}) => {

    // import a short video of each project later
    console.log(projectInfo)

    return (
        <div className='popup-overlay'>
            <div className='popup bg-slate-400 border-t-3 border-t-white px-[10px] pb-[20px]'>
                <div className="flex flex-col justify-center items-center">
                    <div className='flex justify-end items-start w-[100%]'>
                        <button onClick={() => { setProjectPopup(false); }} className='hover:bg-white/30 py-.5 px-1 rounded-lg'>X</button>
                    </div>
                    <div className=' inset-shadow-sm inset-shadow-slate-800 flex flex-col gap-9 items-center w-[98%] h-[700px] m-2 p-10 bg-slate-300 border-2 border-slate-600 rounded-md'>
                        <h1>{projectInfo.name}</h1>
                        <p className="text-[20px]">{projectInfo.details}</p>
                        <img src={projectInfo.img} alt="pic" className="sm:h-[375px] h-[200px] border-3 border-slant rounded-md"/>
                        <div className="flex justify-around gap-30">
                            {projectInfo.site && 
                            <a href={projectInfo.site} target="_blank" rel="noopener noreferrer" className=" text-[20px] underline">Live Website</a>}
                            <a href={projectInfo.link} target="_blank" rel="noopener noreferrer" className=" text-[20px] underline">Github Link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPopup