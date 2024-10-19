import GlobeIcon from "@/assets/globe-icon.svg"

export const Footer = () => {
  return (
    <footer className="bg-black  text-white w-full py-16 font-futura paragraph-text text-[15px] font-light flex flex-col items-center">
     
     
      <div className=" flex justify-between w-5/6">
        <div className="flex flex-col gap-9">
          <h1 className="font-heavy">Resources</h1>
          <ul className=" flex flex-col gap-4">
            <li>
              <a href="#">Gift Cards</a>
            </li>
            <li>
              <a href="#">Find a Store</a>
            </li>
            <li>
              <a href="#">Membership</a>
            </li>
            <li>
              <a href="#">Nike x NBA</a>
            </li>
            <li>
              <a href="#">Nike Journal</a>
            </li>
            <li>
              <a href="#">Site Feedback</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-9">
          <h1 className="font-heavy">Help</h1>
          <ul className=" flex flex-col gap-4">
            <li>
              <a href="#">Get Help</a>
            </li>
            <li>
              <a href="#">Order Status</a>
            </li>
            <li>
              <a href="#">Shipping and Delivery</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Order Cancellation</a>
            </li>
            <li>
              <a href="#">Payment Options</a>
            </li>
            <li>
              <a href="#">Gift Card Balance</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-9">
          <h1 className="font-heavy">Company</h1>
          <ul className=" flex flex-col gap-4">
            <li>
              <a href="#">About Nike</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Investors</a>
            </li>
            <li>
              <a href="#">Purpose</a>
            </li>
            <li>
              <a href="#">Sustainablity</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-9">
          <h1 className="font-heavy">Promotions & Discounts</h1>
          <ul className=" flex flex-col gap-4">
            <li>
              <a href="#">Student</a>
            </li>
            <li>
              <a href="#">Military</a>
            </li>
            <li>
              <a href="#">Teacher</a>
            </li>
            <li>
              <a href="#">First Responders & Medical Professionals</a>
            </li>
            <li>
              <a href="#">Birthday</a>
            </li>
          </ul>
        </div>

        <div className="">
          <a href="#" className="flex gap-2 items-center"><h1 className="font-heavy">United States</h1>
          <GlobeIcon/> </a>
        </div>
      </div>

      <div className="w-5/6">

        <ul className="flex justify-between pt-20 pb-10 ">
          <li>
            <a href="#"><h1>© 2024 Nike, Inc. All Rights Reserved</h1></a>
          </li>
          <li>
            <a href="#"><h1>Terms of Sale</h1></a>
          </li>
          <li>
            <a href="#"><h1>Terms of Use</h1></a>
          </li>
          <li>
            <a href="#"><h1>Nike Privacy Policy</h1></a>
          </li>
          <li>
            <a href="#"><h1>CA Supply Chains Act</h1></a>
          </li>
        </ul>

      </div>

    </footer>
  );
};
