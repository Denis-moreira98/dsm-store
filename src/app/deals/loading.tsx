import { LoaderIcon } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex h-screen w-full animate-spin items-center justify-center">
      <LoaderIcon size={28} />
    </div>
  );
};

export default Loading;
