<script>
	import { images } from './software_data.js';
	
	import ButtonContainer from '../gallery/button_container.svelte';
	import Gallery from '../gallery/gallery.svelte';
	
	let selected = "all";
	
	const filterSelection = (e) => selected = e.target.dataset.name;
</script>

<main>
  <h1>Software I've Written</h1>
	<Gallery>
		{#each images as {name, img, url, keyword, descr}}	
      <div class="column">
        <div class="content">
          <a href={url}><img src={img} alt={name} style="width:100%"></a>
          <h4>{name}</h4>
          <p>{descr}</p>
        </div>
      </div>
		{/each}
	</Gallery>
</main>

<style>
main {
  max-width: 100vw;
  display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

h4 {
  font-size: 2rem;
  margin: 0;
}
	
p {
	margin: 0 0 .5rem;
	position: relative;
}

.column {
  width: 50%;
	display: none;
	justify-content: center;
	margin: 10px 0;
}

.content {
	margin: 5px;
  padding: 10px;
	width: 30vw;
  /*border*/
}
	
	img {
		min-height: 200px;
	}

.column {
  display: flex;
}

@media only screen and (max-width:768px) { 
    .column {  
    display:table; 
    width:100%; 
} 
.content { 
    display:block; 
    width:100%; 
} 
}

</style>