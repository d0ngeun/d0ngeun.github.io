<script lang="ts">
	import type { PageData } from './$types';

	import PageHead from '$lib/components/PageHead.svelte';
	import Article from '$lib/components/Article.svelte';
	import ArticleTitle from '$lib/components/ArticleTitle.svelte';
	import ArticleMeta from '$lib/components/ArticleMeta.svelte';
	import ArticleDescription from '$lib/components/ArticleDescription.svelte';
	import ButtonContainer from '$lib/gallery/button_container.svelte';
	import Gallery from '$lib/gallery/gallery.svelte';
	
	let selected = "all";
	
	const filterSelection = (e) => selected = e.target.dataset.name;

	export let data: PageData;
</script>

<PageHead title="Blogs" description="An awesome blog about development with Svelte" />

<ButtonContainer>
    <button class:active={selected === "all"} 
                    class="btn" 
                    data-name={"all"} 
                    on:click={filterSelection}>
        {"all"}
    </button>
    <button class:active={selected === "devlogs"} 
                    class="btn" 
                    data-name={"devlogs"} 
                    on:click={filterSelection}>
        {"devlogs"}
    </button>
    <button class:active={selected === "college"} 
                    class="btn" 
                    data-name={"college"} 
                    on:click={filterSelection}>
        {"college"}
    </button>
    <button class:active={selected === "essays"} 
                    class="btn" 
                    data-name={"essays"} 
                    on:click={filterSelection}>
        {"essays"}
    </button>
</ButtonContainer>

<Gallery>
    {#each data.posts as {slug, title, description, date, tag }}	
        {#if selected === "all"}
            <div class="show column">
                <a href="/blogs/{slug}" style="display:block;">
                    <div class="content">
                        <Article>
                            <ArticleTitle {slug} {title} />
                            <ArticleDescription {description} />
                            <ArticleMeta {date} />
                        </Article>
                    </div>
                </a>
            </div>
        {:else}
            <div class:show={selected === tag} class="column">
                <a href="/blogs/{slug}" style="display:block;">
                    <div class="content">
                        <Article>
                            <ArticleTitle {slug} {title} />
                            <ArticleDescription {description} />
                            <ArticleMeta {date} />
                        </Article>
                    </div>
                </a>
            </div>
        {/if}
    {/each}
</Gallery>

<slot />


<style>
    
a {
    color: black;
    text-decoration: none;
}

/* Create three equal columns */
.column {
    width: 50%;
    display: none;
    justify-content: center;
    margin: 10px 0;
}


/* Content */
.content {
    background-color: white;
    margin: 5px;
    padding: 10px;
    width: 40vw;
    overflow: auto;
    border-style: solid;
    border-width: 1px;
    text-align: center;
}

/* The "show" class is added to the filtered elements */
.show {
    display: flex;
}

/* Style the buttons */
.btn {
    width: 150px;
    text-transform: uppercase;
    font-weight: 200;
    font-size: 1.2rem;
    letter-spacing: 1px;
    border: none;
    outline: none;
    margin: 5px;
    padding: 14px 16px 12px;
    background-color: white;
    border: 1px solid black;
    cursor: pointer;
    transition: .1s ease-in-out;
}


    /* Add a dark background color to the active button */
.btn:active,
.active {
    background-color: #000;
    color: white;
}

@media only screen and (max-width:768px) { 
    .show {  
    display:table; 
    width:93%; 
} 
.content { 
    display:block; 
    width:100%; 
} 
}

</style>