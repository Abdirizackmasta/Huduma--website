import {
  FaBehance,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationPin,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <div id="footer">
      <div className="bg-white py-16">
        <div className="max-w-[1400px] mx-auto grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 px-3">
          <div>
            <img src="/logo.png" alt="" />
            <p className="text-gray py-4 text-lg">
            Embark on unforgettable journeys with personalized tours to stunning destinations. Whether you seek adventure, relaxation, or culture, we tailor each trip to your desires.
            </p>
            <h5 className="font-semibold text-2xl py-4">Follow us on:</h5>
            <span className="flex items-center gap-4">
              <FaFacebookF
                size={20}
                className="hover:text-primary cursor-pointer"
              />
              <FaBehance
                size={20}
                className="hover:text-primary cursor-pointer"
              />
              <FaInstagram
                size={20}
                className="hover:text-primary cursor-pointer"
              />
              <FaWhatsapp
                size={20}
                className="hover:text-primary cursor-pointer"
              />
              <FaLinkedinIn
                size={20}
                className="hover:text-primary cursor-pointer"
              />
            </span>
          </div>
          <div>
            <h5 className="font-semibold text-2xl pb-8">Tour Type</h5>
            <ul>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                Adventure Tours
              </li>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                Group Tours
              </li>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                Seasonal Tours
              </li>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                Relaxation Tours
              </li>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                Family Friendly Tours
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-2xl pb-8">Contact Info</h5>
            <ul>
              <span className="text-gray flex items-center pb-2 gap-2 lg:w-4/5">
                <FaPhone size={20} />
                <li className="leading-8">+254713200058 0724443336</li>
              </span>
              <span className="text-gray flex items-center pb-2 gap-2 lg:w-4/5">
                <FaClock size={20} />
                <li className="leading-8">
                  Mon-Fri 09:00-18:00 (except public holidays)
                </li>
              </span>
              <span className="text-gray flex items-center pb-2 gap-2 lg:w-4/5">
                <FaLocationPin size={20} />
                <li className="leading-8">
                  General Wairungi Street Andalus Shopping Centre
                </li>
              </span>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-2xl pb-8">Gallery</h5>
            <div className="grid grid-cols-3 gap-2">
              <div className="overflow-hidden my-0 mx-auto rounded-lg w-full">
                <img
                  src="/img5.jpg"
                  alt=""
                  className="rounded-lg w-[90px] h-[90px] box-border hoverImg"
                />
              </div>
              <div className="overflow-hidden my-0 mx-auto rounded-lg w-full">
                <img
                  src="/img2.jpg"
                  alt=""
                  className="rounded-lg w-[90px] h-[90px] box-border hoverImg"
                />
              </div>
              <div className="overflow-hidden my-0 mx-auto rounded-lg w-full">
                <img
                  src="/img7.jpg"
                  alt=""
                  className="rounded-lg w-[90px] h-[90px] box-border hoverImg"
                />
              </div>
              <div className="overflow-hidden my-0 mx-auto rounded-lg w-full">
                <img
                  src="/img3.jpg"
                  alt=""
                  className="rounded-lg w-[90px] h-[90px] box-border hoverImg"
                />
              </div>
              <div className="overflow-hidden my-0 mx-auto rounded-lg w-full">
                <img
                  src="/img5.jpg"
                  alt=""
                  className="rounded-lg w-[90px] h-[90px] box-border hoverImg"
                />
              </div>
              <div className="overflow-hidden my-0 mx-auto rounded-lg w-full">
                <img
                  src="/img6.jpg"
                  alt=""
                  className="rounded-lg w-[90px] h-[90px] box-border hoverImg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lightGray py-10 flex items-center text-center justify-center">
        <p className="px-3">
          © Copyright 2024. All Rights Reserved by Abdiaziz
        </p>
      </div>
    </div>
  );
}
