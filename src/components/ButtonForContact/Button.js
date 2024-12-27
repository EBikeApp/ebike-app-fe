import Link from "next/link";


export default function ButtonForContactUs() {
  const facebook = require("../../assest/images/facebook-svgrepo-com.svg");

  return (
    <div className="flex flex-col items-center gap-2">
      <Link target="_blank" href="https://www.facebook.com/profile.php?id=61550772461381&ref=embed_page">
        <div className="bg-sky-500 inline-block rounded-full w-11 h-11 p-2">
          <img
            src="https://www.svgrepo.com/show/3885/facebook.svg"
            alt="facebook"
            className="w-full"
          />
        </div>
      </Link>
      <Link target="_blank" href="https://www.facebook.com/messages/t/131507896704269">
        <div className="bg-sky-500 inline-block rounded-full w-11 h-11 p-2">
          <img
            src="https://www.svgrepo.com/show/313913/facebook-messenger.svg"
            alt="messenger"
            className="w-full"
          />
        </div>
      </Link>
      <Link target="_blank" href="https://zalo.me/0974294781">
        <div className="bg-sky-500 inline-block rounded-full w-11 h-11 p-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/1200px-Icon_of_Zalo.svg.png"
            alt="zalo"
            className="w-full"
          />
        </div>
      </Link>
      <Link target="_blank" href="https://www.tiktok.com/@xedap_xedien_thanhtung?_t=8m0hDEdT65y&_r=1">
        <div className="bg-sky-500 inline-block rounded-full w-11 h-11 p-2">
          <img
            src="https://www.svgrepo.com/show/364932/tiktok-logo-fill.svg"
            alt="tiktok"
            className="w-full"
          />
        </div>
      </Link>
      <div>
        <a target="_blank" href="tel:0974294781">
          <div className="bg-sky-500 inline-block rounded-full w-11 h-11 p-2">
            <img
              src="https://cdn1.iconfinder.com/data/icons/office-and-business-14/48/99-512.png"
              alt="Phone"
              className="w-full"
            />
          </div>
        </a>
      </div>
    </div>
  );
}
