import { config } from "../config";
import { ConfigCard } from "./ConfigCard";

const styleObj = {
  backgroundColor: "red",
};

//React Functional Component
//Example 1 (Most Used)
const HeaderComponent1 = ({ name, deliveryTime }) => (
  //Inline style using React
  <>
    <div style={styleObj}>
      <div className="config-card">
        {config.map((restaurant) => {
          return <ConfigCard key={restaurant.data.id} {...restaurant.data} />;
        })}
      </div>
      <h1 id="title" key="headerY">
        Namaste React!
      </h1>
      <h2>This is the new heading!</h2>
    </div>
  </>
);

//exporting the component as a Functional Component
export default HeaderComponent1;
