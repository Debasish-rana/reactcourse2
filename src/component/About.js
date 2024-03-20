import Fnuser from "./Fnuser";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
     
      <h1>This is my about us page</h1>
      <Fnuser name={"Debasish Rana"} location={"Palaschabri"} component={"This is a functional component"} />
      <UserClass name={"Debasish Rana"} location={"Palaschabri"} component={"This is a class component"}/>
       
    </div>
  );
};
export default About;
