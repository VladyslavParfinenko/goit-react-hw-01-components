import { HWTitle } from "./HWTitle/HWTitle";
import { EventBoard } from "./EventBoard/EventBoard";
import profile from "../user.json";
import { Statistic } from "./Statistics/Statistics";
import data from '../data.json';
import { FriendList } from "./FriendList/FriendList";
import friends from '../friends.json';




export const App = () => {
  return (
    <>
    <HWTitle text="Профиль социальной сети"/>
    <EventBoard profile={profile}/>
    <HWTitle text="Секция статистики"/>
    <Statistic stats={data} title={'Upload stats'}/>
    <HWTitle text="Список друзей"/>
    <FriendList friends={friends}/>

    </>
  );
};
