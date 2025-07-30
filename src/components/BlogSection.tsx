import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import blogTeamAction from "@/assets/blog-team-action.jpg";
import blogDesignProcess from "@/assets/blog-design-process.jpg";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "5 Essential Tips for Designing Winning Team Uniforms",
      excerpt: "Learn how color psychology, fabric choice, and design elements can give your team a psychological edge on the field.",
      image: blogDesignProcess,
      author: "Sarah Mitchell",
      date: "March 15, 2024",
      category: "Design Tips",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "The Psychology of Team Colors: Why Your Uniform Matters",
      excerpt: "Discover how the right colors can boost team confidence and intimidate opponents. A deep dive into sports psychology.",
      image: blogTeamAction,
      author: "Mike Rodriguez",
      date: "March 12, 2024",
      category: "Sports Psychology",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 3,
      title: "From Concept to Field: Our Custom Design Process",
      excerpt: "Take a behind-the-scenes look at how we transform your vision into high-quality, game-ready uniforms.",
      image: blogDesignProcess,
      author: "Jessica Chen",
      date: "March 10, 2024",
      category: "Behind the Scenes",
      readTime: "4 min read",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-primary">GAMEBREAKER</span> INSIGHTS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert tips, industry insights, and stories from the world of sports uniforms
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Blog Post */}
          <div className="lg:col-span-2">
            <article className="card-gradient rounded-lg overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in group">
              <div className="relative">
                <img 
                  src={blogs[0].image} 
                  alt={blogs[0].title}
                  className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>
                <Badge className="absolute top-4 right-4 bg-gamebreaker-gray">{blogs[0].category}</Badge>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {blogs[0].author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {blogs[0].date}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    {blogs[0].readTime}
                  </div>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-card-foreground group-hover:text-primary transition-colors">
                  {blogs[0].title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {blogs[0].excerpt}
                </p>
                
                <Button variant="gamebreaker" className="group">
                  Read Full Article 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          </div>

          {/* Side Blog Posts */}
          <div className="space-y-6">
            {blogs.slice(1).map((blog, index) => (
              <article 
                key={blog.id}
                className="card-gradient rounded-lg overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 right-2 bg-gamebreaker-gray text-xs">
                    {blog.category}
                  </Badge>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <span>{blog.author}</span>
                    <span>•</span>
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  
                  <h4 className="text-lg font-bold mb-2 text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  
                  <Button variant="outline" size="sm" className="w-full group">
                    Read More 
                    <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="cta" size="lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;