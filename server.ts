import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Proxy endpoint to handle the webhook form submission and bypass CORS
  app.post("/api/webhook", async (req, res) => {
    try {
      const data = req.body;
      
      // The requirement asks to send the data using multipart/form-data
      // We reconstruct a FormData object to send it off to the final webhook
      const formData = new FormData();
      for (const [key, value] of Object.entries(data)) {
        formData.append(key, String(value));
      }
      
      const webhookUrl = process.env.WEBHOOK_URL || "https://www.classwithspeed.pro/webhook/8949a2eb-fcec-4c77-b4bf-06985edccb29";
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        body: formData,
      });
      
      const responseText = await response.text();
      console.log("Proxy Webhook Response Status:", response.status);
      console.log("Proxy Webhook Response Body:", responseText);

      res.status(response.status).send(responseText);
    } catch (error) {
      console.error("Express proxy webhook error:", error);
      res.status(500).json({ error: "Failed to forward webhook" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production serving static files
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
