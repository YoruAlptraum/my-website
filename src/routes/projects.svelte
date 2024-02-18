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
	import { projectList } from './projects.js'

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
			element.addEventListener('pointerover', handleMouseOver(element));
			element.addEventListener('pointerout', handleMouseOut(element));
		});

		// Cleanup on component unmount
		return () => {
			projects.forEach((element) => {
				element.removeEventListener('pointerover', handleMouseOver);
				element.removeEventListener('pointerout', handleMouseOut);
			});
		};

	});
</script>

<section class="section" id="projects">
	<h3 class="highlight">Projects</h3>
	{#each projectList as project}
		<a class="project" href={project.link} target="_blank">
			{#if project.img}
				<div class="left">
					<img src={project.img} alt="{project.title} - Project image" />
				</div>				
			{/if}
			<div class="right">
				<h4>{project.title}</h4>
				<p>
					{@html project.inner}
				</p>
				<ul class="techs">
					{#each project.techs as tech}
						<li class="tech">{tech}</li>
					{/each}
				</ul>
			</div>
		</a>
	{/each}
</section>
