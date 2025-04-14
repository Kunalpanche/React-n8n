import { useEffect } from "react";
import "@n8n/chat/style.css";



function App() {
  useEffect(() => {
    import("@n8n/chat")
      .then(({ createChat }) => {
        console.log("Loaded @n8n/chat successfully");

        createChat({
          webhookUrl: "https://kkp.app.n8n.cloud/webhook/a509e45b-9238-4023-bd26-ae5ba83735ce/chat",
          theme: {
            color: "#04122c",
            title: "Inventory Chatbot",
            position: "bottom-right",
          },
        });
      })
      .catch((error) => {
        console.error("Failed to load chat module:", error);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Inventory Chatbot</h1>
    </div>
  );
}

export default App;
