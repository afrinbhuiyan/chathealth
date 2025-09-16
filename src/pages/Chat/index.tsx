import ChatWindow from "@/components/ChatWindow";
import ListeningScreen from "@/components/ListeningScreen";
import { Button } from "@/components/ui/button";

interface ChatProps {
  mode: "text" | "voice";
}

export default function Chat({ mode }: ChatProps) {
  return (
    <div className="h-[70vh] bg-white/10 border rounded-lg  border-white p-4">
      {" "}
      {mode === "text" ? (
        <div className="h-full max-w-4xl mx-auto bg-[#FDFDFD80] rounded-2xl px-4">
          <ChatWindow />{" "}
        </div>
      ) : (
        <div className="h-full">
          <div className="h-full max-w-3xl mx-auto bg-[#E2E2E266] rounded-2xl">
            {" "}
            <ListeningScreen />
          </div>
        </div>
      )}
      <div className="mt-6 flex justify-center gap-2">
        <Button
          size="xl"
          className="rounded-full bg-white hover:bg-gray-200 text-black"
        >
          Back
        </Button>

        <Button
          size="xl"
          className="rounded-full bg-black hover:bg-gray-800 text-white"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
