import ChatWindow from "@/components/ChatWindow";
import ListeningScreen from "@/components/ListeningScreen";
import { Button } from "@/components/ui/button";

interface ChatProps {
  mode: "text" | "voice";
}

export default function Chat({ mode }: ChatProps) {
  return (
    <div className="h-[70vh]">
      {" "}
      {mode === "text" ? (
        <div className="h-full max-w-4xl mx-auto bg-[#FDFDFD80] rounded-2xl px-4">
          <ChatWindow />{" "}
        </div>
      ) : (
        <div className="p-4 rounded-lg bg-white/10 border border-white h-full">
          <div className="h-full max-w-4xl mx-auto bg-[#FDFDFD80] rounded-2xl">
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
