import { useState } from 'react';
import './App.css'
import JobDescription from './components/JobDescription';
import JobListingCard from './components/JobListingCard';
import { jobs } from './constants';

export default function App() {
  const [selectedJob, changeSelection] = useState(0);

  return (
    <>
      <div className="w-full flex-row flex">
        <div className="w-full flex-col">
          {jobs?.map((job) => (
            <div onClick={() => changeSelection(jobs.indexOf(job))}>
              <JobListingCard 
                employer={job.employer} 
                jobTitle={job.jobTitle} 
                postingTime={job.postingTime}
                location={job.location}
                techStack={job.techStack}
                field={job.field}
                rating={job.rating}
                logo={job.logo}
                salary={job.salary}
                est={job.est}
              />
            </div>
          ))}
        </div>
        <JobDescription 
          employer={jobs[selectedJob].employer}
          jobTitle={jobs[selectedJob].jobTitle}
          logo={jobs[selectedJob].logo}
        />
      </div>
    </>
  )
}