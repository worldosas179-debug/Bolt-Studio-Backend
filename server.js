const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.get("/", (req, res) => {
  res.json({
    name: "Dolt Studio AI Engine",
    status: "online",
    features: [
      "AI video generation",
      "AI image generation",
      "AI image editing",
      "Image to video",
      "AI music",
      "Sound effects",
      "Captions"
    ]
  });
});

app.post("/generate", async (req, res) => {
  const { prompt, type = "video" } = req.body;

  if (!prompt) {
    return res.status(400).json({
      error: "A prompt is required."
    });
  }

  res.json({
    status: "queued",
    type,
    prompt,
    message: "Generation request received by Dolt Studio."
  });
});

app.listen(PORT, () => {
  console.log(`Dolt Studio AI Engine running on port ${PORT}`);
});
