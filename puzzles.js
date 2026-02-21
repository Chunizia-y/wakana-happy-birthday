// 問題の設定ファイル
// image: 問題画像のパス, answer: 正解の文字列
const PUZZLES = [
  { image: "image/puzzle1.png", answer: "フロ" },
  { image: "image/puzzle2.png", answer: "女神" },
  { image: "image/puzzle3.png", answer: "ジブリ" },
  { image: "image/puzzle4.png", answer: "木" },
  { image: "image/puzzle5.png", answer: "うす" },
  { image: "image/puzzle6.png", answer: "富士山" },
  { image: "image/puzzle7.png", answer: "cruise" },
];

// ヒント設定（puzzleIndex: 0始まり → 画像パスの配列）
const HINTS = {
  6: [
    "image/hint1.png",
    "image/hint2.png",
    "image/hint3.png",
    "image/hint4.png",
  ]
};
