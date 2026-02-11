import express from "express";

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "noxera-api" });
});

app.post("/agent/run", async (req, res) => {
  const { input } = req.body;

  res.json({
    status: "processed",
    result: `Agent received: ${input}`
  });
});

app.listen(4000, () => {
  console.log("NOXERA API running on http://localhost:4000");
});
