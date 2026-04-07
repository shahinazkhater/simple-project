const express = require('express');
const app = express();

app.use(express.json());

let tasks = [];


app.post('/add-task', (req, res) => {
    const { task, time } = req.body;
    tasks.push({ task, time });
    res.send("Task added");
});

app.get('/tasks', (req, res) => {
    res.json(tasks);
});


app.listen(3000, () => {
    console.log("Server running...");
});
setInterval(() => {
   let time = new Date().toLocaleTimeString("en-GB", {
  timeZone: "Africa/Cairo",
  hour: "2-digit",
  minute: "2-digit"
});

    let currentTime = time ;

    console.log("Current time:", currentTime);

    tasks.forEach(t => {
        console.log("Saved time:", t.time);

        if (t.time === currentTime) {
            console.log("🔔 Reminder: " + t.task);
        }
    });
}, 5000);