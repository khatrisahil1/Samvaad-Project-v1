"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MessageSquare, Heart, ThumbsUp, Flag } from "lucide-react"

export default function CommunityForum() {
  const [newPostContent, setNewPostContent] = useState("")
  const [isAnonymous, setIsAnonymous] = useState(true)
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Anonymous User 1",
      content: "Feeling a bit overwhelmed with studies lately. Anyone else experiencing this?",
      reactions: { hearts: 15, thumbsUp: 8 },
      comments: 3,
      isAnonymous: true,
      tags: ["#Healing", "#CyberWellness"],
    },
    {
      id: 2,
      author: "Empathetic Listener",
      content: "Just wanted to share a positive thought: 'Every day is a new opportunity to grow.' Stay strong!",
      reactions: { hearts: 22, thumbsUp: 12 },
      comments: 5,
      isAnonymous: false,
      tags: ["#Expression", "#Uplifting"],
    },
  ])

  const handlePostSubmit = () => {
    if (newPostContent.trim()) {
      const newPost = {
        id: posts.length + 1,
        author: isAnonymous ? "Anonymous User" : "Your Name (Placeholder)", // Replace with actual user name in real app
        content: newPostContent.trim(),
        reactions: { hearts: 0, thumbsUp: 0 },
        comments: 0,
        isAnonymous: isAnonymous,
        tags: ["#Expression"], // Default tag for new posts
      }
      setPosts([newPost, ...posts])
      setNewPostContent("")
    }
  }

  const handleReaction = (postId: number, type: "hearts" | "thumbsUp") => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, reactions: { ...post.reactions, [type]: post.reactions[type] + 1 } } : post,
      ),
    )
  }

  return (
    <main className="flex-1 py-16 md:py-24 bg-background animate-fade-in">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-foreground">
          Community Forum
        </h1>

        {/* New Post Section */}
        <Card className="mb-8 p-6 bg-card text-card-foreground shadow-lg border-border">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-2xl font-heading font-semibold">Share Your Thoughts</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Label htmlFor="new-post" className="sr-only">
              What's on your mind?
            </Label>
            <Textarea
              id="new-post"
              placeholder="What's on your mind? Share your feelings, ask a question, or offer support. Remember, this is a safe and non-judgmental space."
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              rows={4}
              className="mb-4 border-border focus:ring-primary focus:border-primary"
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="anonymous-post"
                  checked={isAnonymous}
                  onChange={() => setIsAnonymous(!isAnonymous)}
                  className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
                />
                <Label htmlFor="anonymous-post" className="font-body text-muted-foreground">
                  Post Anonymously
                </Label>
              </div>
              <Button
                onClick={handlePostSubmit}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-body"
                disabled={!newPostContent.trim()}
              >
                Post to Community
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4 font-body">
              <span className="font-semibold">Moderation Note:</span> All posts are reviewed to ensure a supportive and
              respectful environment. We're here to keep this space safe for everyone.
            </p>
          </CardContent>
        </Card>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.id} className="p-6 bg-card text-card-foreground shadow-sm border-border">
              <CardHeader className="p-0 mb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-heading font-semibold">
                    {post.isAnonymous ? "Anonymous" : post.author}
                  </CardTitle>
                  {post.isAnonymous && (
                    <span className="text-xs font-body text-muted-foreground px-2 py-1 rounded-full bg-muted">
                      Anonymous
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <p className="font-body text-foreground mb-4">{post.content}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags?.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-body px-2 py-1 rounded-full bg-accent text-accent-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-muted-foreground text-sm font-body">
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-1 text-muted-foreground hover:text-primary"
                      onClick={() => handleReaction(post.id, "hearts")}
                    >
                      <Heart className="h-4 w-4" /> {post.reactions.hearts}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-1 text-muted-foreground hover:text-primary"
                      onClick={() => handleReaction(post.id, "thumbsUp")}
                    >
                      <ThumbsUp className="h-4 w-4" /> {post.reactions.thumbsUp}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-1 text-muted-foreground hover:text-primary"
                    >
                      <MessageSquare className="h-4 w-4" /> {post.comments} Comments
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1 text-muted-foreground hover:text-destructive"
                  >
                    <Flag className="h-4 w-4" /> Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
