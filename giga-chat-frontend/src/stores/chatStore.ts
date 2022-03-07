import { defineStore } from "pinia";
import type { Chat } from "@/models/Chat";
import { ChatService } from "@/services/chat.service";

const chatService = new ChatService();

export const ChatStore = defineStore({
  id: "ChatStore",
  state: () => ({
    chats: [{ text: "First chat" }, { text: "Second chat" }] as Chat[],
  }),
  actions: {
    createChat(chat: Chat) {
      chatService.createChat(chat);
      this.chats.push(chat);
    },
  },
});
