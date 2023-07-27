var messageParagraph = document.getElementById("message");
var strmMessage =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
  " Fugit eius dignissimos harum distinctio esse debitis ipsam culpa." +
  " Aperiam rem non adipisci saepe blanditiis doloribus tempore ullam," +
  " hic accusantium cumque veritatis.";
var messageCharIndex = 0;
var interval = setInterval(() => {
  messageParagraph.append(strmMessage[messageCharIndex++]);
  if (messageCharIndex == strmMessage.length) clearInterval(interval);
}, 100);
