import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { CalendarDays, Clock, User, Search, ArrowRight } from "lucide-react";
import blogTeamAction from "@/assets/blog-team-action.jpg";
import blogDesignProcess from "@/assets/blog-design-process.jpg";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "The Ultimate Guide to Custom Team Uniform Design",
      excerpt: "Learn the essential principles of creating stunning team uniforms that boost morale and performance.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Design Tips",
      image: blogDesignProcess,
      featured: true
    },
    {
      id: 2,
      title: "Color Psychology in Sports: How Uniform Colors Impact Performance",
      excerpt: "Discover how different colors can influence team psychology and fan engagement.",
      author: "Mike Chen",
      date: "March 12, 2024", 
      readTime: "6 min read",
      category: "Sports Science",
      image: blogTeamAction,
      featured: false
    },
    {
      id: 3,
      title: "2024 Uniform Trends: What's Hot This Season",
      excerpt: "Explore the latest trends in sports uniform design and fabric technology.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "5 min read", 
      category: "Trends",
      image: blogDesignProcess,
      featured: false
    },
    {
      id: 4,
      title: "Fabric Technology: Moisture-Wicking vs. Traditional Materials",
      excerpt: "Compare different fabric technologies and their impact on athletic performance.",
      author: "David Kim",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Technology",
      image: blogTeamAction,
      featured: false
    }
  ];

  const categories = ["All", "Design Tips", "Sports Science", "Trends", "Technology", "Team Building"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-primary">GAMEBREAKER</span> BLOG
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Insights, tips, and trends from the world of custom sports uniforms
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search articles..." 
              className="pl-10"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
          <div className="card-gradient rounded-lg overflow-hidden shadow-card hover:shadow-glow transition-all duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={posts[0].image} 
                  alt={posts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <Badge className="mb-4">{posts[0].category}</Badge>
                <h3 className="text-2xl font-bold mb-4">{posts[0].title}</h3>
                <p className="text-muted-foreground mb-6">{posts[0].excerpt}</p>
                
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {posts[0].author}
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" />
                    {posts[0].date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {posts[0].readTime}
                  </div>
                </div>
                
                <Button variant="gamebreaker">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post) => (
            <article key={post.id} className="group card-gradient rounded-lg overflow-hidden shadow-card hover:shadow-glow transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3">
                  {post.category}
                </Badge>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary">
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="cta" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;