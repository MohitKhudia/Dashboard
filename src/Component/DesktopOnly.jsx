import { useEffect, useState } from "react";

const DesktopOnly = ({ children }) => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024); 
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!isDesktop) {
    return (
      <div className="flex flex-col items-center justify-center h-screen maxw-[1024px] px-3 ">
        <h2 className="text-5xl font-medium text-center">This website is only available on desktop devices.</h2>
        <p className="text-3xl mt-6">Please open this page on a larger screen.</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default DesktopOnly;
