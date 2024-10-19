import NikeLogo from "@/assets/SVG/nike-logo.svg";

export const Header = () => {
  return (
    <header className="w-full overflow-x-clip flex flex-col sticky top-0 z-50">
      <div className="py-1  bg-[#000000] tracking-wider flex justify-center font-futura font-heavy">
        <h6 className="btn text-white font-medium">Free U.S. shipping on order overs $100</h6>
      </div>

      <div className="flex items-center justify-between px-32  py-4 backdrop-blur-md bg-white/30" >
        <div className="text-black  h-10 w-20 scale-110">
          <NikeLogo />
        </div>

        <div className="py-3 px-2 rounded-full text-[14px] thin-border ">
          <ul className="flex gap-8 font-futura">
            <li>
              <a href="#" className="btn btn-primary font-heavy">
                Dynamic
              </a>
            </li>
            <li>
              <a href="#" className="btn">Collections</a>
            </li>
            <li>
              <a href="#" className="btn">Bestsellers</a>
            </li>
            <li>
              <a href="#" className="btn">Our story</a>
            </li>
            <li>
              <a href="#" className="btn">About us</a>
            </li>
          </ul>
        </div>

        <button className="btn btn-primary text-sm  ">Create account</button>
      </div>
    </header>
  );
};
