const wrapper = document.querySelector(".wrapper");
const img = document.querySelector(".wrapper img");

wrapper.addEventListener("dblclick", (e) => {
  let xValue = e.offsetX - 10;
  let YValue = e.offsetY - 10;

  const iconHeart = document.createElement("i");
  iconHeart.className = "fa-solid fa-heart";
  iconHeart.style.top = `${YValue}px`;
  iconHeart.style.left = `${xValue}px`;
  wrapper.appendChild(iconHeart);

  setTimeout(() => iconHeart.remove(), 1000);
});
