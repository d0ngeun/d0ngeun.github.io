<script>
    import Software_gallery from "$lib/software_gallery/software_gallery.svelte"
</script>

<div class="profile">
    <div class="profile_inner">
        <div class="profile_img">
            <img src="https://i.pinimg.com/originals/4f/c9/81/4fc981d2f0d226ce16b40d35bdd25787.jpg" alt="asd">
        </div>
        <div class="profile_text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem dolor sed viverra ipsum. Odio euismod lacinia at quis risus. Fusce id velit ut tortor pretium viverra. Condimentum id venenatis a condimentum vitae. Pretium fusce id velit ut tortor pretium viverra. Risus sed vulputate odio ut enim blandit. Scelerisque fermentum dui faucibus in. Viverra maecenas accumsan lacus vel facilisis. Pulvinar neque laoreet suspendisse interdum consectetur libero id. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Blandit turpis cursus in hac habitasse platea. Nulla at volutpat diam ut venenatis tellus in.</p>    
        </div>
    </div>
    <div class="software">
        <Software_gallery></Software_gallery>
    </div>
</div>

<style>
.profile {
    padding-top: 5%;
    width: 50%;
    margin: auto;
}
.profile_inner {
  display: flex;
  justify-content: space-between;
  padding-bottom: 15%;
}
.profile_inner img {
    height: 200px;
}
.profile_img {
    padding: 20px;
}
.profile_text {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: break-word;
}
.software {
    padding-top: 10%;
    text-align: center;
}

/* 768px */
@media only screen and (max-width:48em) {
   .profile_inner { 
      display:table;
      width:100%;
   }
   .profile_text {
      display:block;
      width:100%;
   }
   .profile_img { display:table-caption; }
}

</style>