import { defineStore } from "pinia";
import type { Chat } from "@/models/Chat";

export const ChatStore = defineStore({
  id: "ChatStore",
  state: () => ({
    chats: [{ text: "First chat" }, { text: "Second chat" }] as Chat[],
  }),
  actions: {
    createChat(chat: Chat) {
      this.chats.push(chat);
    },
  },
});
