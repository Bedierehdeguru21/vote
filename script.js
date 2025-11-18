const positionsDiv = document.getElementById("positions");
const voteSection = document.getElementById("voteSection");
const resultSection = document.getElementById("resultSection");

let currentPosition = null;

async function fetchPositions() {
    let res = await fetch("/api/positions.py");
    let data = await res.json();

    positionsDiv.innerHTML = "<h2>Vote Categories</h2>";

    data.positions.forEach(pos => {
        let btn = document.createElement("button");
        btn.innerText = pos.name;
        btn.onclick = () => choosePosition(pos);
        positionsDiv.appendChild(btn);
    });
}

function choosePosition(pos) {
    currentPosition = pos;

    voteSection.innerHTML = `<h2>${pos.name}</h2><p>Select a candidate below:</p>`;
    voteSection.classList.remove("hidden");

    pos.candidates.forEach(c => {
        let btn = document.createElement("button");
        btn.classList.add("candidate-btn");
        btn.innerText = c;
        btn.onclick = () => vote(pos.id, c);
        voteSection.appendChild(btn);
    });
}

async function vote(position, candidate) {
    await fetch("/api/vote.py", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ position, candidate })
    });

    showResults();
}

async function showResults() {
    let res = await fetch("/api/results.py");
    let data = await res.json();

    resultSection.classList.remove("hidden");
    resultSection.innerHTML = `<h2>Live Results</h2>`;

    data.positions.forEach(pos => {
        let h = document.createElement("h3");
        h.innerText = pos.name;
        resultSection.appendChild(h);

        Object.keys(pos.votes).forEach(c => {
            let div = document.createElement("div");
            div.classList.add("result-item");
            div.innerHTML = `${c}: <strong>${pos.votes[c]}</strong>`;
            resultSection.appendChild(div);
        });
    });
}

fetchPositions();
