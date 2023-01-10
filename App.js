import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation";
import awsconfig from "./src/aws-exports";
import Amplify from "aws-amplify";
Amplify.configure(awsconfig);

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
