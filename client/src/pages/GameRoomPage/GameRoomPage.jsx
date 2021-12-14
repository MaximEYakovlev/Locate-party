import { style } from "dom-helpers";
import { useNavigate } from "react-router";
import { Button } from "../../components/Button/Button";
import styles from "./styles.module.css";
export const GameRoomPage = () => {
  const navigate = useNavigate();
  const post = {
    title: "Game Title",
    system: "D&D5e",
    requirements: "oking at its layout. The point of using  ",
    description: `What is Lorem Ipsum?
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    gameDates: "Четверг 13.30",
  };
  const players = [
    { name: "Vasya", link: "/user-page" },
    { name: "Masha", link: "/user-page" },
    { name: "Kolya", link: "/user-page" },
    { name: "Dasha", link: "/user-page" },
    { name: "I_Tvoya_Mamasha", link: "/user-page" },
  ];
  let user = {
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  };
  return (
    <div className={styles.main_container_column}>
      <div className={styles.game_description_container}>
        <img
          className={styles.game_master_icon}
          src={
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          }
          onClick={() => console.log("Click on gamemaster icon!")}
        />
        <div className={styles.flex_container_column}>
          <div className={styles.outer_box}></div>
          <div>
            <span className={styles.bold}>Комната игры:</span>
            <span>{post.title}</span>
          </div>
          <div>
            <span className={styles.bold}>Игровая система:</span>
            <span>{post.system}</span>
          </div>
          <div>
            <span className={styles.bold}> Требования к игрокам:</span>
            <span>{post.requirements}</span>
          </div>
          <div>
            <span className={styles.bold}> Описание:</span>
            <span>{post.description}</span>
          </div>
        </div>
      </div>
      <div className={styles.gameTime}> 01/02/2013 Четверг 12.00</div>
      <div className={styles.chat_and_players}>
        <div className={styles.flex_container_row}>
          <div className={styles.players}>
            <div className={styles.flex_container_column}>
              <ul>
                {players.map((el) => {
                  return <li onClick={() => navigate(el.link)}> {el.name} </li>;
                })}
              </ul>
            </div>
          </div>
          <div className={styles.chat}>
            <h2>Чат</h2>
          </div>
        </div>
        <div className={styles.buttons}>
          <div className={styles.Button}></div>
          <div>
            <Button
              className={styles["new-post-page__new-post-form-submit-button"]}
            >
              Игроки в ожидании
            </Button>
            <Button
              className={styles["new-post-page__new-post-form-submit-button"]}
            >
              Установить дату игры
            </Button>
          </div>
          <div>
            <Button
              className={styles["new-post-page__new-post-form-submit-button"]}
            >
              Редактировать
            </Button>
            <Button
              className={styles["new-post-page__new-post-form-submit-button"]}
            >
              Удалить обьявление
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};