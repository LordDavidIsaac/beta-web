document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search");
  const topicList = document.getElementById("topic-list");

  // Example topics
  const topics = [
    "Algebra Basics",
    "Calculus I",
    "Geometry",
    "Probability",
    "Statistics",
    "Differential Equations"
  ];

  function displayTopics(filter = "") {
    topicList.innerHTML = "";
    topics
      .filter(topic => topic.toLowerCase().includes(filter.toLowerCase()))
      .forEach(topic => {
        const item = document.createElement("p");
        item.textContent = topic;
        topicList.appendChild(item);
      });
  }

  searchInput.addEventListener("input", () => {
    displayTopics(searchInput.value);
  });

  displayTopics(); // Load all on page load
});
