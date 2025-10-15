import React from "react";

const commentsData = [
  {
    name: "John",
    text: "Good video!",
    replies: [],
  },
  {
    name: "Sara",
    text: "I’ve been waiting for this video for a long time!",
    replies: [
      {
        name: "Mike",
        text: "Same here! So glad it’s finally out.",
        replies: [],
      },
    ],
  },
  {
    name: "Emily",
    text: "Perfect video for the right time.",
    replies: [],
  },
  {
    name: "David",
    text: "This video explains everything so clearly.",
    replies: [],
  },
  {
    name: "Liam",
    text: "Amazing content, keep it up!",
    replies: [
      {
        name: "Olivia",
        text: "Absolutely, love this channel!",
        replies: [],
      },
    ],
  },
  {
    name: "Sophia",
    text: "I didn’t expect this to be so helpful.",
    replies: [],
  },
  {
    name: "Noah",
    text: "Subscribing immediately!",
    replies: [],
  },
  {
    name: "Ava",
    text: "Can you make a part 2 for this?",
    replies: [
      {
        name: "Ethan",
        text: "Yes, I really want a follow-up too!",
        replies: [],
      },
    ],
  },
  {
    name: "Mason",
    text: "Wow, this is exactly what I was looking for!",
    replies: [],
  },
  {
    name: "Isabella",
    text: "The editing in this video is so smooth.",
    replies: [],
  },
  {
    name: "Lucas",
    text: "Your voice is really calming to listen to.",
    replies: [],
  },
  {
    name: "Mia",
    text: "I learned something new today, thanks!",
    replies: [],
  },
  {
    name: "Alexander",
    text: "This deserves way more views!",
    replies: [],
  },
  {
    name: "Charlotte",
    text: "The timestamp for each topic is super useful.",
    replies: [],
  },
  {
    name: "James",
    text: "Finally someone explains it properly.",
    replies: [],
  },
  {
    name: "Amelia",
    text: "I’m sharing this with all my friends.",
    replies: [],
  },
  {
    name: "Benjamin",
    text: "This content is gold!",
    replies: [],
  },
  {
    name: "Harper",
    text: "I didn’t know this before, thank you!",
    replies: [],
  },
  {
    name: "Elijah",
    text: "Can you make a tutorial on the next topic?",
    replies: [],
  },
  {
    name: "Evelyn",
    text: "Loved the way you explained this, simple and clear.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12" alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  if (!comments || comments.length === 0) return null;
  // Disclaimer: Don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      {comment.replies?.length > 0 && (  //doing the recursion ,(CommentList), hence they were the repiles--this will end level nesting.
        <div className="pl-5 border border-l-black ml-5">
          <CommentsList comments={comment.replies} />     
        </div>
      )}
    </div>
  ));
};


const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
<div className="flex items-center bg-gray-200 p-3 rounded-lg shadow-md mb-5">
  <img
    className="w-14 h-14 rounded-full mr-3"
    src="https://cdn.dribbble.com/userupload/30570804/file/original-f7825d66647d26b09d68f0e481980cd0.jpg?resize=752x&vertical=center" // sample channel logo
    alt="channel-logo"
  />
  
  <div className="flex flex-col">
    <h2 className="text-xl font-semibold">BuzzTube Channel</h2>
    <p className="text-gray-600 text-sm">1.2M subscribers</p>
  </div>

  {/* 🟥 Subscribe button — placed right next to channel name */}
  <button className="ml-4 bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700 transition text-sm">
    Subscribe
  </button>
</div>


      {/* 💬 Existing Comments Section */}
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
