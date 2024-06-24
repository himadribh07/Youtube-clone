export function VideoCard(props: any) {
  return (
    <div className="pt-3">
      <img src={props.thumbnail} />

      <div className="grid grid-cols-12 pt-5">
        <div className="col-span-1 pl-2">
          <img className="rounded-full w-35 h-8" src={props.pfp} />
        </div>
        {/* Topic name  */}
        <div className="col-span-11 pl-4">
          {props.title}
          {/* Channel name  */}
          <div className="col-span-11  text-gray-400 text-base">
            {props.channelName}
          </div>
          {/* Views and time of upload */}
          <div className="col-span-11 text-gray-400 text-base">
            {props.views} | {props.time} ago
          </div>
        </div>
      </div>
    </div>
  );
}
