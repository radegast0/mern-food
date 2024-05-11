import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <div className="-mt-16 flex flex-col gap-5 rounded-lg bg-white py-8 text-center shadow-md">
        <h1 className="text-2xl font-bold tracking-tight text-slate sm:text-3xl md:text-4xl lg:text-5xl">
          Tastier Twist on Takeout.
        </h1>
        <span className="lg:text-2xl md:text-xl text-base">Just a click away!</span>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <img src={landingImage} alt="" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="text-3xl font-bold tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the MernEats App for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownloadImage} alt="" />
        </div>
      </div>
    </div>
  );
}
