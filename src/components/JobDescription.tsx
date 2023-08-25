type JobDescriptionProps = {
  employer: string;
  jobTitle: string;
  logo: string;
}

export default function JobDescription({
  employer,
  jobTitle,
  logo
} : JobDescriptionProps) {
  return (
    <div className="text-black hidden lg:flex h-[calc(100vh-20px)] p-[5px] sticky top-[10px]">
      <div className="p-[5px] bg-white rounded-lg w-[560px]">
        <img src={logo} className="w-20 h-20 mx-auto mt-12"/>
        <p className=" text-lg font-semibold mt-4">
          {employer}
        </p>
        {jobTitle}
      </div>
    </div>
  )
}