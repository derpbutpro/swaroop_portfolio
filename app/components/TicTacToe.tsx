"use client";

import { useRef, useState } from "react";
import { RotateCcw } from "lucide-react";
import styles from "./TicTacToe.module.css";

type Mark = "X" | "O";
const lines = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function emptyBoard(): (Mark | null)[] {
  return Array(9).fill(null);
}

export default function TicTacToe() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [board, setBoard] = useState(emptyBoard);
  const moves = board.filter(Boolean).length;
  const turn = moves % 2 === 0 ? "X" : "O";
  const wins = lines.filter(([a, b, c]) => board[a] && board[a] === board[b] && board[a] === board[c]);
  const winner = wins.length ? board[wins[0][0]] : null;
  const finished = Boolean(winner) || moves === 9;
  const status = winner ? `${winner} wins!` : finished ? "Draw game" : `${turn}’s turn`;

  return (
    <div className={styles.launcher}>
      <button
        type="button"
        className="button primary"
        aria-haspopup="dialog"
        onClick={() => dialog.current?.showModal()}
      >
        Bring a friend to play Tic-Tac-Toe
      </button>
      <dialog ref={dialog} className={styles.game} aria-labelledby="game-title">
        <div className={styles.header}>
          <h2 id="game-title">Tic-Tac-Toe</h2>
          <span role="status">{status}</span>
        </div>
        <div className={styles.board} role="group" aria-label="Game board">
          {board.map((mark, index) => (
            <button
              type="button"
              key={index}
              aria-label={`Row ${Math.floor(index / 3) + 1}, column ${(index % 3) + 1}: ${mark ?? "empty"}`}
              aria-disabled={finished || Boolean(mark)}
              data-winning={wins.some(line => line.includes(index))}
              data-mark={mark}
              onClick={() => {
                if (!finished && !mark) {
                  setBoard(board.map((value, position) => position === index ? turn : value));
                }
              }}
            >
              {mark}
            </button>
          ))}
        </div>
        <button type="button" className={styles.reset} disabled={moves === 0} onClick={() => setBoard(emptyBoard())}>
          <RotateCcw size={16} aria-hidden="true" /> New round
        </button>
        <form method="dialog">
          <button className={styles.close} type="submit">Close game</button>
        </form>
      </dialog>
    </div>
  );
}
