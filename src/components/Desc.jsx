import placeholder from "../assets/placeholder.svg"

function Desc() {
    return (
      <div className="flex items-center justify-center my-52 bg-gray-50/20 mx-[5%] p-8 rounded-xl">
          <div className="px-20 py-2 text-lg flex flex-row gap-5 items-center">
            <div className="basis-1/2">
                Introducing Drowsy Driver, an innovative software solution designed to enhance your camera's capabilities by monitoring driver fatigue in real-time. This cutting-edge application utilizes advanced facial recognition algorithms to analyze drivers' facial features and eye movements, detecting signs of drowsiness before it's too late. With instant alerts sent to the driver, Drowsy Driver ensures safer driving experiences and significantly reduces the risk of accidents caused by fatigue. Transform your standard camera into a powerful safety tool—make every journey safer with Drowsy Driver!
            </div>
            <img src={placeholder} className="w-80">
            </img>
          </div>
      </div>
    );
  }
  
  export default Desc;
  