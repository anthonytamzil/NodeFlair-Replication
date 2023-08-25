import './App.css'
import JobListingCard from './components/JobListingCard';
import { jobs } from './constants';

export default function App() {
  return (
    <>
      <div className="w-full flex-row flex items-start">
        <div className="flex-col">
          {jobs?.map((job) => (
            <JobListingCard 
              employer={job.employer} 
              jobTitle={job.jobTitle} 
              postingTime={job.postingTime}
              location={job.location}
              techStack={job.techStack}
              field={job.field}
              rating={job.rating}
              logo={job.logo}
            />
          ))}
        </div>
        <div className='text-black bg-white w-[683px] p-[5px]'>
          hi
        </div>
      </div>
    </>
  )
}

