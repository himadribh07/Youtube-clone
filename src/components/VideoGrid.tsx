import { VideoCard } from "./VideoCard";

const VIDEOS = [
  {
    title: "Portugal Vs Turkey (Euro Round of 16) | Cristiano Ronaldo",
    pfp: "photo.jpg",
    thumbnail: "Portugal-Vs-Turkey.jpg",
    channelName: "Sony Liv",
    views: "20Mn",
    time: "20 Days",
  },
  {
    title: "Croatia Vs Albaia (Euro Round of 16) | Luka Modric",
    pfp: "photo.jpg",
    thumbnail: "photo-3.jpg",
    channelName: "Sony Liv",
    views: "20Mn",
    time: "20 Days",
  },
  {
    title: "Argentina Vs Canada (Euro Round of 16) | Lionel Messi",
    pfp: "photo.jpg",
    thumbnail: "Argentina-Vs-Canada.jpg",
    channelName: "Sony Liv",
    views: "20Mn",
    time: "20 Days",
  },
  {
    title: "Spain Vs Italy (Euro Round of 16) | Nico Williams Jr",
    pfp: "photo.jpg",
    thumbnail: "Spain-Vs-italy.jpg",
    channelName: "Sony Liv",
    views: "20Mn",
    time: "20 Days",
  },
  {
    title: "Denmark Vs England (Euro Round of 16) | Harry Kane",
    pfp: "photo.jpg",
    thumbnail: "photo-4.jpg",
    channelName: "Sony Liv",
    views: "20Mn",
    time: "20 Days",
  },
  {
    title: "Portugal Vs Turkey (Euro Round of 16) | Cristiano Ronaldo",
    pfp: "photo.jpg",
    thumbnail: "Portugal-Vs-Turkey.jpg",
    channelName: "Sony Liv",
    views: "20Mn",
    time: "20 Days",
  },
  {
    title: "Croatia Vs Albaia (Euro Round of 16) | Luka Modric",
    pfp: "photo.jpg",
    thumbnail: "photo-3.jpg",
    channelName: "Sony Liv",
    views: "20Mn",
    time: "20 Days",
  },
  {
    title: "Argentina Vs Canada (Euro Round of 16) | Lionel Messi",
    pfp: "photo.jpg",
    thumbnail: "Argentina-Vs-Canada.jpg",
    channelName: "Sony Liv",
    views: "20Mn",
    time: "20 Days",
  },
  {
    title: "Spain Vs Italy (Euro Round of 16) | Nico Williams Jr",
    pfp: "photo.jpg",
    thumbnail: "Spain-Vs-italy.jpg",
    channelName: "Sony Liv",
    views: "20Mn",
    time: "20 Days",
  },
  {
    title: "Denmark Vs England (Euro Round of 16) | Harry Kane",
    pfp: "photo.jpg",
    thumbnail: "photo-4.jpg",
    channelName: "Sony Liv",
    views: "20Mn",
    time: "20 Days",
  },
  {
    title: "Portugal Vs Turkey (Euro Round of 16) | Cristiano Ronaldo",
    pfp: "photo.jpg",
    thumbnail: "Portugal-Vs-Turkey.jpg",
    channelName: "Sony Liv",
    views: "20Mn",
    time: "20 Days",
  },
  {
    title: "Croatia Vs Albaia (Euro Round of 16) | Luka Modric",
    pfp: "photo.jpg",
    thumbnail: "photo-3.jpg",
    channelName: "Sony Liv",
    views: "20Mn",
    time: "20 Days",
  },
  {
    title: "Argentina Vs Canada (Euro Round of 16) | Lionel Messi",
    pfp: "photo.jpg",
    thumbnail: "Argentina-Vs-Canada.jpg",
    channelName: "Sony Liv",
    views: "20Mn",
    time: "20 Days",
  },
  {
    title: "Spain Vs Italy (Euro Round of 16) | Nico Williams Jr",
    pfp: "photo.jpg",
    thumbnail: "Spain-Vs-italy.jpg",
    channelName: "Sony Liv",
    views: "20Mn",
    time: "20 Days",
  },
  {
    title: "Denmark Vs England (Euro Round of 16) | Harry Kane",
    pfp: "photo.jpg",
    thumbnail: "photo-4.jpg",
    channelName: "Sony Liv",
    views: "20Mn",
    time: "20 Days",
  },
];

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pr-2 pl-2">
      {VIDEOS.map((videos) => (
        <div className="pr-2 pl-2">
          <VideoCard
            title={videos.title}
            pfp={videos.pfp}
            thumbnail={videos.thumbnail}
            channelName={videos.channelName}
            views={videos.views}
            time={videos.time}
          />
        </div>
      ))}
    </div>
  );
};
