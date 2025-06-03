import Image from "next/image";

const projects = [
  {
    id: 1,
    title: 'Dashboard 1',
    imageUrl: "/Images/streamlit.png",
    link: "https://hr-analytics-dashboard-3p9pwtzbv2czvhfttxzm7a.streamlit.app/",
  },
  {
    id: 2,
    title: 'Dashboard 2',
    imageUrl: "/Images/streamlit.png",
    link: "https://hrdashboardv2-onnhgwic3uewwaqvwvsu4j.streamlit.app/",
  },
  {
    id: 3,
    title: 'Dashboard 3',
    imageUrl: "/Images/streamlit.png",
    link: "https://contoh.com/dashboard3",
  },
]

const imagesPentaho = [
  {
    id: 1,
    title: 'Transforming Data',
    imageUrl: "/Images/ListData.png",
  },
  {
    id: 2,
    title: "Job Send Email",
    imageUrl: "/Images/sendmail.png"
  },
]

export default function Home() {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="flex flex-col items-center justify-start min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <main className="flex flex-col gap-2 items-center">
        <h1 className="text-3xl font-bold">M Reza Barus</h1>
        <h4 className="text-xl font-medium">Portofolio</h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={300}
                height={100}
                layout="responsive"
                className="object-cover w-full h-60"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-center">{project.title}</h2>
              </div>
            </a>
          ))}
        </div>
        
        <hr className="border-t-2 border-gray-300 my-4" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {imagesPentaho.map((pentaho) => (
            <div 
              key={pentaho.id}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={pentaho.imageUrl}
                alt={pentaho.title}
                width={300}
                height={100}
                layout="responsive"
                className="object-cover w-full h-60"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-center">{pentaho.title}</h2>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
