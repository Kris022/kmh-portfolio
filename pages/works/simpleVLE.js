import ProjectHeader from "../../components/works/ProjectHeader";

export default function PortfolioWebsitePage() {
  return (
    <div className="h-screen">
      <div className="max-w-[600px] m-auto mt-[30%] md:mt-[10%] text-gray-300 text-xl">
        <ProjectHeader
          title="Simple VLE"
          tools="JS, PHP, XAMPP"
          gitlink="https://github.com/Kris022/kmh-portfolio"
        />

        <div className="p-2">
          <p className="mt-5">
          This was for my university group project. It was to develop a full virtual learning environment, similar to Moodle or Librus. One that would allow registered students to enrol and access resources for their course and teachers to and administrators to manage the users and upload resources for the students to download, these included DOCX and PTX files, but also PDF and even interactive quizzes that were generated based on text file uploaded by the tutors.
          </p>

          <p className="mt-5">
          The front end was developed using HTML, CSS and JS without any frameworks, and the backed using PHP and some AJAX, the data was stored in a MySQL database and the project ran on a XAMPP server.
          </p>

        </div>
      </div>
    </div>
  );
}
