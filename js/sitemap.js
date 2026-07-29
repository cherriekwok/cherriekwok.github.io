const pages = [
    {
        title: "Home",
        url: "index.html",
        content: `
            academic research humanities digital humanities scholar teaching literature archive
            biography introduction
        `
    },
    {
        title: "About",
        url: "about.html",
        content: `
            biography research interests literary history archives book history cultural studies
            academic profile scholar
        `
    },
    {
        title: "Research",
        url: "research.html",
        content: `
            research projects publications archives fellowships grants digital humanities
            scholarly articles methodologies
        `
    },
    {
        title: "Teaching",
        url: "teaching.html",
        content: `
            courses syllabus seminars pedagogy teaching statement student projects classroom
        `
    },
    {
        title: "Digital Humanities",
        url: "digital-humanities.html",
        content: `
            digital humanities datasets coding text analysis computational methods archives
            visualization projects
        `
    },
    {
        title: "Desert Island",
        url: "desert-island.html",
        content: `
            poetry prose film tv literature reading list books authors cinema
        `
    }
];

const searchInput = document.getElementById("siteSearch");
const resultsBox = document.getElementById("searchResults");

function searchSite(query) {

    resultsBox.innerHTML = "";

    if (!query) return;

    const q = query.toLowerCase();

    const results = pages.map(page => {

        const text = page.content.toLowerCase();

        let score = 0;

        if (page.title.toLowerCase().includes(q)) score += 5;

        if (text.includes(q)) score += 1;

        return { ...page, score };

    }).filter(p => p.score > 0)
      .sort((a, b) => b.score - a.score);

    if (results.length === 0) {
        resultsBox.innerHTML =
            `<p>No results found.</p>`;
        return;
    }

    results.forEach(page => {

        const div = document.createElement("div");
        div.className = "search-result";

        const snippet = page.content
            .replace(/\s+/g, " ")
            .trim()
            .slice(0, 120);

        div.innerHTML = `
            <a href="${page.url}">${page.title}</a>
            <div class="search-snippet">
                ${snippet}...
            </div>
        `;

        resultsBox.appendChild(div);
    });
}

searchInput.addEventListener("input", (e) => {
    searchSite(e.target.value);
});