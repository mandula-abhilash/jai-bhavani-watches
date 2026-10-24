import SectionHeading from "./SectionHeading";
import VideoCard from "./VideoCard";
import { ArrowIcon, YouTubeIcon } from "./Icons";

export default function Videos({ site }) {
  return (
    <section id="videos" aria-labelledby="videos-title" className="scroll-mt-16 bg-midnight text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="videos-title"
            tone="dark"
            eyebrow="Work videos"
            title="Watch the repairs, start to finish"
            intro="Each watch is opened, serviced and closed on camera. These are six of his videos."
          />
          <a
            href={site.youtube.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start text-[14px] font-semibold text-white/80 hover:text-white md:self-auto"
          >
            <YouTubeIcon className="h-5 w-5" />
            All videos on YouTube
            <ArrowIcon />
          </a>
        </div>
        <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {site.videos.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </div>
    </section>
  );
}
