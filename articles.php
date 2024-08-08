<?php include "header.php"; ?>
<div class="articles_content">
	<div class="container flex">
		<h1>Статьи</h1>
		<form class="search">
			<input type="text" name="s" placeholder="#статья">
			<button type="submit">
				<img src="img/search.svg" class="standart">
				<img src="img/search_night.svg" class="night">
				<img src="img/search_contrast.svg" class="contrast">
			</button>
		</form>
	</div>
	<div class="container flex">
		<div class="article_item">
			<div class="article_bg"></div>
			<div class="article_img">
				<img src="img/article-image1.jpg">
			</div>
			<a href="#" class="top_a"><img src="img/arrow_right.svg"></a>
			<a href="#" class="bottom_a">Как быстро избавиться от насморка у ребенка</a>
		</div>
		<div class="article_item">
			<div class="article_bg"></div>
			<div class="article_img">
				<img src="img/article-image2.jpg">
			</div>
			<a href="#" class="top_a"><img src="img/arrow_right.svg"></a>
			<a href="#" class="bottom_a">Как избавиться от хронического насморка</a>
		</div>
		<div class="article_item">
			<div class="article_bg"></div>
			<div class="article_img">
				<img src="img/article-image3.jpg">
			</div>
			<a href="#" class="top_a"><img src="img/arrow_right.svg"></a>
			<a href="#" class="bottom_a">Как быстро избавиться от заложенности носа</a>
		</div>
		<div class="article_item">
			<div class="article_bg"></div>
			<div class="article_img">
				<img src="img/article-image4.jpg">
			</div>
			<a href="#" class="top_a"><img src="img/arrow_right.svg"></a>
			<a href="#" class="bottom_a">Аллергический синусит</a>
		</div>
	</div>
</div>
<?php include "footer.php"; ?>