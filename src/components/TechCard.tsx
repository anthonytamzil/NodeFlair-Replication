type TechCardProps = {
    title: string;
  }

export default function TechCard({title} : TechCardProps) {
  return (
    <>
      <div className="bg-[#f1f1f1] h-[36px] rounded-[5px] px-[8px] py-[5px] inline-block overflow-hidden max-w-[90%] align-top">
        <p className="text-[#838383] text-[14px] font-bold font-sans mt-[2px]">{title}</p>
      </div>
      &nbsp;
    </>
    
  )
}