import React from "react";
import HeaderComponent from "./components/header";
import FooterComponent from "./components/footer";
import UserComponent from "./components/usercomponent";
import ClassComponent from './components/classcomponent';
function AppComponent() {
  const name = "John";
  const el = <h1> iam H1 tag </h1>;

  const users = [
    {
      name: "Ramu",
      id: 1,
    },
    {
      name: "Raju",
      id: 2,
    },
    {
      name: "Ramesh",
      id: 3,
    },
  ];
  return (
    <div className="App">
      <HeaderComponent />
      <UserComponent users={users} />
      <ClassComponent/>
      <FooterComponent />
    </div>
  );
}

export default AppComponent;
