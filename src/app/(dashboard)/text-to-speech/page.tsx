import { TextToSpeechView } from "@/features/dashboard/text-to-speech/views/text-to-speech-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Text to speech",
};

export default function TextToSpeechPage() {
  return (
    <TextToSpeechView/>
  )
}