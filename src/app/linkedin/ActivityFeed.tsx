// components/ActivityFeed.tsx
"use client";
import { motion } from 'motion/react';
import { useState } from 'react';
import { 
  ThumbsUp, 
  MessageCircle, 
  Repeat2, 
  Send, 
  MoreHorizontal,
  Heart,
  Award,
  Lightbulb,
  HandHeart
} from 'lucide-react';
import mockData from '../../data/linkedin-portfolio.json';

const reactionTypes = {
  like: { icon: ThumbsUp, color: 'text-blue-600', bg: 'bg-blue-600' },
  love: { icon: Heart, color: 'text-red-600', bg: 'bg-red-600' },
  celebrate: { icon: Award, color: 'text-green-600', bg: 'bg-green-600' },
  support: { icon: HandHeart, color: 'text-purple-600', bg: 'bg-purple-600' },
  insightful: { icon: Lightbulb, color: 'text-amber-600', bg: 'bg-amber-600' }
};

export default function ActivityFeed() {
  const { posts } = mockData;
  const [userReactions, setUserReactions] = useState<Record<number, string | null>>({});
  const [showReactions, setShowReactions] = useState<number | null>(null);

  const handleReaction = (postId: number, reaction: string) => {
    setUserReactions(prev => ({
      ...prev,
      [postId]: prev[postId] === reaction ? null : reaction
    }));
    setShowReactions(null);
  };

  const getTotalReactions = (reactions: any) => {
    return Object.values(reactions).reduce((sum: number, count: any) => sum + count, 0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="space-y-6"
    >
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-lg border border-gray-200 overflow-hidden"
        >
          {/* Post Header */}
          <div className="p-4 flex items-start justify-between">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold">KS</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                <p className="text-sm text-gray-600">{post.author.headline}</p>
                <p className="text-xs text-gray-500">{post.timestamp} • 🌍</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="p-2 text-gray-400 hover:bg-gray-100 rounded-full"
            >
              <MoreHorizontal size={20} />
            </motion.button>
          </div>

          {/* Post Content */}
          <div className="px-4 pb-4">
            <p className="text-gray-800 leading-relaxed whitespace-pre-line mb-4">
              {post.content}
            </p>
            
            {post.images && post.images.length > 0 && (
              <div className="mb-4">
                <div className="w-full h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600">Project Screenshot</span>
                </div>
              </div>
            )}
          </div>

          {/* Engagement Stats */}
          <div className="px-4 py-2 flex items-center justify-between text-sm text-gray-600 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {Object.entries(post.reactions)
                  .filter(([_, count]) => count > 0)
                  .slice(0, 3)
                  .map(([reaction, _], idx) => {
                    const ReactionIcon = reactionTypes[reaction as keyof typeof reactionTypes];
                    return (
                      <div 
                        key={reaction}
                        className={`w-5 h-5 ${ReactionIcon.bg} rounded-full flex items-center justify-center`}
                      >
                        <ReactionIcon.icon size={12} className="text-white" />
                      </div>
                    );
                  })}
              </div>
              <span>{getTotalReactions(post.reactions)} reactions</span>
            </div>
            <div className="flex items-center gap-4">
              <span>{post.comments} comments</span>
              <span>{post.shares} reposts</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-4 py-2 border-t border-gray-100">
            <div className="grid grid-cols-4 gap-2">
              {/* Like Button with Reactions */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => setShowReactions(post.id)}
                  onMouseLeave={() => setShowReactions(null)}
                  className={`flex items-center justify-center gap-2 w-full px-3 py-2 rounded-lg font-medium transition-colors ${
                    userReactions[post.id] 
                      ? `${reactionTypes[userReactions[post.id] as keyof typeof reactionTypes].color} bg-blue-50`
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <ThumbsUp size={16} />
                  <span className="text-sm">Like</span>
                </motion.button>

                {/* Reaction Picker */}
                {showReactions === post.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white border border-gray-200 rounded-full px-2 py-1 shadow-lg flex gap-1"
                  >
                    {Object.entries(reactionTypes).map(([reaction, config]) => (
                      <motion.button
                        key={reaction}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleReaction(post.id, reaction)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 ${config.color}`}
                      >
                        <config.icon size={16} />
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium transition-colors"
              >
                <MessageCircle size={16} />
                <span className="text-sm">Comment</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium transition-colors"
              >
                <Repeat2 size={16} />
                <span className="text-sm">Repost</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium transition-colors"
              >
                <Send size={16} />
                <span className="text-sm">Send</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
