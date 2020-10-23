<?php include('includes/header.php') ?>
<?php include('includes/splash.php') ?>
  
  <main>
    
    <section class="featured specialize" id="specialties">
      <div class="small-container">
        <h2>Specializing In...</h2>
        <ul>
          <li>
            <img src="img/wordpress.svg" alt="Wordpress logo">
            <p>Wordpress</p>
          </li>
          <li>
            <img src="img/django.svg" alt="Django logo">
            <p>Django</p>
          </li>
          <li>
            <img src="img/javascript.svg" alt="Javascript logo">
            <p>Javascript</p>
          </li>
        </ul>
      </div>
    </section>

    <section class="featured knowledge">
      <div class="small-container">
        <h2>Featuring Knowledge In...</h2>
          <ul>
            <li>
              <img src="img/sass.svg" alt="Sass logo">
              <p>Preprocessing</p>
            </li>
            <li>
              <img src="img/react.svg" alt="React logo">
              <p>React</p>
            </li>
            <li>
              <img src="img/webpack.svg" alt="Webpack logo">
              <p>Build Environments</p>
            </li>
            <li>
              <img src="img/php.svg" alt="PHP logo">
              <p>PHP</p>
            </li>
            <li>
              <img src="img/github.svg" alt="Git logo">
              <p>Version Control</p>
            </li>
          </ul>
      </div>
    </section>

    <section class="projects" id="projects">
      <div class="large-container">
        <h2>Favourite Projects</h2>
        <div class="project">
          <img src="img/controller.svg" alt="Game controller icon">
          <h3><a target="_blank" href="http://tristanhampton.ca/games">TH Games</a></h3>
          <p>A blog style web page built from scratch using WordPress’s engine. It’s main feature is the ability for a user to easily create three kinds of posts, without knowledge of code:</p>
          <ul>
            <li>- A detailed page about a game</li>
            <li>- A review style post</li>
            <li>- Video content linked from Twitter</li>
          </ul>
        </div>
        <div class="project">
          <img src="img/bean.svg" alt="Dancing bean icon">
          <h3><a target="_blank" href="http://tristanhampton.ca/music">Muzzic</a></h3>
          <p>A small music player built with vanilla JS. It features a JQuery plugin for the navigation menu. This is currently a WIP, but the prototype is live.</p>
        </div>
        <div class="project">
          <img src="img/indigenous-logo.svg" alt="Indigenous Storytelling Logo">
          <h3>
            <a target="_blank" href="https://indigenousstorytelling.ca">Indigenous Storytelling</a>
          </h3>
          <p>Indigenous Storytelling was a project brought to us through a client at NAIT. The goal of the website is to provide a safe space for indigenous students to share their stories and learn about their culture. This project was built with the Django framework, and the work that I contributed to this project involved creating a custom user system that allows students, teachers, and admins to create accounts. As well, teachers have the ability to approve the registration of new students before they’re able to view or create content.</p>
        </div>
      </div>
    </section>

  </main>

  <?php include('includes/footer.php') ?>

