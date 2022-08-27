import { useState } from "react";
import VideoPlayer from "./VideoPlayer";
// import { useForm } from "react-hook-form";
var file;
function FileInput() {
	const [videoSource, setVideoSource] = useState("");
	// const [selectedVideo, setSelectedVideo] = useState("");

	const handleVideoInputChange = e => {
		file = e.target.files[0];
		if (!file) return;
		console.log(file);
		var url = URL.createObjectURL(file);
		console.log(url);
		setVideoSource(url);
	};

	return (
		<>
			<div className="flex w-full h-auto items-center">
				<label
					className="w-auto flex flex-row items-center px-4 pt-2 pb-3 bg-blue-300 
                    text-blue rounded-lg shadow-lg tracking-wide uppercase 
                    border border-blue cursor-pointer  ml-6
                  hover:bg-blue-800 hover:text-white"
				>
					<span className="mt-2 text-base leading-normal">Upload a video</span>

					<form>
						<input
							type="file"
							onChange={handleVideoInputChange}
							className="hidden"
						/>
					</form>

					{/* ICON  */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="ml-2 mt-2 w-6 h-6"
					>
						<path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z" />
					</svg>
				</label>
			</div>

			{/* VIDEO PREVIEW  */}
			<VideoPlayer src={videoSource} />
		</>
	);
}

export { file };
export default FileInput;
