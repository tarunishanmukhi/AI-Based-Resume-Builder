function analyzeResume() {
  let summary = document.getElementById("summary").value.toLowerCase();
  let skills = document.getElementById("skills").value.toLowerCase();
  let projects = document.getElementById("projects").value.toLowerCase();

  let score = 0;
  let suggestions = [];

  // Check summary
  if (summary.length > 50) {
    score += 30;
  } else {
    suggestions.push("Expand your professional summary.");
  }

  // Check skills
  const keySkills = ["communication", "leadership", "teamwork", "python", "java", "html", "css"];
  let matchedSkills = keySkills.filter(skill => skills.includes(skill));
  score += matchedSkills.length * 5;
  if (matchedSkills.length < 3) {
    suggestions.push("Add more technical or soft skills.");
  }

  // Check projects
  if (projects.split("\n").length >= 2) {
    score += 30;
  } else {
    suggestions.push("Include at least 2 projects.");
  }

  // Final polish
  if (summary && skills && projects) {
    score += 10;
  }

  document.getElementById("score").textContent = score;
  document.getElementById("bar").style.width = score + "%";

  let suggestionList = document.getElementById("suggestions");
  suggestionList.innerHTML = "";
  if (suggestions.length === 0) {
    suggestionList.innerHTML = "<li>Great job! Your resume looks good.</li>";
  } else {
    suggestions.forEach(s => {
      let li = document.createElement("li");
      li.textContent = s;
      suggestionList.appendChild(li);
    });
  }
}
