"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");
  const [links, setLinks] = useState([{ title: "", url: "" }]);

  const handleLinkChange = (index: number, field: string, value: string) => {
    const updatedLinks = [...links];
    updatedLinks[index][field as keyof typeof updatedLinks[0]] = value;
    setLinks(updatedLinks);
  };

  const addLink = () => {
    setLinks([...links, { title: "", url: "" }]);
  };

  return (
    <main className="min-h-screen bg-black text-yellow-400 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Create Your Link-in-Bio Page</h1>

      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8">
        {/* LEFT FORM */}
        <div className="flex-1 bg-zinc-900 p-6 rounded-2xl shadow-lg">
          <div className="mb-4">
            <label className="block text-sm mb-1">Your Name</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-black border border-yellow-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Bio</label>
            <textarea
              className="w-full p-2 rounded bg-black border border-yellow-400"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Profile Image URL</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-black border border-yellow-400"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Add Links</label>
            {links.map((link, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Title"
                  className="flex-1 p-2 rounded bg-black border border-yellow-400"
                  value={link.title}
                  onChange={(e) => handleLinkChange(index, "title", e.target.value)}
                />
                <input
                  type="text"
                  placeholder="URL"
                  className="flex-1 p-2 rounded bg-black border border-yellow-400"
                  value={link.url}
                  onChange={(e) => handleLinkChange(index, "url", e.target.value)}
                />
              </div>
            ))}
            <button
              onClick={addLink}
              className="mt-2 px-4 py-2 bg-yellow-400 text-black rounded font-semibold hover:bg-yellow-300"
            >
              + Add Link
            </button>
          </div>
        </div>

        {/* RIGHT PREVIEW */}
        <div className="flex-1 bg-zinc-800 p-6 rounded-2xl shadow-xl flex flex-col items-center">
          {image && (
            <img
              src={image}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-yellow-400 mb-4"
            />
          )}
          <h2 className="text-xl font-bold">{name || "Your Name"}</h2>
          <p className="text-sm text-yellow-300 mb-4 text-center">{bio || "Your bio goes here..."}</p>

          <div className="w-full">
            {links.map(
              (link, index) =>
                link.title &&
                link.url && (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full mb-2 bg-yellow-400 text-black text-center py-2 px-4 rounded hover:bg-yellow-300 font-medium"
                  >
                    {link.title}
                  </a>
                )
            )}
          </div>

          <p className="text-xs text-yellow-200 mt-4">Preview of: <span className="underline">{name.toLowerCase().replace(" ", "") || "username"}.site</span></p>
        </div>
      </div>
    </main>
  );
}
