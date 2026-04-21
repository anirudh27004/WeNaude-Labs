'use client';

import {z} from "zod";
import { formOptions } from "@tanstack/react-form";

import { useAppForm } from "@/hooks/use-app-form";
import { text } from "stream/consumers";

const ttsFormSchema = z.object({
    text:z.string().min(1, "please enter some text"),
    voiceId:z.string().min(1, "Please select a voice"),
    temperature: z.number(),
    topP: z.number(),
    topK: z.number(),
    repetitionPenalty: z.number(),
});

export type TTSFromValues = z.infer<typeof ttsFormSchema>;

export const defaultTTSValues: TTSFromValues = {
    text: "",
    voiceId: "",
    temperature: 0.8,
    topP: 0.95,
    topK: 1000,
    repetitionPenalty: 1.2,
};

export const ttsFormOptions = formOptions({
    defaultValues: defaultTTSValues,
});

export function TextToSpeechForm({
    children,
    defaultValues,
}: {
    children: React.ReactNode;
    defaultValues?: TTSFromValues;
}){
    const form = useAppForm({
        ...ttsFormOptions,
        defaultValues: defaultValues ?? defaultTTSValues,
        validators: {
            onSubmit: ttsFormSchema,
        },
        onSubmit: async () => {
            //TODO: generate logic to be added later
        }
    });

    return <form.AppForm>{children}</form.AppForm>

};