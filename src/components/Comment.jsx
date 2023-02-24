import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/EliasFMartins.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Elias F. Martins</strong>
              <time
                title="21 de Fereveiro às 13:01"
                dateTime="2023-02-21 13:01:22"
              >
                Cerca de 1h atrás
              </time>
            </div>
              <button title="Déletar comentário">
                <Trash size={24} />
              </button>
          </header>
          <p>Muito bom Annie, parabéns!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}