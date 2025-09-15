import ChatWindow from "@/components/ChatWindow";

interface ChatProps {
  mode: "voice" | "text";
}

export default function Chat({ mode }: ChatProps) {
  return (
    <div className="border p-4 rounded-lg bg-white">
      {mode === "voice" ? (
        <p>🎤 Voice Mode Activated</p>
      ) : (
        <div>
          <p>💬 Text Mode Activated</p>
          <ChatWindow />
        </div>
      )}
    </div>
  );
}
