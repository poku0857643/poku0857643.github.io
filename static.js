function flipCard(cardId) {
  const front = document.getElementById(`${cardId}-front`);
  const back = document.getElementById(`${cardId}-back`);
  const parent = front.parentElement;

  parent.classList.toggle('flipped');
}

function navigateTo(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}


const GITHUB_USERNAME = "poku0857643"; // Replace this

async function fetchAndRenderRepos() {
  const repoList = document.getElementById("github-repo-list");
  repoList.innerHTML = "<li>Loading...</li>";

  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`);
    const repos = await response.json();

    const sorted = repos
      .filter(repo => !repo.fork)
      .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
      .slice(0, 6);

    repoList.innerHTML = "";

    sorted.forEach(repo => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a> - ${repo.description || "No description."}`;
      repoList.appendChild(li);
    });
  } catch (error) {
    repoList.innerHTML = "<li>Failed to load repositories.</li>";
    console.error("GitHub API error:", error);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  fetchAndRenderRepos();
});
