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
    <div className="text-black hidden lg:flex w-[683px] p-[5px] overflow-auto ">
      <div className="p-[5px] bg-white w-[683px] rounded-lg h-[100vh] fixed">
        <img src={logo} className="w-20 h-20 mx-auto mt-12"/>
        <p className=" text-lg font-semibold mt-4">
          {employer}
        </p>
        {jobTitle}
      </div>
    </div>
  )
}