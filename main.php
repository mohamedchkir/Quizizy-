<?php

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Quizizy™</title>
  <link rel="stylesheet" href="assets\sass\style.css" />
</head>

<body>
  <div class="container">
    <header>
      <nav>
        <img src="assets/img/LOGOO.png" alt="" />
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Profile</a></li>
          <li><a href="">About</a></li>
        </ul>
      </nav>
    </header>
    <section>
      <div class="button-container">
        <input id="username" type="text" placeholder="Your Username " />
        <input id="empty-input" type="hidden" placeholder=" " />
        <!-- <button class="button button-1">Let's Goo</button> -->
        <form action="index1.html">
          <button id="lets" class="button button-1" onclick="getname()">Let's Goo</button>
        </form>
      </div>
    </section>
  </div>
</body>
<script src="./assets/js/main.js"></script>

</html>