async function runResearch() {
    const topic = document.getElementById("topic").value.trim();
    const status = document.getElementById("status");

    if (!topic) {
        status.textContent = "Please enter a research topic!";
        return;
    }

    status.textContent = "Agents are working...";

    try {
        const response = await fetch("/research", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ topic: topic })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Research failed");
        }

        document.getElementById("researcher").textContent =
            data.researcher;

        document.getElementById("writer").textContent =
            data.writer;

        document.getElementById("reviewer").textContent =
            data.reviewer;

        document.getElementById("warning").textContent =
            data.warning;

        status.textContent = "✅ " + data.status;

    } catch (error) {
        status.textContent = "Error: " + error.message;
    }
}