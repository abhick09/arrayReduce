const data = Array.from(document.querySelectorAll("[data-time]"));
const seconds = data
  .map((node) => node.dataset.time)
  .map((timeCode) => {
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total,vidSeconds) => total + vidSeconds);

  let secondsLeft = seconds;
  const hours = Math.floor(secondsLeft/3600);
  secondsLeft = secondsLeft % 3600;

  const mins = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;

  console.log(`The total time of the videos is ${hours}hrs,${mins}minutes and ${secondsLeft}seconds`);