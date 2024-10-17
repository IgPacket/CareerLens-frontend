interface JobCardProps {
    job: {
        id: string;
        title: string;
        company: string;
        description: string;
    };
}

const JobCard = ({ job }: JobCardProps) => (
    <div className="job-card">
        <h2>{job.title}</h2>
        <p>{job.company}</p>
        <p>{job.description}</p>
    </div>
);

export default JobCard;
