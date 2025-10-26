import { useState, useEffect, useRef } from "react";
import { auth, loginWithGoogle, logout, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  limit
} from "firebase/firestore";

export default function ChatRoom() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto scroll ke pesan terbaru
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Cek login
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  // Ambil pesan real-time
  useEffect(() => {
    const q = query(
      collection(db, "messages"), 
      orderBy("createdAt", "desc"),
      limit(50)
    );
    const unsub = onSnapshot(q, (snapshot) => {
      const messagesData = snapshot.docs.map((doc) => ({ 
        id: doc.id, 
        ...doc.data() 
      })).reverse();
      setMessages(messagesData);
    });
    return () => unsub();
  }, []);

  // Kirim pesan
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    setIsLoading(true);
    try {
      await addDoc(collection(db, "messages"), {
        text: message,
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        createdAt: serverTimestamp()
      });
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return "";
    const date = timestamp.toDate();
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  return (
    <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700/50 p-6 rounded-2xl shadow-2xl max-w-xl mx-auto mt-5 backdrop-blur-sm">
      
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Live Chat Room
          </h2>
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        </div>
        <p className="text-zinc-400 text-sm">
          {user ? `Welcome, ${user.displayName}!` : "Join the conversation"}
        </p>
      </div>

      {/* User Info & Logout */}
      {user && (
        <div className="flex justify-between items-center mb-4 p-4 bg-zinc-800/50 rounded-xl border border-zinc-700/30">
          <div className="flex items-center gap-3">
            <img 
              src={user.photoURL} 
              alt="avatar" 
              className="w-10 h-10 rounded-full border-2 border-purple-500/50" 
            />
            <div>
              <span className="text-white font-semibold block">{user.displayName}</span>
              <span className="text-green-400 text-xs flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Online
              </span>
            </div>
          </div>
          <button
            onClick={logout}
            className="bg-gradient-to-r from-red-500 to-pink-500 px-4 py-2 rounded-full text-white text-sm font-medium hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Logout
          </button>
        </div>
      )}

      {/* Messages Area */}
      <div className="h-80 overflow-y-auto border border-zinc-700/30 p-4 rounded-xl bg-zinc-800/30 mb-4 space-y-3 custom-scrollbar">
        {messages.length === 0 ? (
          <div className="text-center text-zinc-500 py-8">
            <div className="text-4xl mb-2">💬</div>
            <p>No messages yet. Be the first to say hello!</p>
          </div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.uid === user?.uid ? "justify-end" : "justify-start"}`}
            >
              {msg.uid !== user?.uid && (
                <img
                  src={msg.photoURL || "https://via.placeholder.com/40"}
                  alt="avatar"
                  className="w-8 h-8 rounded-full flex-shrink-0 mt-1 border border-zinc-600"
                />
              )}
              <div className="flex flex-col max-w-[70%]">
                {msg.uid !== user?.uid && (
                  <span className="text-xs text-zinc-400 mb-1 px-2">
                    {msg.displayName}
                  </span>
                )}
                <div
                  className={`p-3 rounded-2xl relative group ${
                    msg.uid === user?.uid
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-br-none"
                      : "bg-zinc-700/50 text-white rounded-bl-none border border-zinc-600/30"
                  }`}
                >
                  <div className="break-words">{msg.text}</div>
                  <div className={`text-xs opacity-60 mt-1 text-right ${
                    msg.uid === user?.uid ? 'text-blue-100' : 'text-zinc-400'
                  }`}>
                    {formatTime(msg.createdAt)}
                  </div>
                </div>
              </div>
              {msg.uid === user?.uid && (
                <img
                  src={msg.photoURL || "https://via.placeholder.com/40"}
                  alt="avatar"
                  className="w-8 h-8 rounded-full flex-shrink-0 mt-1 border border-blue-500/30"
                />
              )}
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Login / Message Form */}
      {user ? (
        <form onSubmit={sendMessage} className="flex gap-3 flex-wrap sm:flex-nowrap w-full">
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="w-full p-3 pr-12 rounded-xl bg-zinc-800/50 text-white border border-zinc-700/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
              disabled={isLoading}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400">
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <span>💬</span>
              )}
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading || !message.trim()}
            className="bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-3 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none w-full sm:w-auto"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </div>
            ) : (
              "Send"
            )}
          </button>
        </form>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 p-4 bg-zinc-800/30 rounded-xl border border-zinc-700/30">
          <button
            onClick={loginWithGoogle}
            className="flex items-center gap-3 bg-white text-gray-800 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 font-medium w-full justify-center max-w-xs"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google logo"
              className="w-5 h-5"
            />
            Login with Google to Chat
          </button>
          <p className="text-sm text-zinc-400 text-center">
            Join the conversation and connect with others
          </p>
        </div>
      )}

      {/* Online Counter */}
      <div className="text-center mt-4">
        <p className="text-zinc-500 text-sm">
          {messages.length} messages • Real-time chat
        </p>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(39, 39, 42, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.7);
        }
      `}</style>
    </div>
  );
}