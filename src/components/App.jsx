import { HWTitle } from "./HWTitle/HWTitle";
import { EventBoard } from "./EventBoard/EventBoard";
import profile from "../user.json";



export const App = () => {
  return (
    <>
    <HWTitle text="Профиль социальной сети"/>
    <EventBoard profile={profile}/>
    </>
  );
};
