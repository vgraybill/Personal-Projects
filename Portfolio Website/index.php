<?php 
require('config.php');
require('vendor/PHPMailer/src/Exception.php');
require('vendor/PHPMailer/src/PHPMailer.php');
require('vendor/PHPMailer/src/SMTP.php');

require_once('incl/functions.php');
require('incl/contact-pars.php'); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="Ginny Graybill Designs Home Page" content="Ginny Graybill's Graphic Design and Web Development portfolio.">
    <title>Ginny Graybill Designs - Web and Graphic Design</title>
    <link href="css/reset.css" type="text/css" rel="stylesheet">
    <link href="css/style.css" type="text/css" rel="stylesheet">

    <link rel="preload" as="image" href="img/hero/hero2.webp">
    <link rel="preload" as="image" href="img/hero/hero3.webp">
    <link rel="preload" as="image" href="img/hero/hero5.webp">
    <link rel="preload" as="image" href="img/hero/hero6.webp">
    <link rel="preload" as="image" href="img/hero/hero4.webp">

    <link rel="preload" as="image" href="img/hero/hero2lg.webp">
    <link rel="preload" as="image" href="img/hero/hero3lg.webp">
    <link rel="preload" as="image" href="img/hero/hero5lg.webp">
    <link rel="preload" as="image" href="img/hero/hero6lg.webp">
    <link rel="preload" as="image" href="img/hero/hero4lg.webp">

    <script src="https://kit.fontawesome.com/843ca2f650.js" crossorigin="anonymous"></script>
</head>
<body>

<?php include('incl/header.php') ?>

    <main>
        <section class="hero">
            <div class="gradient">
                <div class="blerb">
                    <h2>Design and Development</h2>
                    <p>Using HTML, CSS, JS and Jquery, the Adobe Creative Suite and Procreate
                    </p>
                    <a href="" class="button">See Projects</a>
                </div>
            </div>
        </section>


        <div class="hr"></div>
        <h3>Featured Projects</h3>
        <div class="hr"></div>

        <section class="projects">
            <a href="int/webdesign/bitesized/index.html"><article id="feat1">
                <div class="overlay">
                    <div>
                        <h4>Bite Sized Building Company</h4>
                    </div>
                </div>
            </article></a>
            <article id="feat4">
                <div class="overlay">
                    <div>
                        <h4>Sticker Designs</h4>
                    </div>
                </div>
            </article>
            <article id="feat2">
                <div class="overlay">
                    <div>
                        <h4>The Pixel Patch</h4>
                    </div>
                </div>
            </article>
            <article id="feat3">
                <div class="overlay">
                    <div>
                        <h4>Eyeshadow Pallet Concept</h4>
                    </div>
                </div>
            </article>
            <article id="feat5">
                <div class="overlay">
                    <div>
                        <h4>Apple Ad Concept</h4>
                    </div>
                </div>
            </article>
            <article id= "feat6">
                <div class="overlay">
                    <div>
                        <h4>Sticker Designs</h4>
                    </div>
                </div>
            </article>
        </section>

        <div class="hr" id="contact"></div>
        <h3>Contact</h3>
        <div class="hr"></div>

        <?php show_feedback($message, $class, $errors); ?>

        <form action="index.php#contact" method="post">
            <div>
                <label>Name</label>
                <input type="text" name="name" id="name" value="<?php echo htmlspecialchars($name); ?>">
            </div>
            <div>
                <label>E-mail </label>
                <input type="text" name="email" id="email" value="<?php echo htmlspecialchars($email); ?>">
            </div>
            <div>
                <label>Message </label>
                <textarea name="message" id="message"><?php echo htmlspecialchars($messages); ?></textarea>
            </div>
            <input type="submit" value="Send" class="button">
            <input type="hidden" name="did_submit" value="1">

        </form>


    </main>




<?php include('incl/footer.php'); ?>