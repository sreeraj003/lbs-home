import banner from "@/assets/images/aboutUs.jpg";
function Hero() {
    return (
        <div className="relative">
            <div className="">
                <img
                    src={banner}
                    alt="LBS Banner"
                    className="w-full contain  blur-[2px] h-auto"
                />
            </div>
            <div className="absolute inset-0 blur-[2px] bg-blue-900 mix-blend-multiply"></div>
        </div>

    );
}

export default Hero;