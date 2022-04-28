import { Report } from "../interfaces";
import ReportCard from "./ReportCard";
type Props = {
  reports: Array<Report>;
};
const Reports = ({ reports }: Props) => {
  return (
    <>
      <div className="flex flex-col mx-auto bg-primary-500"></div>
      <div className="flex flex-col">
        {" "}
        <h1 className="mx-auto text-3xl font-semibold mt-36">Reports</h1>
        <div className="max-w-3xl mx-auto mt-8 font-thin text-center">
          Ornare aptent aenean tristique tortor egestas habitasse, netus
          praesent taciti sagittis nulla proin vivamus habitasse, non aptent
          neque curabitur cubilia habitasse taciti.{" "}
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-2/3 mx-auto">
        {reports.map((report) => (
          <ReportCard
            key={report.id}
            title={report.title}
            link={report.report.url}
          />
        ))}
      </div>
    </>
  );
};

export default Reports;
