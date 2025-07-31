<?php get_header(); ?>

<main id="main" class="site-main">
    <?php if (have_posts()) : ?>
        
        <div class="container py-12">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php while (have_posts()) : the_post(); ?>
                    
                    <article id="post-<?php the_ID(); ?>" <?php post_class('bg-white rounded-lg shadow-lg overflow-hidden'); ?>>
                        
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="post-thumbnail">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail('blog-thumb', array('class' => 'w-full h-48 object-cover')); ?>
                                </a>
                            </div>
                        <?php endif; ?>
                        
                        <div class="p-6">
                            
                            <header class="entry-header mb-4">
                                <h2 class="entry-title text-xl font-bold mb-2">
                                    <a href="<?php the_permalink(); ?>" class="text-gray-900 hover:text-primary">
                                        <?php the_title(); ?>
                                    </a>
                                </h2>
                                
                                <div class="entry-meta text-sm text-gray-600 mb-3">
                                    <span class="posted-on">
                                        <?php echo get_the_date(); ?>
                                    </span>
                                    <span class="byline">
                                        by <?php the_author(); ?>
                                    </span>
                                </div>
                            </header>
                            
                            <div class="entry-content">
                                <?php the_excerpt(); ?>
                            </div>
                            
                            <footer class="entry-footer mt-4">
                                <a href="<?php the_permalink(); ?>" class="btn-primary">
                                    Read More
                                </a>
                            </footer>
                            
                        </div>
                        
                    </article>
                    
                <?php endwhile; ?>
            </div>
            
            <?php
            // Pagination
            the_posts_navigation(array(
                'prev_text' => __('← Older posts', 'gamebreaker'),
                'next_text' => __('Newer posts →', 'gamebreaker'),
            ));
            ?>
            
        </div>
        
    <?php else : ?>
        
        <div class="container py-12 text-center">
            <h1 class="text-3xl font-bold mb-4">Nothing Found</h1>
            <p class="text-gray-600 mb-8">Sorry, but nothing matched your search terms. Please try again with different keywords.</p>
            <?php get_search_form(); ?>
        </div>
        
    <?php endif; ?>
</main>

<?php get_footer(); ?>