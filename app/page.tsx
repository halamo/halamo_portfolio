import { Urbanist } from "next/font/google";
const urbanist = Urbanist({ subsets: ["latin"] });

const patentLink =
    "https://patents.google.com/patent/US9682315B1/en?oq=US+9682315+B1";

export default function Home() {
    return (
        <main
            className={`${urbanist.className} container mx-auto h-full max-w-4xl bg-zinc-100`}
        >
            <div className="flex h-full flex-col md:flex-row">
                <section
                    aria-label="Personal Info"
                    className="flex flex-none flex-col gap-1 bg-blue-600 text-zinc-100 md:w-72 "
                >
                    <div className="top-0 left-0 bg-blue-600">
                        <h1 className="px-3 pt-2 text-4xl font-semibold">
                            Hernan Alamo
                        </h1>

                        <h2 className="px-3 pt-0 text-xl font-semibold text-amber-300">
                            Frontend Software Engineer
                        </h2>
                    </div>

                    <div className="mt-4 h-8 bg-blue-800">
                        <span className="p-3 align-text-top font-bold ">
                            Personal Info
                        </span>
                    </div>
                    <p className="px-3 pt-3 text-sm font-bold ">Address</p>
                    <p className="px-3 text-sm font-normal ">
                        Fuquay-Varina, NC 27526
                    </p>
                    <p className="px-3 pt-3 text-sm font-bold ">Email</p>
                    <div className="px-3">
                        <a
                            href="mailto:contact@HernanAlamo.dev"
                            className="text-sm font-normal  no-underline hover:underline"
                        >
                            contact@HernanAlamo.dev
                        </a>
                    </div>
                    <div className="mt-4 h-8 bg-blue-800">
                        <span className="p-3 align-text-top font-bold ">
                            Languages
                        </span>
                    </div>
                    <p className="px-3 pt-3 text-sm font-normal ">
                        English (Native)
                    </p>
                    <p className="px-3 pt-2 text-sm font-normal ">
                        Spanish (Conversational)
                    </p>
                    <div className="mt-4 h-8 bg-blue-800">
                        <span className="p-3 align-text-top font-bold ">
                            Achievements
                        </span>
                    </div>
                    <div className="flex py-3">
                        <a
                            href={patentLink}
                            className="align px-3 text-sm  font-normal no-underline hover:underline"
                        >
                            Patent Number: US 9682315 B1
                        </a>
                        <a href={patentLink}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-4 w-4 stroke-amber-300 hover:stroke-amber-100 "
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                />
                            </svg>
                        </a>
                    </div>
                </section>
                <section
                    aria-label="Objective, skills and experience"
                    className="h-screen  px-4 pt-5  font-medium text-zinc-700 md:overflow-y-auto"
                >
                    <h1 className="text-xl leading-8">
                        Experienced{" "}
                        <span className="font-bold text-zinc-800">
                            Frontend Software Engineer
                        </span>{" "}
                        specializing in creating dynamic UI / UX systems using
                        OOP, Functional Programming, and modern web tools.{" "}
                    </h1>
                    <h2 className="pt-4 text-xl font-bold text-blue-800">
                        Skills
                    </h2>
                    <p className="pt-4 ">
                        React, Angular 2+, Typescript, Javascript, CSS 3, SASS,
                        Bootstrap, Handlebars, JQuery, Underscore, Lodash,
                        Ramda, JSON, XML, NPM, Jest, Cypress, UI/UX design,
                        Photoshop.
                    </p>
                    <h2 className="pt-4 text-xl font-bold text-blue-800">
                        Experience
                    </h2>
                    <div className="flex flex-col justify-between pt-4 md:flex-row">
                        <h3>
                            <span className="font-semibold">
                                Senior Software Engineer
                            </span>{" "}
                            <br className="inline md:hidden" />
                            <span className="hidden md:inline"> - </span>
                            CSDisco Austin, TX
                        </h3>
                        <span className="whitespace-nowrap md:text-right">
                            2019-2022
                        </span>
                    </div>
                    <ul className="list-disc pl-5 pt-2">
                        <li>
                            Designed and developed various complex UI systems
                            and components to implement product features using
                            React, Typescript, CSS in JS, REST, and Graphql.
                        </li>
                        <li>
                            Created architecture documents, proof of concepts,
                            prototypes, and production code from design docs and
                            wireframes.
                        </li>
                        <li>
                            Coordinated and collaborated with cross-functional
                            teams to design and refine features.
                        </li>
                        <li>
                            Created unit tests in Jest; system and functional
                            tests in Cypress with mock data in Node.js.
                        </li>
                        <li>
                            Performed functional improvements, debugging, and
                            bug fixes for new and legacy products.
                        </li>
                    </ul>

                    <div className="flex flex-col justify-between pt-4 md:flex-row">
                        <h3>
                            <span className="font-semibold">
                                Senior Software Engineer
                            </span>{" "}
                            <br className="inline md:hidden" />
                            <span className="hidden md:inline"> - </span>
                            CCC Information Services, Austin, TX
                        </h3>
                        <span className="whitespace-nowrap md:text-right">
                            2017-2019
                        </span>
                    </div>
                    <ul className="list-disc pl-5 pt-2">
                        <li>
                            Created UI for internal tools to consume and
                            manipulate data from REST service.
                        </li>
                        <li>
                            Implemented features from design docs, collaborated
                            with various departments for requirements gathering
                            and refining, and unit testing with Jest.
                        </li>
                        <li>
                            Designed and developed UI/UX experience using
                            Bootstrap
                        </li>
                        <li>Debugged and enhanced legacy tools.</li>
                        <li>
                            Implemented testing standard and integrated with
                            CI/CD.
                        </li>
                    </ul>

                    <div className="flex flex-col justify-between pt-4 md:flex-row">
                        <h3>
                            <span className="font-semibold">
                                Senior Software Engineer
                            </span>{" "}
                            <br className="inline md:hidden" />
                            <span className="hidden md:inline"> - </span>
                            CompassLearning, Austin, TX
                        </h3>
                        <span className="whitespace-nowrap md:text-right">
                            2013-2017
                        </span>
                    </div>
                    <ul className="list-disc pl-5 pt-2">
                        <li>
                            Performed functional improvements, implemented new
                            features from design docs, and cleaned up legacy
                            code on in-house and outsourced projects as Lead
                            Engineer on GoQuest, a project-based learning
                            product, and Husky, a bespoke javascript multi-media
                            player.
                        </li>
                        <li>
                            Evaluated, documented, planned, and facilitated
                            sweeping conversion projects to convert legacy Flash
                            content into modern HTML5 format.
                        </li>
                        <li>
                            Collaborated with the design team to refine and
                            implement UI/UX.
                        </li>
                        <li>Debugged and enhanced legacy code.</li>
                        <li>
                            Facilitated technical solutions to bring legacy
                            Flash content to mobile devices using Unity and
                            ScaleForm.
                        </li>
                    </ul>

                    <div className="flex flex-col justify-between pt-4 md:flex-row">
                        <h3>
                            <span className="font-semibold">
                                Senior Software Engineer
                            </span>{" "}
                            <br className="inline md:hidden" />
                            <span className="hidden md:inline"> - </span>Zynga,
                            Austin, TX
                        </h3>
                        <span className="whitespace-nowrap md:text-right ">
                            2009-2013
                        </span>
                    </div>
                    <ul className="list-disc py-2 pl-5">
                        <li>
                            Created patented UI / UX designs and functionality
                            for social systems.
                        </li>
                        <li>
                            Debugged and improved both legacy and new game
                            development.
                        </li>
                        <li>
                            Involved in various levels of project development,
                            from prototyping and system design to game launches
                            and live game support.
                        </li>
                        <li>
                            Reduced development time on time-sensitive game
                            rebuilds by developing an in-code font system that
                            would prevent the Art department from having to
                            rebuild most assets.
                        </li>
                        <li>
                            Created documentation for various projects, systems,
                            and proposals.
                        </li>
                        <li>
                            Lead developer on Mini-game system design for an
                            unannounced mobile game in Cocos2dx and
                            Cocosbuilder.
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    );
}
