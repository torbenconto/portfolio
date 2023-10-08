import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";

function NeoFetch() {
  return (
    <div className="md:flex w-full">
      <div className="md:w-1/2">
        <img src="143856272.png" className="rounded-full mx-auto" alt="Profile" />
      </div>
      <div className="md:w-1/2 text-white md:text-lg text-md space-y-1">
        <h1 className="md:text-xl text-lg">Torben Conto @ North Hall High School</h1>
        <p className="font-semibold">- - - - - - - - - - - - - - - -</p>
        <strong>Age:</strong> 14 (freshman/9th grade)
        <h1>
          <strong>Role:</strong> Intermediate Web/Systems developer studying CS
        </h1>
        <h1 className="py-1">
          <strong>Experience:</strong> ~3 years overall.
        </h1>
        <h1 className="py-1">
          <strong>My Tools:</strong> TypeScript, Golang, C (learning), Various web and server frameworks.
        </h1>
        <h1 className="py-1">
          <strong>Projects:</strong> Enter "projects" in the terminal and press enter(return) to view a full list of my projects.
        </h1>
        <h1 className="py-4">
          <strong>Philosopy:</strong> To write code that prioritizes simplicity, clarity, and maintainability, making it easy for both myself and others to understand and work with. Embrace continuous learning and collaboration to create robust, reliable, and ethical software solutions
        </h1>
        <div className="flex h-12 w-1/3 space-x-2">
          <a href="https://github.com/torbenconto">
            <FontAwesomeIcon
              icon={faGithubSquare}
              className="w-12 h-full hover:text-gray-400"
            />
          </a>
          <a href="https://www.youtube.com/channel/UCFvkacmg5QC_NgYYhfRVkxA">
            <FontAwesomeIcon
              icon={faYoutubeSquare}
              className="w-12 h-full hover:text-gray-400"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NeoFetch;
