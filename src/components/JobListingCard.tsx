import TechCard from "./TechCard";

type JobListingCardProps = {
  employer: string;
  jobTitle: string;
  postingTime: number;
  location: string;
  techStack: string[];
  field: string;
  rating: number | null;
  logo: string;
  salary: string | null;
  est: boolean
}

export default function JobListingCard({
  employer,
  jobTitle,
  postingTime,
  location,
  techStack,
  field,
  rating,
  logo,
  salary,
  est,
}: JobListingCardProps) {
  return (
    <div className="p-[10px] w-screen lg:w-fit">
      <div className="h-fit w-full lg:w-[417px] bg-white border-[#E1E0DD] border p-[5px] rounded-lg hover:shadow cursor-pointer hover:delay-75 focus:border-4 focus:border-[#1FC76A]">
        <div className="px-5 pt-4 w-full h-fit flex">
          <div className="flex-row flex max-[440px]:flex-col">
            <div className="min-w-[55px]">
              <img className="rounded-[4px] font-[14px] w-[45px] h-[45px]" src={logo}/>
            </div>
            <div className="text-[#3a3a3a]">
              <p className="leading-6 text-left">
                <span>{employer}</span>
                <span className="ml-3 text-[14px]">{rating} {rating === null ? "" : "★"}</span>
              </p>
              <p className="leading-6 text-lg font-bold text-left">{jobTitle}</p>
              <div className="flex-row flex text-[#838383]">
                <span className="text-[#1fc76a] font-bold">
                  {postingTime} minutes ago
                </span>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" className="w-[10.5px] h-[14px] ml-4 mt-[6px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                <div>
                  &nbsp;{location}
                </div>
              </div>
              <div className="text-black text-left text-[15px] mt-[6px] font-medium">
                {salary} 
                <span className={est ? "ml-2 font-normal bg-[#ececec] px-2 py-1 rounded-lg" : "hidden"}>
                  EST
                </span>
              </div>
            </div>
            
          </div>
          <div className="ml-auto text-right">
            <div className="bg-[#DDF7E9] py-[5px] px-[8px] rounded-md">
              <p className="text-[#1FC793] font-semibold text-[15px]">{field}</p>
            </div>
          </div>
        </div>
        
        <div className="px-5 lg:px-0 mt-3">
          <hr className="mb-2 w-full lg:w-[365px] mx-auto"/>
        </div>
        
        <div className="px-[15px] leading-6 w-full h-10 overflow-hidden text-ellipsis block text-[#3a3a3a] whitespace-nowrap text-left">
          {techStack?.map((tech) => (
            <TechCard title={tech}/>
          ))}
        </div>
      </div>
    </div>
    
  )
}