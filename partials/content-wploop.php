<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

    <?php the_content(); ?>

    <!-- Code allowing somone to leave comments on a page can go here -->
    <?php //comments_template(); ?>

<?php endwhile; else: ?>

    <p>Sorry, we couln't find that page. If you are struggling to find what you are looking for why not <a href="/contact-us">contact us</a>.</p>

<?php endif; ?>
