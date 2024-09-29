function Desc() {
    return (
      <div className="container flex flex-col items-center justify-center my-20">
        <div className="content flex items-center w-4/5 space-x-24">
          <div className="text flex-1 px-20 py-2">
            <p>
              <span className="font-bold">Drowsy Driver</span> is a solution to the problem of 
              <span className="font-bold"> drowsy driving</span>. Drowsy Driver helps you form 
              better driving habits and stay alert on the road. Not only does it detect signs 
              of fatigue, but it also collects data and offers insights to help you understand 
              your driving patterns.
            </p>
            <p>
              This information can be used to identify areas for improvement and ultimately 
              prevent accidents. Inspired by the prevalence of 
              <span className="font-bold"> drowsy driving in Miami</span>, where we frequently 
              witness people falling asleep at the wheel, Drowsy Driver aims to be a safety 
              solution for drivers everywhere.
            </p>
          </div>
          <div className="image flex-1 px-8 py-2 text-center">
            <img
              src="https://media.istockphoto.com/id/1155392792/photo/young-woman-driving-car-on-a-sunny-day.jpg?s=612x612&w=0&k=20&c=L6g-H0T5ldbMX5JUtug2AsoVRYzt7w5q9TUEPSQCu84="
              alt="Image"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default Desc;
  