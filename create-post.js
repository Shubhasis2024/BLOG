const topicfield = document.getElementById("Topic");
const Titlefiled = document.getElementById("Title");
const descriptionfield=document.getElementById("description");

const publishbtn = document.getElementById("publish-btn");

async function publish() {
  const topic = topicfield.value;
  const title = Titlefiled.value;
  const description = descriptionfield.value;
  

  await fetch("/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ topic, title,description,}),
  });
}

publishbtn.addEventListener("click", (e) => {
  e.preventDefault();
  publish();
  topicfield.value = "";
  Titlefiled.value = "";
  descriptionfield.value="";
  
});
