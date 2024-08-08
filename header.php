<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="style.css?v=3" />	
	<link rel="stylesheet" href="media.css?v=3" />	
</head>
<body>
	<div class="mobile_menu">
		<ul>
			<?php include("menu.php"); ?>
		</ul>
	</div>
	<header>
		<div class="logo">
			<img src="img/logo.svg" class="standart">
			<img src="img/logo_blue.svg" class="night">
			<img src="img/logo_black.svg" class="contrast">
		</div>
		<ul class="header_menu">
			<?php include("menu.php"); ?>
		</ul>
		<div class="header_buttons">
			<a href="#night">
				<img src="img/moon.svg" class="standart">
				<img src="img/daymode.svg" class="night">
				<img src="img/moon_black.svg" class="contrast">
			</a>
			<a href="#contrast">AA</a>
			<div class="button_mobile_menu">
				<a href="#menu_open">
					<img src="img/menu_open.svg" class="standart">
					<img src="img/menu_open_night.svg" class="night">
					<img src="img/menu_open_contrast.svg" class="contrast">
				</a>
				<a href="#menu_close">
					<img src="img/menu_close.svg" class="standart">
					<img src="img/menu_close_night.svg" class="night">
					<img src="img/menu_close_contrast.svg" class="contrast">
				</a>
			</div>
		</div>
	</header>