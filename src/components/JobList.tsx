import JobCard from './JobCard';

interface JobListProps {
    jobs: Array<any>;
}

const JobList = ({ jobs }: JobListProps) => {
    return (
        <div>
            {jobs.map(job => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
    );
};

export default JobList;