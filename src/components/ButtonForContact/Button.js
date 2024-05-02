import Link from "next/link";

export default function ButtonForContactUs() {
  return (
    <div className="flex flex-col items-center gap-2">
      <Link target="_blank" href="https://www.facebook.com/profile.php?id=61550772461381&ref=embed_page">
        <div className="bg-sky-500 inline-block rounded-full w-11 h-11 p-2">
          <img
            src="https://hanayuki.com.vn/images/icon-facebook.png"
            alt="hanayuki"
            className="w-full"
          />
        </div>
      </Link>
      <Link target="_blank" href="https://www.facebook.com/messages/t/131507896704269">
        <div className="bg-sky-500 inline-block rounded-full w-11 h-11 p-2">
          <img
            src="https://hanayuki.com.vn/images/ic-messenger.png"
            alt="hanayuki"
            className="w-full"
          />
        </div>
      </Link>
      <Link target="_blank" href="https://zalo.me/0974294781">
        <div className="bg-sky-500 inline-block rounded-full w-11 h-11 p-2">
          <img
            src="https://hanayuki.com.vn/images/zalo.png"
            alt="hanayuki"
            className="w-full"
          />
        </div>
      </Link>
      <div>
        <a target="_blank" href="tel:0974294781">
          <div className="bg-sky-500 inline-block rounded-full w-11 h-11 p-2">
            <img
              src="https://hanayuki.com.vn/images/icon-call.png"
              alt="hanayuki"
              className="w-full"
            />
          </div>
        </a>
      </div>
    </div>
  );
}
