

const ProjectCard = () => {
  return (
    <div className="cursor-none">
        <div className=" shadow-lg group duration-500 cursor-pointer group overflow-hidden relative text-gray-50 h-[20rem] w-[17rem]  rounded-2xl hover:duration-700">
            <div className="w-[17rem] h-[20rem] bg-lime-400 text-gray-800 cursor-none">
                <div className="flex flex-row justify-between">
                </div>
            </div>
            <div className="absolute bg-gray-50 -bottom-[7rem] w-[17rem] p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500 items-center cursor-none">
                <span className="text-lime-400 font-bold text-xs">TAILWIND</span>
                <span className="text-gray-800 font-bold text-3xl">Cheat Sheet</span>
               <div> 
                    <p className="text-neutral-800 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard