import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlayersByPost } from "../../redux/actions/players.actions";

export const PlayersList = ({ id }) => {
  const dispatch = useDispatch();
  let players = useSelector((state) => state.currentGameRoom);
  console.log("||||||players||||||", players);

  useEffect(() => {
    dispatch(getPlayersByPost(id));
  }, []);
  return (
    <>
      <ul>
        {players.map((player) => {
          return <li></li>;
        })}
        <li>---{id}-----</li>
      </ul>
    </>
  );
};
