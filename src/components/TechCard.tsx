type TechCardProps = {
    title: string;
  }

export default function TechCard({title} : TechCardProps) {
  return (
    <div className="bg-[#f1f1f1] w-fit rounded-[5px] max-w-[90%] px-[8px] py-[5px]">
      <span className="text-[#838383] text-[14px] font-bold font-sans">{title}</span>
    </div>
  )
}