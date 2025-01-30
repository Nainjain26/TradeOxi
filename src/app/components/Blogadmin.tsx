import { useState, useRef } from "react";
import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "draft-js/dist/Draft.css";

export default function Blogadmin() {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "", // Store HTML version of description
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Editor state
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const editorRef = useRef<Editor | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData({ ...formData, [name]: files[0] });
    }
  };

  // Handle changes in Draft.js editor
  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
    const rawContent = convertToRaw(state.getCurrentContent());
    const htmlDescription = draftToHtml(rawContent); // Convert to HTML
    setFormData({ ...formData, description: htmlDescription });
  };

  // Handle text formatting (bold, italic, etc.)
  const handleFormat = (style: string) => {
    const newState = RichUtils.toggleInlineStyle(editorState, style);
    setEditorState(newState);
  };

  // Handle paragraph alignment (left, center, right, justify)


  // const handleAlign = (alignment: string) => {
  //   const contentState = editorState.getCurrentContent();
  //   const selection = editorState.getSelection();
  //   const newState = RichUtils.toggleBlockType(editorState, alignment);
  //   setEditorState(newState);
  // };


  // Insert Image (by URL or File Upload)
  // const insertImage = (url: string) => {
  //   const contentState = editorState.getCurrentContent();
  //   const contentStateWithEntity = contentState.createEntity('IMAGE', 'IMMUTABLE', { src: url });
  //   const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  //   const newContentState = Modifier.insertText(contentState, editorState.getSelection(), ' ', null, entityKey);
  //   const newEditorState = EditorState.push(editorState, newContentState, 'insert-characters');
  //   setEditorState(newEditorState);
  // };

  // Handle block format (Heading 1, Heading 2, etc.)

  // const handleBlockFormat = (style: string) => {
  //   const newState = RichUtils.toggleBlockType(editorState, style);
  //   setEditorState(newState);
  // };

  // Handle Submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const data = new FormData();

    // Log the data to check if formData is correct
    console.log("Form data before submission:", formData);

    // Ensure formData.image exists (image should be a file)
    if (!formData.image) {
      setError("Image is required.");
      setIsSubmitting(false);
      return;
    }

    // Ensure formData.description is not empty
    if (!formData.description) {
      setError("Description is required.");
      setIsSubmitting(false);
      return;
    }

    data.append("title", formData.title);
    data.append("image", formData.image);
    data.append("description", formData.description); // Send HTML description

    try {
      const response = await fetch("https://adminbackend-iypc.onrender.com/upload", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      const result = await response.json();
      alert(`Form submitted successfully: ${result.message}`);

      // Clear the form data and reset the editor content
      setFormData({
        title: "",
        image: "",
        description: "",
      });
      setEditorState(EditorState.createEmpty()); // Clear the editor

    } catch (error) {
      console.error("Error submitting form:", error);
      setError("An error occurred while submitting the form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto p-6 bg-white rounded-lg shadow-md scale-90">
      <h1 className="md:text-4xl text-2xl font-bold text-green-600 mb-6 text-center">
        Blog Admin
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            BLOG Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            className="mt-2 w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            BLOG Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
            required
            className="mt-2 w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            BLOG Description
          </label>
          
          {/* Toolbar for text formatting */}
          <div className="mb-4 flex space-x-4">
            <button
              type="button"
              onClick={() => handleFormat("BOLD")}
              className="px-4 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300"
            >
              Bold
            </button>
            <button
              type="button"
              onClick={() => handleFormat("ITALIC")}
              className="px-4 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300"
            >
              Italic
            </button>
            <button
              type="button"
              onClick={() => handleFormat("UNDERLINE")}
              className="px-4 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300"
            >
              Underline
            </button>
            {/* <button
              type="button"
              onClick={() => handleFormat("STRIKETHROUGH")}
              className="px-4 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300"
            >
              Strikethrough
            </button> */}
          </div>

          {/* Draft.js Editor */}
          <div className="mt-2 w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
            <Editor
              editorState={editorState}
              onChange={handleEditorChange}
              placeholder="Start writing here..."
              ref={editorRef}
            />
          </div>
        </div>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-200"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
