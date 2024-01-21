<style>
	* {
		text-decoration: none;
	}

	#projects {
		display: flex;
		flex-direction: column;
		gap: 2rem;

	}

	#projects h3 {
		margin-left: 10vw;
	}

	.project {
		display: flex;
		padding: 1rem;
		margin: auto;
		border-radius: 1rem;
		text-align: justify;
		align-items: center;
		gap: 1.5rem;
		transition: background-color 400ms;
		width: 60vw;
		transition: filter 500ms;
	}

	.project img {
		border-radius: 1rem;
		aspect-ratio: 16/9;
		width: 300px;
	}

	.right {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.techs {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.tech {
		text-wrap: nowrap;
		padding: 0.25rem 1.5rem;
		color: var(--radial3);
		background-color: var(--bg-light);
		border-radius: 20px;
		list-style-type: none;
		line-height: 1.3rem;
	}

	@media only screen and (max-width: 990px) {
		.project {
			flex-direction: column-reverse;
		}
	}

	:global(.active) {
		background-color: #020617;
	}

	:global(.inactive) {
		filter: brightness(25%) grayscale(50%);
	}
</style>

<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const projects = document.querySelectorAll('.project');

		const handleMouseOver = (element) => () => {
			element.classList.add('active');
			element.querySelector('h4').classList.add('highlight');
			projects.forEach((e) => {
				if (e !== element) {
					e.classList.add('inactive');
				}
			});
		};

		const handleMouseOut = (element) => () => {
			element.classList.remove('active');
			element.querySelector('h4').classList.remove('highlight');
			projects.forEach((e) => {
				if (e !== element) {
					e.classList.remove('inactive');
				}
			});
		};

		projects.forEach((element) => {
			element.addEventListener('mouseover', handleMouseOver(element));
			element.addEventListener('mouseout', handleMouseOut(element));
		});

		// Cleanup on component unmount
		return () => {
			projects.forEach((element) => {
				element.removeEventListener('mouseover', handleMouseOver);
				element.removeEventListener('mouseout', handleMouseOut);
			});
		};

	});
</script>

<section class="section" id="projects">
	<h3 class="highlight">Projects</h3>
	<a class="project" href="https://github.com/YoruAlptraum/web-scraper-tests" target="_blank">
		<div class="left">
			<img src="./web_scraping.png" alt="Project_image" />
		</div>
		<div class="right">
			<h4>Web Scraping</h4>
			<p>
				Extracting, cleaning and exporting website data to a excel file for easy to utilize data.<br
				/><br />
				Using beautiful soup it is really easy to get data from a site but it takes some time to check
				for inconsistencies on the site structure and to clean up the data. <br /><br />
				By extracting data from the site I'm also able to automate the download of all images on the
				site to a local folder.
			</p>
			<ul class="techs">
				<li class="tech">Python</li>
				<li class="tech">Beautiful Soup</li>
				<li class="tech">Pandas</li>
				<li class="tech">Google Colab</li>
			</ul>
		</div>
	</a>
	<a class="project" href="https://github.com/YoruAlptraum/pit-senai-v2" target="_blank">
		<div class="left">
			<img src="./pit.png" alt="Project_image" />
		</div>
		<div class="right">
			<h4>PIT SENAI</h4>
			<p>
				The PIT is the final project for the IT course in SENAI. <br /><br />
				For my final project I made a simple stock management app that allows for the registration of
				new items or clients as well as different levels of user access to manage the app.
			</p>
			<ul class="techs">
				<li class="tech">C#</li>
				<li class="tech">Windows Forms</li>
				<li class="tech">MySQL</li>
			</ul>
		</div>
	</a>

</section>
