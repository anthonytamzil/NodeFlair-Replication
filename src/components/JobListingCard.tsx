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
}

export default function JobListingCard({
  employer,
  jobTitle,
  postingTime,
  location,
  techStack,
  field,
  rating,
  logo
}: JobListingCardProps) {
  return (
    <div className="p-[5px] w-screen lg:w-fit">
      <div className="h-fit w-full lg:w-[417px] bg-white border-[#E1E0DD] border p-[5px] rounded-lg hover:shadow cursor-pointer hover:delay-75 focus:border-4 focus:border-[#1FC76A]">
        <div className="p-5 w-full h-fit">
          <div className="flex-row flex">
            <div className="min-w-[55px]">
              <img className="rounded-[4px] font-[14px] w-[45px] h-[45px]" src={logo}/>
            </div>
            <div className="text-[#3a3a3a]">
              <p className="leading-6 text-left">
                <span>{employer}</span>
                <span className="ml-3 text-[14px]">{rating} {rating === null ? "" : "★"}</span>
              </p>
              <p className="max-w-[237px] leading-6 text-lg font-bold text-left">{jobTitle}</p>
            </div>
            <div className="ml-auto text-right">
              <div className="bg-[#DDF7E9] py-[5px] px-[8px] rounded-md">
                <p className="text-[#1FC793] font-semibold text-[15px]">{field}</p>
              </div>
            </div>
          </div>
          <div className="text-left flex-row flex text-[#838383] mt-[2px]">
            <span className="text-[#1fc76a] pl-[55px] font-bold">
              {postingTime} minutes ago
            </span>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" className="w-[10.5px] h-[14px] ml-4 mt-[6px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
            <div>
              &nbsp;{location}
            </div>
          </div>
          
        </div>
        <hr className="mb-2 w-[365px] mx-auto"/>
        <div className="px-[15px] leading-6 w-full h-10 overflow-hidden text-ellipsis block text-[#3a3a3a] whitespace-nowrap text-left">
          {techStack?.map((tech) => (
            <TechCard title={tech}/>
          ))}
        </div>
      </div>
    </div>
    
  )
}